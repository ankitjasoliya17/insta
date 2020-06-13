import React from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import FacebookPage from '../pages/facebookpages';
import Instasettings from '../pages/instasettings';
import Instagram from '../pages/instagram';
import {Frame} from '@shopify/polaris';


class Index extends React.Component {

    constructor(props) {

        console.log(props);

        super(props);
        this.state = {
            isFBLoggedIn : true,
            userID:'',
            name:'',
            email:'',
            picture:'',
            allpages:'',
            fbpage : false,
            allsettings : '',
            post_shown:false
        };

        this.logoutFacebook = this.logoutFacebook.bind(this);
        this.setnewstatus = this.setnewstatus.bind(this);

    }

    componentDidMount(){


        const search = window.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const shop_name = params.get('shop');
        console.log(shop_name);
        // var shopname = this.shopname();
        // console.log('1111');
        // console.log(shopname);
        // console.log('2222');
        //
        //
        const postdata = {
            shop : shop_name,
        }
        //
        var self= this;

        axios.post('http://localhost:5000/check_login_account/',postdata)
            .then(function (response1) {
                console.log(response1);
                self.changefbstatus();
                if(response1.data==true){
                    axios.post('http://localhost:5000/get_fb_pages/',postdata)
                        .then(function (response) {
                            self.changestatus(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.post('http://localhost:5000/get_settings/',postdata)
            .then(function (response1) {
                self.setnewstatus(response1.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    setnewstatus(data){
        this.setState({
            allsettings : data
        })
    }

    changefbstatus(){
        this.setState({
            isFBLoggedIn : true,
        })
    }

    changestatus(response){
        this.setState({
            fbpage : true,
            allpages : response.data
        })
    }


    logoutFacebook(){
        console.log('111');
        this.setState({
            isFBLoggedIn : false
        })
    }

    setstatus(response) {
        console.log(response);
        this.setState({
            isFBLoggedIn : true,
            fbpage : true,
            allpages : response.data
        })
    }

    updateState() {
        this.setState({ post_shown: false });
    }


       responseFacebook = (response) => {

            if(response.data!='undefined'){
                var self= this;

                const search = window.location.search; // could be '?foo=bar'
                const params = new URLSearchParams(search);
                const shop_name = params.get('shop');

                const postdata = {
                    shop : shop_name,
                    response : response
                }

                axios.post('http://localhost:5000/save_accesstoken/',postdata)
                    .then(function (response1) {
                        console.log(response1);
                        const shopdata = {
                            shop : shop_name
                        }

                        axios.post('http://localhost:5000/get_fb_pages/',shopdata)
                            .then(function (response) {
                                self.setstatus(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

       }


    componentClicked = () => console.log('clieked');

   render() {

        let fbContent;

        if(this.state.isFBLoggedIn){
            if(this.state.fbpage){
                fbContent = (
                    <div>
                        <FacebookPage alldata={this.state.allpages} />
                    </div>
                );
            }
        }else{
            fbContent = (<FacebookLogin
                appId="591251971460198"
                autoLoad = {true}
                fields="name,email,picture"
                scope="public_profile,email,manage_pages,read_insights,pages_show_list,instagram_basic"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />);
        }

        let instasettings;

        if(this.state.allsettings!=''){
            instasettings = (
                <Instasettings allsettings={this.state.allsettings} />
            );
        }

        return <div className="ankit">
            <Frame>
            {instasettings}
            {fbContent}
            <Instagram />
            </Frame>
            </div>;
    }
}



export default Index;

