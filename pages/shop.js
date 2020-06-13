import React from 'react';
import {Heading,Toast,Button, Checkbox, Form, FormLayout,SettingToggle,TextStyle, TextField,Select,Card,Page,Popover,ColorPicker,Stack,hsbToRgb,rgbToHsb,rgbString} from '@shopify/polaris';
import axios from 'axios';

import "@shopify/polaris/styles.css";



class Postsettings extends React.Component {
    constructor(props) {
        super(props);
        const allsetting = props.settings;

        if(allsetting!=false){

            let shopbackgroundcolordata = '';
            if(allsetting.shopbackgroundcolor){
                shopbackgroundcolordata = JSON.parse(allsetting.shopbackgroundcolor);
            }else{
                shopbackgroundcolordata = {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                }
            }

            let shoptextcolordata = '';
            if(allsetting.shoptextcolor){
                shoptextcolordata = JSON.parse(allsetting.shoptextcolor);
            }else{
                shoptextcolordata = {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                }
            }

            let shop_heading_value = '';
            if(allsetting.shop_heading_value){
                shop_heading_value = allsetting.shop_heading_value;
            }

            let shop_button = false;
            let shop_button_name = 'Enable';
            if(allsetting.shop_button){
                if(allsetting.shop_button == 'false'){
                    shop_button  =  false;
                    shop_button_name  =  'Enable';
                }else{
                    shop_button  =  true;
                    shop_button_name  =  'Disable';
                }
            }

            this.state = {
                shopbackgroundcolor: shopbackgroundcolordata,
                backgroundpopoverActive: false,
                shoptextcolor: shoptextcolordata,
                textpopoverActive: false,
                shop_button : shop_button,
                shop_button_name : shop_button_name,
                shop_heading_value : shop_heading_value
            }
        }else{
            this.state = {
                shopbackgroundcolor: {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                },
                backgroundpopoverActive: false,
                shoptextcolor: {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                },
                textpopoverActive: false,
                shop_button : false,
                shop_button_name : 'Enable',
                shop_heading_value : '',
                button_type : false,
                notification_status : false
            }
        }

        this.handlebackgroundColorChange = this.handlebackgroundColorChange.bind(this);
        this.handlebackgroundRgbChange = this.handlebackgroundRgbChange.bind(this);
        this.handlebackgroundPopoverClose = this.handlebackgroundPopoverClose.bind(this);
        this.handlebackgroundPopoverOpen = this.handlebackgroundPopoverOpen.bind(this);

        this.handletextColorChange = this.handletextColorChange.bind(this);
        this.handletextRgbChange = this.handletextRgbChange.bind(this);
        this.handletextPopoverClose = this.handletextPopoverClose.bind(this);
        this.handletextPopoverOpen = this.handletextPopoverOpen.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleShopheading = this.handleShopheading.bind(this);


        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit(){
        this.setState({
            button_type : true
        })
        const search = window.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const shop_name = params.get('shop');

        const postdata = {
            option : 4,
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


    handlebackgroundColorChange(shopbackgroundcolor) {
        this.setState({ shopbackgroundcolor });
    }


    handlebackgroundRgbChange(value) {
        const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
        const shopbackgroundcolor = rgbToHsb({
            red: rgbValues[0],
            green: rgbValues[1],
            blue: rgbValues[2],
            alpha: rgbValues[3]
        });
        this.setState({ shopbackgroundcolor });
    }


    handlebackgroundPopoverClose() {
        this.setState({ backgroundpopoverActive: false });
    }


    handlebackgroundPopoverOpen() {
        this.setState({
            backgroundpopoverActive : true
        })
    }


    handletextColorChange(shoptextcolor) {
        this.setState({ shoptextcolor });
    }


    handletextRgbChange(value) {
        const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
        console.log(rgbValues);
        const shoptextcolor = rgbToHsb({
            red: rgbValues[0],
            green: rgbValues[1],
            blue: rgbValues[2],
            alpha: rgbValues[3]
        });
        this.setState({ shoptextcolor });
    }


    handletextPopoverClose() {
        this.setState({ textpopoverActive: false });
    }


    handletextPopoverOpen() {
        this.setState({
            textpopoverActive : true
        })
    }

    handleShopheading(value){
        this.setState({
            shop_heading_value: value
        })
    }

    handleToggle(){

        if(this.state.shop_button == false) {
            this.setState({
                shop_button : true,
                shop_button_name : 'Disable'
            })
        }else{
            this.setState({
                shop_button : false,
                shop_button_name : 'Enable'
            })
        }

    }

    render() {

        const { shopbackgroundcolor, backgroundpopoverActive } = this.state;

        const backgroundrgbaColor = rgbString(hsbToRgb(shopbackgroundcolor));

        const backgroundactivator = (
            <Button onClick={this.handlebackgroundPopoverOpen}>
                <Stack alignment="center" spacing="tight">
                    <div
                        style={{
                            height: "2rem",
                            width: "2rem",
                            borderRadius: "0.3rem",
                            background: backgroundrgbaColor
                        }}
                    />
                    <span>Background color</span>
                </Stack>
            </Button>
        );

        const { shoptextcolor, textpopoverActive } = this.state;

        const textrgbaColor = rgbString(hsbToRgb(shoptextcolor));

        const textactivator = (
            <Button onClick={this.handletextPopoverOpen}>
                <Stack alignment="center" spacing="tight">
                    <div
                        style={{
                            height: "2rem",
                            width: "2rem",
                            borderRadius: "0.3rem",
                            background: textrgbaColor
                        }}
                    />
                    <span>Text color</span>
                </Stack>
            </Button>
        );

        let notification;

        if(this.state.notification_status==true){
            notification = (
                <Toast content="Save Successfully" onDismiss={this.handlehsbToRgbtoggleActive} active />
            );
        }


        return <div>
            <Form
                onSubmit={this.handleSubmit}
            >
                <FormLayout>
                    <Heading>Shop Button Settings</Heading>

                    <FormLayout.Group>

                        <Popover
                            active={backgroundpopoverActive}
                            activator={backgroundactivator}
                            onClose={this.handlebackgroundPopoverClose}
                        >
                            <Popover.Section>
                                <ColorPicker
                                    onChange={this.handlebackgroundColorChange}
                                    color={shopbackgroundcolor}
                                    allowAlpha
                                />
                            </Popover.Section>
                            <Popover.Section>
                                <TextField value={backgroundrgbaColor} onChange={this.handlebackgroundRgbChange} />
                            </Popover.Section>
                        </Popover>


                        <Popover
                            active={textpopoverActive}
                            activator={textactivator}
                            onClose={this.handletextPopoverClose}
                        >
                            <Popover.Section>
                                <ColorPicker
                                    onChange={this.handletextColorChange}
                                    color={shoptextcolor}
                                    allowAlpha
                                />
                            </Popover.Section>
                            <Popover.Section>
                                <TextField value={textrgbaColor} onChange={this.handletextRgbChange} />
                            </Popover.Section>
                        </Popover>


                    </FormLayout.Group>
                    <FormLayout.Group>
                        <SettingToggle
                            action={{
                                content: this.state.shop_button_name,
                                onAction: this.handleToggle,
                            }}
                            enabled={this.state.shop_button}
                        />

                        <TextField label="Shop Button Heading" value={this.state.shop_heading_value} onChange={this.handleShopheading} />

                    </FormLayout.Group>

                    <Button submit loading={this.state.button_type} primary>Submit</Button>
                </FormLayout>
            </Form>

            {notification}


        </div>;
    }


}

export default Postsettings;
