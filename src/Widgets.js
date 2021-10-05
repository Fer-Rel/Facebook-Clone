import React from 'react'
import "./Widgets.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Contact from './Contact';

const contacts = [
    {src : "https://web.facebook.com/messages/t/100001474967490/" , name :"Maria Lucia"},
    ,

];


function Widgets() {
    return (
        
       <div className="hidden  lg:flex flex-col w-60 p-2 mt-5">
           <div className="flex justify-between items-center text-gray-500 mb-5">
               <h2 className="text-xl">Contacts</h2>
               <div className=" flex space-x-2">
                   <VideocamIcon className="h-6"/>
                   <SearchIcon className="h-6"/>
                   <MoreHorizIcon className="h-6"/>
               </div>

              {contacts.map((contact)=>(
                  <Contact key={contact.src} src={contact.src} name={contact.name}/>
              )
              )}
           </div>
       </div>
            
       
        


    )}

export default Widgets
