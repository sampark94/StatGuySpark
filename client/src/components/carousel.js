import React from "react";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/images/stlouisblues_61386572_687300375052436_7552122644091693135_n.jpg';
import image2 from "../assets/images/stlouis2.jpg";
import image3 from "../assets/images/stlouisblues_61550320_544834692713444_2623402794666407211_n.jpg";
import image4 from "../assets/images/stlouisblues_61618404_1131795047014694_5491764171070309541_n.jpg";
import image5 from "../assets/images/stlouisblues_61768634_2093281330800804_6548961981970354633_n.jpg";
import image6 from "../assets/images/stlouis3.jpg";
import image7 from "../assets/images/stlouis4.jpg";
import image8 from "../assets/images/stlouisblues_61440214_120717185566158_626492606581888104_n.jpg";

export default () => (
    <Carousel autoPlay width="700px" height="100px" infiniteLoop stopOnHover dynamicHeight>
        <div>
            <img src={image8} alt="" />
        </div>
        <div>
            <img src={image1} alt="" />
        </div>
        <div>
            <img src={image2} alt="" />
        </div>
        <div>
            <img src={image3} alt="" />
        </div>
        <div>
            <img src={image4} alt="" />
        </div>
        <div>
            <img src={image5} alt="" />
        </div>
        <div>
            <img src={image6} alt="" />
        </div>
        <div>
            <img src={image7} alt="" />
        </div>

    </Carousel>
);