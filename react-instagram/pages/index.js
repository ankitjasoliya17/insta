import React from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import {Link} from '@shopify/polaris';
// import FacebookPage from '../pages/facebookpages';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFBLoggedIn : false,
            userID:'',
            name:'',
            email:'',
            picture:'',
            allpages:''
        };

        // This binding is necessary to make `this` work in the callback
        this.logoutFacebook = this.logoutFacebook.bind(this);
        // this.abcd = this.abcd.bind(this);

    }



    logoutFacebook(){
        console.log('111');
        this.setState({
            isFBLoggedIn : false
        })
    }

    // abcd(response,response1) {
    //     this.setState({
    //         isFBLoggedIn : true,
    //         userID:response1.userID,
    //         name:response1.name,
    //         email:response1.email,
    //         picture:response1.picture.data.url,
    //         allpages : response.data
    //     })
    // }


       responseFacebook = (response) => {

           var self=this;

           axios.post('http://localhost:5000/abcd/',response)
               .then(function (response1) {
                   console.log(response1);
                   // self.abcd(response1,response);
               })
               .catch(function (error) {
                   console.log(error);
               });
       }


    componentClicked = () => console.log('clieked');

    // async componentDidMount() {

        // const url = "http://localhost:5000/abcd/";
        // const response = await fetch(url,);
        // const data = await response.json();
        // console.log(data)


        // axios.post('http://localhost:5000/abcd/', {
        //     code: this.getUrlParameter('code')
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        // console.log(this.getUrlParameter('code'));
        // fetch("",this.getUrlParameter('code'))
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             console.log(result);
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             console.log(error)
        //         }
        //     )

    // }

    // getUrlParameter(sParam) {
    //     var sPageURL = window.location.search.substring(1),
    //         sURLVariables = sPageURL.split('&'),
    //         sParameterName,
    //         i;
    //
    //     for (i = 0; i < sURLVariables.length; i++) {
    //         sParameterName = sURLVariables[i].split('=');
    //
    //         if (sParameterName[0] === sParam) {
    //             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    //         }
    //     }
    // };





    render() {

        let fbContent;

        if(this.state.isFBLoggedIn){
            fbContent = (
                <div style={{width:'400px',margin:'auto',background:'#f4f4f4',padding:'20px'}}>
                    <Link onClick={this.logoutFacebook}>Logout</Link>
                    <img src={this.state.picture} alt={this.state.picture} />
                    <h2>{this.state.name}</h2>
                    Email : {this.state.email}

                    <FacebookPage alldata={this.state.allpages} />
                </div>
            );
        }else{
            fbContent = (<FacebookLogin
                appId="591251971460198"
                autoLoad = {true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />);
        }

        return <div className="ankit">{fbContent}</div>;
    }
}



export default Index;