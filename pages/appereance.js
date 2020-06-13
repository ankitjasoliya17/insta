import React from 'react';
import {Heading,Toast,Button, Checkbox, Form, FormLayout,SettingToggle,TextStyle, TextField,Select,Card,Page,Popover,ColorPicker,Stack,hsbToRgb,rgbToHsb,rgbString} from '@shopify/polaris';
import axios from 'axios';

import "@shopify/polaris/styles.css";



class Postsettings extends React.Component {
    constructor(props) {
        super(props);
        const allsetting = props.settings;

        if(allsetting!=false){

            let widgetcolordata = '';
            if(allsetting.widgetcolor){
                widgetcolordata = JSON.parse(allsetting.widgetcolor);
            }else{
                widgetcolordata = {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                }
            }

            let overlaycolordata = '';
            if(allsetting.overlaycolor){
                overlaycolordata = JSON.parse(allsetting.overlaycolor);
            }else{
                overlaycolordata = {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                }
            }

            let textcolordata = '';
            if(allsetting.textcolor){
                textcolordata = JSON.parse(allsetting.textcolor);
            }else{
                textcolordata = {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                }
            }

            let pbackgroundcolordata = '';
            if(allsetting.pbackgroundcolor){
                pbackgroundcolordata = JSON.parse(allsetting.pbackgroundcolor);
            }else{
                pbackgroundcolordata = {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                }
            }

            let ptextcolordata = '';
            if(allsetting.ptextcolor){
                ptextcolordata = JSON.parse(allsetting.ptextcolor);
            }else{
                ptextcolordata = {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                }
            }

            this.state = {
                widgetcolor: widgetcolordata,
                widgetpopoverActive: false,
                overlaycolor: overlaycolordata,
                overlaypopoverActive: false,
                textcolor: textcolordata,
                textpopoverActive: false,
                pbackgroundcolor: pbackgroundcolordata,
                pbackgroundpopoverActive: false,
                ptextcolor: ptextcolordata,
                ptextpopoverActive: false,
            }
        }else{
            this.state = {
                widgetcolor: {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                },
                widgetpopoverActive: false,
                overlaycolor: {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                },
                overlaypopoverActive: false,
                textcolor: {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                },
                textpopoverActive: false,
                pbackgroundcolor: {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                },
                pbackgroundpopoverActive: false,
                ptextcolor: {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                },
                ptextpopoverActive: false,
            }
        }



        this.handlewidgetPopoverOpen = this.handlewidgetPopoverOpen.bind(this);
        this.handlewidgetColorChange = this.handlewidgetColorChange.bind(this);
        this.handlewidgetRgbChange = this.handlewidgetRgbChange.bind(this);
        this.handlewidgetPopoverClose = this.handlewidgetPopoverClose.bind(this);

        this.handleoverlayColorChange = this.handleoverlayColorChange.bind(this);
        this.handleoverlayRgbChange = this.handleoverlayRgbChange.bind(this);
        this.handleoverlayPopoverClose = this.handleoverlayPopoverClose.bind(this);
        this.handleoverlayPopoverOpen = this.handleoverlayPopoverOpen.bind(this);

        this.handletextColorChange = this.handletextColorChange.bind(this);
        this.handletextRgbChange = this.handletextRgbChange.bind(this);
        this.handletextPopoverClose = this.handletextPopoverClose.bind(this);
        this.handletextPopoverOpen = this.handletextPopoverOpen.bind(this);

        this.handlepbackgroundColorChange = this.handlepbackgroundColorChange.bind(this);
        this.handlepbackgroundRgbChange = this.handlepbackgroundRgbChange.bind(this);
        this.handlepbackgroundPopoverClose = this.handlepbackgroundPopoverClose.bind(this);
        this.handlepbackgroundPopoverOpen = this.handlepbackgroundPopoverOpen.bind(this);

        this.handleptextColorChange = this.handleptextColorChange.bind(this);
        this.handleptextRgbChange = this.handleptextRgbChange.bind(this);
        this.handleptextPopoverClose = this.handleptextPopoverClose.bind(this);
        this.handleptextPopoverOpen = this.handleptextPopoverOpen.bind(this);


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
            option : 3,
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

    handlewidgetColorChange(widgetcolor) {
        this.setState({ widgetcolor });
    }


    handlewidgetRgbChange(value) {
        const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");

        const widgetcolor = rgbToHsb({
            red: rgbValues[0],
            green: rgbValues[1],
            blue: rgbValues[2],
            alpha: rgbValues[3]
        });
        this.setState({ widgetcolor });
    }


    handlewidgetPopoverClose() {
        this.setState({ widgetpopoverActive: false });
    }


    handlewidgetPopoverOpen() {
        this.setState({
            widgetpopoverActive : true
        })
    }


    handleoverlayColorChange(overlaycolor) {
        this.setState({ overlaycolor });
    }


    handleoverlayRgbChange(value) {
        const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
        console.log(rgbValues);
        const overlaycolor = rgbToHsb({
            red: rgbValues[0],
            green: rgbValues[1],
            blue: rgbValues[2],
            alpha: rgbValues[3]
        });
        this.setState({ overlaycolor });
    }


    handleoverlayPopoverClose() {
        this.setState({ overlaypopoverActive: false });
    }


    handleoverlayPopoverOpen() {
        this.setState({
            overlaypopoverActive : true
        })
    }


    handletextColorChange(textcolor) {
        this.setState({ textcolor });
    }


    handletextRgbChange(value) {
        const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
        const textcolor = rgbToHsb({
            red: rgbValues[0],
            green: rgbValues[1],
            blue: rgbValues[2],
            alpha: rgbValues[3]
        });
        this.setState({ textcolor });
    }


    handletextPopoverClose() {
        this.setState({ textpopoverActive: false });
    }


    handletextPopoverOpen() {
        this.setState({
            textpopoverActive : true
        })
    }


    handlepbackgroundColorChange(pbackgroundcolor) {
        this.setState({ pbackgroundcolor });
    }


    handlepbackgroundRgbChange(value) {
        const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
        const pbackgroundcolor = rgbToHsb({
            red: rgbValues[0],
            green: rgbValues[1],
            blue: rgbValues[2],
            alpha: rgbValues[3]
        });
        this.setState({ pbackgroundcolor });
    }


    handlepbackgroundPopoverClose() {
        this.setState({ pbackgroundpopoverActive: false });
    }


    handlepbackgroundPopoverOpen() {
        this.setState({
            pbackgroundpopoverActive : true
        })
    }


    handleptextColorChange(ptextcolor) {
        this.setState({ ptextcolor });
    }


    handleptextRgbChange(value) {
        const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
        console.log(rgbValues);
        const ptextcolor = rgbToHsb({
            red: rgbValues[0],
            green: rgbValues[1],
            blue: rgbValues[2],
            alpha: rgbValues[3]
        });
        this.setState({ ptextcolor });
    }


    handleptextPopoverClose() {
        this.setState({ ptextpopoverActive: false });
    }


    handleptextPopoverOpen() {
        this.setState({
            ptextpopoverActive : true
        })
    }

    render() {

        const { widgetcolor, widgetpopoverActive } = this.state;

        const widgetrgbaColor = rgbString(hsbToRgb(widgetcolor));

        const widgetactivator = (
            <Button onClick={this.handlewidgetPopoverOpen}>
                <Stack alignment="center" spacing="tight">
                    <div
                        style={{
                            height: "2rem",
                            width: "2rem",
                            borderRadius: "0.3rem",
                            background: widgetrgbaColor
                        }}
                    />
                    <span>Widget color</span>
                </Stack>
            </Button>
        );

        const { overlaycolor, overlaypopoverActive } = this.state;

        const overlayrgbaColor = rgbString(hsbToRgb(overlaycolor));

        const overlayactivator = (
            <Button onClick={this.handleoverlayPopoverOpen}>
                <Stack alignment="center" spacing="tight">
                    <div
                        style={{
                            height: "2rem",
                            width: "2rem",
                            borderRadius: "0.3rem",
                            background: overlayrgbaColor
                        }}
                    />
                    <span>Overlay color</span>
                </Stack>
            </Button>
        );

        const { textcolor, textpopoverActive } = this.state;

        const textrgbaColor = rgbString(hsbToRgb(textcolor));

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

        const { pbackgroundcolor, pbackgroundpopoverActive } = this.state;

        const pbackgroundrgbaColor = rgbString(hsbToRgb(pbackgroundcolor));

        const pbackgroundactivator = (
            <Button onClick={this.handlepbackgroundPopoverOpen}>
                <Stack alignment="center" spacing="tight">
                    <div
                        style={{
                            height: "2rem",
                            width: "2rem",
                            borderRadius: "0.3rem",
                            background: pbackgroundrgbaColor
                        }}
                    />
                    <span>Background color</span>
                </Stack>
            </Button>
        );

        const { ptextcolor, ptextpopoverActive } = this.state;

        const ptextrgbaColor = rgbString(hsbToRgb(ptextcolor));

        const ptextactivator = (
            <Button onClick={this.handleptextPopoverOpen}>
                <Stack alignment="center" spacing="tight">
                    <div
                        style={{
                            height: "2rem",
                            width: "2rem",
                            borderRadius: "0.3rem",
                            background: ptextrgbaColor
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
                    <Heading>Gallary</Heading>
                    <FormLayout.Group>

                        <Popover
                            active={widgetpopoverActive}
                            activator={widgetactivator}
                            onClose={this.handlewidgetPopoverClose}
                        >
                            <Popover.Section>
                                <ColorPicker
                                    onChange={this.handlewidgetColorChange}
                                    color={widgetcolor}
                                    allowAlpha
                                />
                            </Popover.Section>
                            <Popover.Section>
                                <TextField value={widgetrgbaColor} onChange={this.handlewidgetRgbChange} />
                            </Popover.Section>
                        </Popover>


                        <Popover
                            active={overlaypopoverActive}
                            activator={overlayactivator}
                            onClose={this.handleoverlayPopoverClose}
                        >
                            <Popover.Section>
                                <ColorPicker
                                    onChange={this.handleoverlayColorChange}
                                    color={overlaycolor}
                                    allowAlpha
                                />
                            </Popover.Section>
                            <Popover.Section>
                                <TextField value={overlayrgbaColor} onChange={this.handleoverlayRgbChange} />
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
                                    color={textcolor}
                                    allowAlpha
                                />
                            </Popover.Section>
                            <Popover.Section>
                                <TextField value={textrgbaColor} onChange={this.handletextRgbChange} />
                            </Popover.Section>
                        </Popover>

                    </FormLayout.Group>

                    <Heading>Popup</Heading>

                    <FormLayout.Group>

                        <Popover
                            active={pbackgroundpopoverActive}
                            activator={pbackgroundactivator}
                            onClose={this.handlepbackgroundPopoverClose}
                        >
                            <Popover.Section>
                                <ColorPicker
                                    onChange={this.handlepbackgroundColorChange}
                                    color={pbackgroundcolor}
                                    allowAlpha
                                />
                            </Popover.Section>
                            <Popover.Section>
                                <TextField value={pbackgroundrgbaColor} onChange={this.handlepbackgroundRgbChange} />
                            </Popover.Section>
                        </Popover>


                        <Popover
                            active={ptextpopoverActive}
                            activator={ptextactivator}
                            onClose={this.handleptextPopoverClose}
                        >
                            <Popover.Section>
                                <ColorPicker
                                    onChange={this.handleptextColorChange}
                                    color={ptextcolor}
                                    allowAlpha
                                />
                            </Popover.Section>
                            <Popover.Section>
                                <TextField value={ptextrgbaColor} onChange={this.handleptextRgbChange} />
                            </Popover.Section>
                        </Popover>


                    </FormLayout.Group>


                    <Button submit loading={this.state.button_type} primary>Submit</Button>
                </FormLayout>
            </Form>

            {notification}


        </div>;
    }


}

export default Postsettings;
