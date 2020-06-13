import React, {useCallback, useState} from 'react';
import {Card, Tabs} from '@shopify/polaris';
import Postsettings from '../pages/postsettings';
import Acceptinformation from '../pages/acceptsinformation';
import Appereance from '../pages/appereance';
import Shop from '../pages/shop';
import axios from 'axios';

function FittedTabsExample(props) {

    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const postsetting = props.allpostsettings;

    const tabs = [
        {
            id: 'all-post-setting',
            content: 'Gallary Settings',
            accessibilityLabel: 'Gallary Settings',
            panelID: 'all-post-setting-fitted-Ccontent',
        },
        {
            id: 'all-accepts-information',
            content: 'Information',
            accessibilityLabel: 'Information',
            panelID: 'all-accepts-information-fitted-Ccontent',
        },
        {
            id: 'all-accepts-appereance',
            content: 'Appereance',
            accessibilityLabel: 'Appereance',
            panelID: 'all-accepts-appereance-fitted-Ccontent',
        },
        {
            id: 'all-accepts-shop',
            content: 'Shop',
            accessibilityLabel: 'Shop',
            panelID: 'all-accepts-shop-fitted-Ccontent',
        }
    ];

    let tabcontent;
    if(selected==0){
        tabcontent = (
            <Postsettings settings={postsetting} />
        );
    }else if(selected==1){
        tabcontent = (
            <Acceptinformation settings={postsetting} />
        );
    }else if(selected==2){
        tabcontent = (
            <Appereance settings={postsetting} />
        );
    }else if(selected==3){
        tabcontent = (
            <Shop settings={postsetting} />
        );
    }


    return (
        <Card>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
                <Card.Section>
                    {tabcontent}
                </Card.Section>
            </Tabs>
        </Card>
    );
}


class Instasettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allsettings : props.allsettings
        }

    }


    render() {

        return <div>
            <FittedTabsExample allpostsettings={this.state.allsettings} />
        </div>;
    }


}

export default Instasettings;
