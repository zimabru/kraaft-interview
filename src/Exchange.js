import React from 'react'
import "./Exchange.css"
import Highlighter from "react-highlight-words";



function formatDate(date){
    date = new Date();
    return  date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" - "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}
function Username(senderId, users){
    let rtn="";
    console.log(senderId, users)
        users.forEach(element => {
            if(element.id === senderId)
               rtn= element.username;
         
        });
     //to replace by an other iterator in production mode 
        return rtn
}
function isItMe(currentId, senderId){
    return currentId===senderId

}
function getUserName(users){
    let rtn=[];
        for(let i=0; i< users.length; i++){
         let tmp = users[i].username.split(" ");
         rtn.push("@"+tmp[0]);
        }
        return rtn;
}

function Exchange({message, users,currentId}) {
    let date =formatDate( message.createdAt);
    let username = Username(message.senderId, users);
    let flag = isItMe(currentId,message.senderId)?"self":"";
    let ToSearch= getUserName(users);
   

    let style={
        color:"#ff7675",
        background:"#0000",
        fontWeight:"bold"
    }
   
    return (
        <div className={ `Exchange__wrapper ${flag}`}>
            <p className="Exchange__username">{username}</p>
            <div className="Exchange__container">
                {(message.type)==="image"?
                 <div className="Exchange__imageWrapper">
                     <img className={ `Exchange__image ${flag}`} src={message.url}/>
                     <p className="Exchange__caption Exchange__text">
                     <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={ToSearch}
                        autoEscape={true}
                        highlightStyle={style}
                        textToHighlight= {message.caption}/>
                        
                    </p>
                </div>
                :<p className="Exchange__text">
                       <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={ToSearch}
                        autoEscape={true}
                        highlightStyle={style}
                        textToHighlight= {message.content}/>
                
                 </p>
                }
                
            </div>
            <p className="Exchange__date">{date}</p>
        </div>
    )
}

export default Exchange;
