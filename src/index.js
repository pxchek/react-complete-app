import React from 'react';
import ReactDOM from 'react-dom/client';
import Comment from "./Comment";

const comment = {
    date : new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Panindra Chekoori',
        avatarUrl:'logo192.png'
    }
};


const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author} />

root.render(element);
