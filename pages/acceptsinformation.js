import React from 'react';
import {Toast,Button, Heading, Form, FormLayout,SettingToggle} from '@shopify/polaris';
import axios from 'axios';


import "@shopify/polaris/styles.css";



class Acceptinformation extends React.Component {
    constructor(props) {
        super(props);

        const allsetting = props.settings;


        if(allsetting!=false) {

            let info_like1 = false;
            let info_like_button_name1 = 'Enable';
            if(allsetting.info_like){
                if(allsetting.info_like == 'false'){
                    info_like1  =  false;
                    info_like_button_name1  =  'Enable';
                }else{
                    info_like1  =  true;
                    info_like_button_name1  =  'Disable';
                }
            }


            let info_comment1 = false;
            let info_comment_button_name1 = 'Enable';
            if(allsetting.info_comment){
                if(allsetting.info_comment == 'false'){
                    info_comment1  =  false;
                    info_comment_button_name1  =  'Enable';
                }else{
                    info_comment1  =  true;
                    info_comment_button_name1  =  'Disable';
                }
            }


            let info_description1 = false;
            let info_description_button_name1 = 'Enable';
            if(allsetting.info_description){
                if(allsetting.info_description == 'false'){
                    info_description1  =  false;
                    info_description_button_name1  =  'Enable';
                }else{
                    info_description1  =  true;
                    info_description_button_name1  =  'Disable';
                }
            }


            let popup_like1 = false;
            let popup_like_button_name1 = 'Enable';
            if(allsetting.popup_like){
                if(allsetting.popup_like == 'false'){
                    popup_like1  =  false;
                    popup_like_button_name1  =  'Enable';
                }else{
                    popup_like1  =  true;
                    popup_like_button_name1  =  'Disable';
                }
            }


            let popup_comment1 = false;
            let popup_comment_button_name1 = 'Enable';
            if(allsetting.popup_comment){
                if(allsetting.popup_comment == 'false'){
                    popup_comment1  =  false;
                    popup_comment_button_name1  =  'Enable';
                }else{
                    popup_comment1  =  true;
                    popup_comment_button_name1  =  'Disable';
                }
            }


            let popup_description1 = false;
            let popup_description_button_name1 = 'Enable';
            if(allsetting.popup_description){
                if(allsetting.popup_description == 'false'){
                    popup_description1  =  false;
                    popup_description_button_name1  =  'Enable';
                }else{
                    popup_description1  =  true;
                    popup_description_button_name1  =  'Disable';
                }
            }

            this.state = {
                info_like:info_like1,
                info_like_status:info_like_button_name1,
                info_comment:info_comment1,
                info_comment_status:info_comment_button_name1,
                info_description:info_description1,
                info_description_status:info_description_button_name1,
                popup_like:popup_like1,
                popup_like_status:popup_like_button_name1,
                popup_comment:popup_comment1,
                popup_comment_status:popup_comment_button_name1,
                popup_description:popup_description1,
                popup_description_status:popup_description_button_name1,
                button_type : false,
                notification_status : false
            }

        }else{

            this.state = {
                info_like: false,
                info_like_status: 'Enable',
                info_comment: false,
                info_comment_status: 'Enable',
                info_description: false,
                info_description_status: 'Enable',
                popup_like: false,
                popup_like_status: 'Enable',
                popup_comment: false,
                popup_comment_status: 'Enable',
                popup_description: false,
                popup_description_status: 'Enable',
                button_type : false,
                notification_status : false
            }
        }

        this.handleInfoLike = this.handleInfoLike.bind(this);
        this.handleInfoComment = this.handleInfoComment.bind(this);
        this.handleInfoDescription = this.handleInfoDescription.bind(this);
        this.handlePopupLike = this.handlePopupLike.bind(this);
        this.handlePopupComment = this.handlePopupComment.bind(this);
        this.handlePopupDescription = this.handlePopupDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changestatus = this.changestatus.bind(this);
        this.handletoggleActive = this.handletoggleActive.bind(this);

    }





