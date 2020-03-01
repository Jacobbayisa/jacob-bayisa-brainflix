const express = require('express');
const cors = require('cors');
const App = express();
const videos = require('../data/videos.json');
const mainVideo = require('../data/mainVideo.json');
const defaultMainVideos = require('../data/defaultMainVideos.json');
const uuid = require('uuid/v1');

App.use(cors());
App.use(express.json());

App.route("/")
    .get((req,res)=>{
        res.send(videos);
    })
    .post((req,res)=>{
        videos.push(req.body);
        return res.status(201).send(videos);
    })
App.get("/comments/:id",(req,res)=>{
    const givenId = req.params.id;
    const test = mainVideo.find(video=>
        video.id ===givenId
    );
   // res.send(mainVideo[req.params.id]);
   res.send(test)
});
App.post("/comments/:id",(req,res)=>{
    comments[req.params.id] = req.body;
    return res.status(201).send(comments);
})
App.post("/videos",(req,res)=>{
    const id = uuid();
    const newData = req.body.video;
    const newVideo= {id,...newData};
    //create mainVideo for newly uploaded video
    const newMainVideo = {...newVideo,...defaultMainVideos[0]};

    mainVideo.push(newMainVideo);
    videos.push(newVideo);
    return res.status(201).send(videos);
})
App.listen(8085,(req,res)=>{
        console.log("server running at port 8085");
    })
