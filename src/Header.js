import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Headerx from './Headerx';
import { useStateValue } from './StateProvider';


function Header() {
    const [{user},dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img
                src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt = ""
                />
                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type = "text" />

                </div>
                
            </div>
            <div className="header__center">
                <div className="header__option header__option__active">
                    <a href="./Login.js">

                    <HomeIcon fontSize="large"/>
                  
                    </a>
                </div>
                <div className="header__option">
                    < FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    < SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    < StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    < SupervisedUserCircleIcon fontSize="large"/>
                </div>

            </div>
            <div className="header__right">
                <div className="header__info">
                    <Headerx

                    src= {user.photoURL}
                    title = {user.displayName}

                    
                    
                    />
                    
                </div>

                <IconButton /* Prototipo de Boton */> 
                    <AddIcon/>
                </IconButton>
                <IconButton /* Prototipo de Boton */> 
                    <ForumIcon/>
                </IconButton>
                <IconButton /* Prototipo de Boton */> 
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton /* Prototipo de Boton */> 
                    <ExpandMoreIcon/>
                </IconButton>
               
               
               
               

               



            </div>
            
        </div>
    )
}

export default Header
