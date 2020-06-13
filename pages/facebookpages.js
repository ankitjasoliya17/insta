import React, { useCallback, useState } from 'react';
import {Page,Banner,Button,Modal, Card, ResourceItem,Scrollable, TextStyle} from '@shopify/polaris';
import axios from 'axios';
import '../css/style.css';
import Instagram from '../pages/instagram';




function FacebookPageList(props) {

    // this.handleClick = this.handleClick.bind(this);

    const items = props.pages;
    const instatus = props.instastatus;

    const [active, setActive] = useState(false);

    const handleChange = useCallback(() => setActive(!active), [active]);


    const handleScrollBottom = useCallback(() => console.log('Scrolled to bottom'), []);

    const pageclass = "fb_page_model_button";



    function handlepage(page_id) {

        const post_data  = {
            page_id : page_id,
            shop : new URLSearchParams(window.location.search).get('shop')
        }

        axios.post('http://localhost:5000/get_insta_account/',post_data)
                .then(function (response1) {
                     props.openModal(response1)

                })
                .catch(function (error) {
                    console.log(error);
                })
    }


    // const handlepage  = useCallback((e) =>
    //
    // // const postdata = {
    // //
    // //     }
    //
    //
    //
    //     , []);



    return (
        <div style={{height: '50px'}}>

            <div className={pageclass}>
                <Button onClick={handleChange} primary>Select Facebook Pages</Button>
            </div>
            <Modal
                open={active}
                title="Business Pages"
                onScrolledToBottom={handleScrollBottom}
                onClose={handleChange}
                className='my-own-class'
            >
                {instatus}
                {items.map((value, index) => {

                    return  <Modal.Section key={index} className='my-own-class'>
                        <ResourceItem
                            id={value.id}
                            name={value.category}
                            onClick={handlepage.bind(value.id)}
                            accessibilityLabel={`View details for ${value.category}`}
                        >
                            <h3>
                                <TextStyle variation="strong">{value.name}</TextStyle>
                            </h3>
                            <div>{value.category}</div>
                        </ResourceItem>
                    </Modal.Section>

                })}

            </Modal>
        </div>
    );
}

// function ResourceListWithSelectionExample(props) {
//
//     const resourceName = {
//         singular: 'Pages',
//         plural: 'Pages',
//     };
//
//     const items = props.pages;
//
//
//     return (
//         <Card>
//             <ResourceList
//                 resourceName={resourceName}
//                 items={items}
//                 renderItem={renderItem}
//             />
//         </Card>
//     );
//
//     function renderItem(item) {
//         const {id, category, name,access_token} = item;
//
//
//         return (
//             <ResourceItem
//                 id={id}
//                 name={category}
//                 url= {`instagram?page_id=${id}&access_token=${access_token}`}
//                 accessibilityLabel={`View details for ${category}`}
//             >
//                 <h3>
//                     <TextStyle variation="strong">{name}</TextStyle>
//                 </h3>
//                 <div>{category}</div>
//             </ResourceItem>
//         );
//     }
// }

class Facebook extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            pages: props.alldata.data,
            allpost : 'noinsta',
            getpost : false
        }
        this.openModal = this.openModal.bind(this);
    }

    openModal(response){
        this.setState({
            getpost : true,
            allpost : response.data
        });
    }


    render() {

        let fbpagecontent;
        let instacontent;
        let instaconnected;

        if(this.state.allpost==true){
            instaconnected = (
                <Banner
                    title="Instagram Account Connected Successfully"
                    status="success"
                />
            );
        }else if(this.state.allpost==false){
            instaconnected = (
                <Banner
                    title="Did not found any Instagram account"
                    status="critical"
                />
            );

        }else{

        }


        if(this.state.pages!=''){
            fbpagecontent = (
                    <FacebookPageList openModal={this.openModal} pages={this.state.pages} instastatus={instaconnected}/>
            )
        }

        // if(this.state.getpost){
        //
        //     instacontent = (
        //         <Instagram allpost={this.state.allpost} />
        //     )
        // }

        return <Page><div className='fb_page_model'>{fbpagecontent}</div></Page>;
    }
}


export default Facebook;

