import React from 'react';
import './comments.js';

function commentGenerator(commentArr){


    for(var x=0;x<commentArr.length;x++){
        //Create div to append all the child elements;
        let container = document.createElement("div");
        container.setAttribute("class","comment-display__container");

        let img = document.createElement("div");
        img.setAttribute("class","comment-display__image-icon");

        // create a div section for name and comment
        let nameCommentContainer = document.createElement("div");
        nameCommentContainer.setAttribute("class","comment-display__name-comment-cont");
        
        let name = document.createElement("h3");
        name.setAttribute("class","comment-display__name");

        let timeDisplay = document.createElement('p');
        timeDisplay.setAttribute("class","comment-display__time");
        timeDisplay.setAttribute("class",`comment${counter}`);
        console.log(timeArr[counter-1]);
        console.log(counter);
        if(timeArr.length > 0) {
            if(timeArr[counter-1] == 0){
                timeDisplay.innerHTML ="just now";
            } else {
                 timeDisplay.innerHTML = timeArr[counter-1] + " minutes ago";
            }
        }
        let comment = document.createElement("p");
        comment.setAttribute("class","comment-display__comment");
        name.innerHTML = commentArr[x].name;
        comment.innerHTML= commentArr[x].comment;

        nameCommentContainer.appendChild(name);
        nameCommentContainer.appendChild(timeDisplay);
        nameCommentContainer.appendChild(comment);
        container.appendChild(img);
        container.appendChild(nameCommentContainer);