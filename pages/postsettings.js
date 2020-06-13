import React from 'react';
import {Toast,Button, Checkbox, Form, FormLayout,SettingToggle,TextStyle, TextField,Select,Card,Page,Popover,ColorPicker,Stack,hsbToRgb,rgbToHsb,rgbString} from '@shopify/polaris';
import axios from 'axios';

import "@shopify/polaris/styles.css";



class Postsettings extends React.Component {
    constructor(props) {
        super(props);
        const allsetting = props.settings;

        if(allsetting!=false){

            let colordata = '';
            if(allsetting.color){
              colordata = JSON.parse(allsetting.color);
            }else{
              colordata = {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                }
            }

            let display_border = false;
            let display_border_button_name = 'Enable';
            if(allsetting.display_border){
                if(allsetting.display_border == 'true'){
                    display_border  =  false;
                    display_border_button_name  =  'Enable';
                }else{
                    display_border  =  true;
                    display_border_button_name  =  'Disable';
                }
            }

            let social_sharing = false;
            let social_sharing_button_name = 'Enable';
            if(allsetting.social_sharing){
                if(allsetting.social_sharing == 'true'){
                    social_sharing  =  false;
                    social_sharing_button_name  =  'Enable';
                }else{
                    social_sharing  =  true;
                    social_sharing_button_name  =  'Disable';
                }
            }

            let check_widget = '';
            if(allsetting.check_widget){
                check_widget = allsetting.check_widget;
            }

            let check_hover = '';
            if(allsetting.check_hover){
                check_hover = allsetting.check_hover;
            }

            let widget_heading_value = '';
            if(allsetting.widget_heading_value){
                widget_heading_value = allsetting.widget_heading_value;
            }

            let border_width_value = '';
            if(allsetting.border_width_value){
                border_width_value = allsetting.border_width_value;
            }

            let layout_row_value = '';
            if(allsetting.layout_row_value){
                layout_row_value = allsetting.layout_row_value;
            }

            let padding_value = '';
            if(allsetting.padding_value){
                padding_value = allsetting.padding_value;
            }

            this.state = {
                color: colordata,
                popoverActive: false,
                checkwidget : check_widget,
                checkhover : check_hover,
                display_border : display_border,
                display_border_button_name : display_border_button_name,
                social_sharing : social_sharing,
                social_sharing_button_name : social_sharing_button_name,
                border_width_value : border_width_value,
                widget_heading_value: widget_heading_value,
                layout_column_value : border_width_value,
                layout_row_value : layout_row_value,
                padding_value : padding_value,
                button_type : false,
                notification_status : false
            }
        }else{
            this.state = {
                color: {
                    hue: 300,
                    brightness: 1,
                    saturation: 0.7,
                    alpha: 0.8

                },
                popoverActive: false,
                checkwidget : 'grid',
                checkhover : 'zoom_out',
                display_border : false,
                display_border_button_name : 'Enable',
                social_sharing : false,
                social_sharing_button_name : 'Enable',
                border_width_value : '1',
                widget_heading_value: '',
                layout_column_value : '6',
                layout_row_value : '2',
                padding_value : '1',
                button_type : false,
                notification_status : false
            }
        }



        this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleRgbChange = this.handleRgbChange.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSelectHoveeffect = this.handleSelectHoveeffect.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleToggleSocial = this.handleToggleSocial.bind(this);
        this.handleBorderwidth = this.handleBorderwidth.bind(this);
        this.handleWidgetheading = this.handleWidgetheading.bind(this);
        this.handleLayoutCol = this.handleLayoutCol.bind(this);
        this.handleLayoutRow = this.handleLayoutRow.bind(this);
        this.handlePadding = this.handlePadding.bind(this);
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
            option : 1,
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

    handleColorChange(color) {
        this.setState({ color });
    }


    handleRgbChange(value) {
        const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
        console.log(rgbValues);
        const color = rgbToHsb({
            red: rgbValues[0],
            green: rgbValues[1],
            blue: rgbValues[2],
            alpha: rgbValues[3]
        });
        this.setState({ color });
    }


    handlePopoverClose() {
        this.setState({ popoverActive: false });
    }


    handlePopoverOpen() {
        this.setState({
            popoverActive : true
        })
    }


    handleSelectChange(value){
        this.setState({
            checkwidget :value
        })
    }

    handleSelectHoveeffect(value){
        this.setState({
            checkhover :value
        })
    }

    handleToggle(){

        if(this.state.display_border == false) {
            this.setState({
                display_border : true,
                display_border_button_name : 'Disable'
            })
        }else{
            this.setState({
                display_border : false,
                display_border_button_name : 'Enable'
            })
        }

    }

    handleToggleSocial(){

        if(this.state.social_sharing == false) {
            this.setState({
                social_sharing : true,
                social_sharing_button_name : 'Disable'
            })
        }else{
            this.setState({
                social_sharing : false,
                social_sharing_button_name : 'Enable'
            })
        }

    }

    handleBorderwidth(value){
        this.setState({
            border_width_value: value
        })
    }

    handleWidgetheading(value){
        this.setState({
            widget_heading_value: value
        })
    }

    handleLayoutCol(value){
        this.setState({
            layout_column_value: value
        })
    }

    handleLayoutRow(value){
        this.setState({
            layout_row_value: value
        })
    }

    handlePadding(value){
        this.setState({
            padding_value: value
        })
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

        const { color, popoverActive } = this.state;

        const rgbaColor = rgbString(hsbToRgb(color));

        const activator = (
            <Button onClick={this.handlePopoverOpen}>
                <Stack alignment="center" spacing="tight">
                    <div
                        style={{
                            height: "2rem",
                            width: "2rem",
                            borderRadius: "0.3rem",
                            background: rgbaColor
                        }}
                    />
                    <span>Border color</span>
                </Stack>
            </Button>
        );

        let notification;

        if(this.state.notification_status==true){
            notification = (
                <Toast content="Save Successfully" onDismiss={this.handletoggleActive} active />
            );
        }

        const options = [
            {label: 'Grid', value: 'grid'},
            {label: 'List', value: 'list'}
        ];

        const options1 = [
            {label: 'Zoom Out', value: 'zoom_out'},
            {label: 'Zoom In', value: 'zoom_in'}
        ];


        return <div>
            <Form
                 onSubmit={this.handleSubmit}
            >
                <FormLayout>
                    <FormLayout.Group>

                        <Select
                            label="Widget Type"
                            options={options}
                            onChange={this.handleSelectChange}
                            value={this.state.checkwidget}
                        />

                        <Select
                            label="Hover Effect"
                            options={options1}
                            onChange={this.handleSelectHoveeffect}
                            value={this.state.checkhover}
                        />

                        <SettingToggle
                            action={{
                                content: this.state.display_border_button_name,
                                onAction: this.handleToggle,
                            }}
                            enabled={this.state.display_border}
                        />


                    </FormLayout.Group>
                    <FormLayout.Group>
                        <TextField type="number" label="Layout Columns" value={this.state.layout_column_value} onChange={this.handleLayoutCol} />
                        <TextField type="number" label="Layout Rows" value={this.state.layout_row_value} onChange={this.handleLayoutRow} />
                        <SettingToggle
                            action={{
                                content: this.state.social_sharing_button_name,
                                onAction: this.handleToggleSocial,
                            }}
                             enabled={this.state.social_sharing}
                        />
                    </FormLayout.Group>
                    <FormLayout.Group>
                        <TextField
                            label="Border Width"
                            type="number"
                            value={this.state.border_width_value}
                            onChange={this.handleBorderwidth}
                            connectedRight={
                                <Select
                                    label="Pixel Unit"
                                    labelHidden
                                    value="PX"
                                    options={['PX']}
                                    onChange ="hello"
                                />
                            }
                        />

                        <TextField label="Widget Heading" value={this.state.widget_heading_value} onChange={this.handleWidgetheading} />
                        <Popover
                            active={popoverActive}
                            activator={activator}
                            onClose={this.handlePopoverClose}
                        >
                            <Popover.Section>
                                <ColorPicker
                                    onChange={this.handleColorChange}
                                    color={color}
                                    allowAlpha
                                />
                            </Popover.Section>
                            <Popover.Section>
                                <TextField value={rgbaColor} onChange={this.handleRgbChange} />
                            </Popover.Section>
                        </Popover>


                    </FormLayout.Group>
                    <FormLayout.Group>
                        <TextField
                            label="Padding (Space Beetween Image)"
                            type="number"
                            value={this.state.padding_value}
                            onChange={this.handlePadding}
                            connectedRight={
                                <Select
                                    label="Pixel Unit"
                                    labelHidden
                                    value="PX"
                                    options={['PX']}
                                    onChange ="hello"
                                />
                            }
                        />
                    </FormLayout.Group>

                    <Button submit loading={this.state.button_type} primary>Submit</Button>
                </FormLayout>
            </Form>

                {notification}


        </div>;
    }


}

export default Postsettings;
