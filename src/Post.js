import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeRoundedIcon from '@material-ui/icons/NearMeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

function Post({profilePic,image,username,timestamp,message}) {
    return (
        <div className="post" >
            <div className="post__top">
                <Avatar src = {profilePic}
                className="post__Avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                    <p>{message}</p>

            </div>
            <div className="post__image">
                    <img src= {image} alt=""/> 


            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpAltIcon className="face"/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <FavoriteOutlinedIcon className="face"/>
                    <p>Me encanta</p>
                </div>
                <div className="post__option">
                    <SentimentVerySatisfiedOutlinedIcon className="face"/>
                    <p>Carcajada</p>
                 </div>
                <div className="post__option">
                    <SentimentDissatisfiedOutlinedIcon className="face"/>
                    <p>Tristeza</p>
                 </div>
            </div>
            <div>
                <div className ="post__options">
                    <div className="post__option">
                        <ChatBubbleOutlineOutlinedIcon/>
                        <p>Comment</p>


                    </div>
                    <div className="post__option">
                        <NearMeRoundedIcon/>
                        <p>Share</p>
                        
                    </div>
                    <div className="post__option">
                        <AccountCircleRoundedIcon/>
                        <ExpandMoreRoundedIcon/>
                        
                    </div>


                </div>

            </div>



            
            
        </div>
    )
}

export default Post
