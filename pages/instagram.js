import React, { useState ,useCallback} from 'react';
import axios from 'axios';
import {Button,Badge,Modal,Stack} from '@shopify/polaris';

function InstaPostList(props) {


    const items1 = props.instapost;

    const [active, setActive] = useState(true);

    const handleChange = useCallback(() => setActive(!active), [active]);

    const handleScrollBottom = useCallback(() => console.log('Scrolled to bottom'), []);

    const pageclass = "insta_post_model";

    return (
        <div style={{height: '50px'}}>

            <div className={pageclass}>
                <Button onClick={handleChange} primary>Instagram Post</Button>
            </div>

            <Modal
                large
                open={active}
                title="Instagram Post"
                onScrolledToBottom={handleScrollBottom}
                onClose={handleChange}
                className='insta_post_data'
            >

                {items1.map((value, index) => {


                        return  <Modal.Section key={index} className='insta_post_data' oneThird>
                            <Stack vertical oneThird distribution="fill">
                            <Badge><img alt="" width="100%" height="100%" style={{ objectFit: 'cover', objectPosition: 'center', }} src={value.media_url} />
                            </Badge>
                            </Stack>
                        </Modal.Section>

                })}


            </Modal>
        </div>
    );
}



    class Instagram extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            instapost : ''
        }

        this.updatedata = this.updatedata.bind(this);

    }


    componentDidMount(){

        const search = window.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const shop_name = params.get('shop');

        const postdata = {
            shop : shop_name
        }

        const self = this;
        axios.post('http://localhost:5000/get_insta_post/',postdata)
            .then(function (response1) {
              console.log(response1);
                self.updatedata(response1.data);
            })
            .catch(function (error) {
                console.log(error);
            });


        const link = document.createElement("link");
        link.href = "../css/posterstyle.css";
        link.async = true;
        document.body.appendChild(link);



        const link1 = document.createElement("link");
        link1.href = "../css/slick.css";
        link1.async = true;
        document.body.appendChild(link1);

        const link2 = document.createElement("link");
        link2.href = "../css/slick-theme.css";
        link2.async = true;
        document.body.appendChild(link2);

        const script = document.createElement("script");
        script.src = "../js/jquery.min.js";
        script.async = true;
        document.body.appendChild(script);

        const script1 = document.createElement("script");
        script1.src = "../js/slick.min.js";
        script1.async = true;
        document.body.appendChild(script1);


    }


    updatedata(resdata){
        console.log(resdata);
        this.setState({
            instapost:resdata.data
        })


    }


    render() {

        // if(this.state.instapost!=''){
        //     instagrampost = (
        //         <InstaPostList instapost={this.state.instapost} />
        //     );
        // }

        const elements = ['one', 'two', 'three'];

        const instagrampost = []


        console.log(this.state.instapost);

        // if(this.state.instapost!=''){
        //
        //    const items1 = this.state.instapost
        //
        //
        //     for (const [index, value] of items1.entries()) {
        //
        //         instagrampost.push(
        //             <a href="javascript:void(0);" className="dm-insta-url" onClick="document.getElementById('dm-0-insta-feed').style.display='block'">
        //                 <div className="dm-insta-img">
        //                     <img src={value.media_url} />
        //                         <div className="dm-instafeed-overlay">
        //                             <div className="dm-like-btn">
        //                                 <span><i className="far fa-heart" />37</span>
        //                                 <p><i className="fas fa-quote-right" />2</p>
        //                             </div>
        //                         </div>
        //                 </div>
        //             </a>
        //         )
        //     }
        //
        // }

        return (<div className="instagram_image">
                    {/*<div className="dm-insta-feed">*/}
                        {/*<div className="dm-container">*/}
                            {/*<h1 className="dm-title">INSTAGRAM</h1>*/}
                                {/*<div className="dm-insta-row">*/}
                                    {/*<div id="insta-slider">*/}
                                        {/*{instagrampost}*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                    {/*</div>*/}
                </div>
                );
    }

}


export default Instagram;