    handleSubmit(){

        this.setState({
            button_type : true
        })
        const search = window.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const shop_name = params.get('shop');

        const postdata = {
            option : 2,
            shop : shop_name,
            settings : this.state
        }

        const self = this;

        axios.post('http://localhost:5000/save_settings/',postdata)
            .then(function (response1) {
                self.changestatus()
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    changestatus(){
        this.setState({
            button_type : false,
            notification_status :true
        })
    }

    handleInfoLike(){

        if(this.state.info_like == false) {
            this.setState({
                info_like : true,
                info_like_status : 'Disable'
            })
        }else{
            this.setState({
                info_like : false,
                info_like_status : 'Enable'
            })
        }

    }

    handleInfoComment(){

        if(this.state.info_comment == false) {
            this.setState({
                info_comment : true,
                info_comment_status : 'Disable'
            })
        }else{
            this.setState({
                info_comment : false,
                info_comment_status : 'Enable'
            })
        }

    }

    handleInfoDescription(){

        if(this.state.info_description == false) {
            this.setState({
                info_description : true,
                info_description_status : 'Disable'
            })
        }else{
            this.setState({
                info_description : false,
                info_description_status : 'Enable'
            })
        }

    }


    handlePopupLike(){

        if(this.state.popup_like == false) {
            this.setState({
                popup_like : true,
                popup_like_status : 'Disable'
            })
        }else{
            this.setState({
                popup_like : false,
                popup_like_status : 'Enable'
            })
        }

    }

    handlePopupComment(){

        if(this.state.popup_comment == false) {
            this.setState({
                popup_comment : true,
                popup_comment_status : 'Disable'
            })
        }else{
            this.setState({
                popup_comment : false,
                popup_comment_status : 'Enable'
            })
        }

    }

    handlePopupDescription(){

        if(this.state.popup_description == false) {
            this.setState({
                popup_description : true,
                popup_description_status : 'Disable'
            })
        }else{
            this.setState({
                popup_description : false,
                popup_description_status : 'Enable'
            })
        }

    }

    handletoggleActive(){
        if(this.state.notification_status==false){
            this.setState({
                notification_status : true
            })
        }else{
            this.setState({
                notification_status : false
            })
        }

    }




    render() {


        let notification;

        if(this.state.notification_status==true){
            notification = (
                <Toast content="Save Successfully" onDismiss={this.handletoggleActive} active />
            );
        }

        return <div>
            <Form
                 onSubmit={this.handleSubmit}
            >
                <FormLayout>
                    <Heading>Information</Heading>
                    <FormLayout.Group>

                        <SettingToggle
                            action={{
                                content: this.state.info_like_status,
                                onAction: this.handleInfoLike,
                            }}
                            enabled={this.state.info_like}
                            >Like Count</SettingToggle>

                        <SettingToggle
                            action={{
                                content: this.state.info_comment_status,
                                onAction: this.handleInfoComment,
                            }}
                            enabled={this.state.info_comment}>Comment Count</SettingToggle>
                        <SettingToggle
                            action={{
                                content: this.state.info_description_status,
                                onAction: this.handleInfoDescription,
                            }}
                            enabled={this.state.info_description}>Description</SettingToggle>

                    </FormLayout.Group>

                    <Heading>Popup</Heading>

                    <FormLayout.Group>
                        <SettingToggle
                            action={{
                                content: this.state.popup_like_status,
                                onAction: this.handlePopupLike,
                            }}
                            enabled={this.state.popup_like}>Like Count</SettingToggle>
                        <SettingToggle
                            action={{
                                content: this.state.popup_comment_status,
                                onAction: this.handlePopupComment,
                            }}
                            enabled={this.state.popup_comment}>Comment Count</SettingToggle>
                        <SettingToggle
                            action={{
                                content: this.state.popup_description_status,
                                onAction: this.handlePopupDescription,
                            }}
                            enabled={this.state.popup_description}>Description</SettingToggle>

                    </FormLayout.Group>

                    <Button submit loading={this.state.button_type} primary>Submit</Button>
                </FormLayout>
            </Form>

            {notification}


        </div>;
    }


}

export default Acceptinformation;
