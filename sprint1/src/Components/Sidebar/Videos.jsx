import React from "react";
import uuid from 'uuid/v1';
import img0 from "../../Assets/Images/video-list-0.jpg";
import img1 from "../../Assets/Images/video-list-1.jpg";
import img2 from "../../Assets/Images/video-list-2.jpg";
import img3 from "../../Assets/Images/video-list-3.jpg";
import img4 from "../../Assets/Images/video-list-4.jpg";
import img5 from "../../Assets/Images/video-list-5.jpg";
import img6 from "../../Assets/Images/video-list-6.jpg";
import img7 from "../../Assets/Images/video-list-7.jpg";
import img8 from "../../Assets/Images/video-list-8.jpg";


const videos = [
    {   id: uuid(),
        img: img0,
        title:"BMX Rampage: 2018 Highlights",
        artist:"Red Cow"
    },
    {   id: uuid(),
        img: img1,
        title:"Become A Travel Pro In One Easy Lesson",
        artist:"Todd Welch"
    },
    {   id: uuid(),
        img: img2,
        title:"Les Houches The Hidden Gem Of The Chamonix",
        artist:"Cornelia Blair"
    },
    {   id: uuid(),
        img:img3,
        title:"Travel Health Useful Medical Information For",
        artist:"Glen Harper"
    },
    {   id: uuid(),
        img: img4,
        title:"Cheap Airline Tickets Great Ways To Save",
        artist:"Emily Harper"
    },
    {   id: uuid(),
        img:img5,
        title:"Take A Romantic Break In A Boutique Hotel",
        artist:"Ethan Owen"
    },
    {   id: uuid(),
        img: img6,
        title:"Choose The Perfect Accommodations",
        artist:"Lydia Perez"
    },
    {   id: uuid(),
        img:img7,
        title:"Cruising Destination Ideas",
        artist:"Timothy Austin"
    },
    {   id: uuid(),
        img: img8,
        title:"Train Travel On Track For Safety",
        artist:"Scotty Cranmer"
    },

];

export default videos;