import React from 'react';


const ChatMessage = ({ position }) => {
    return ( 
        <div className={`${position} conversation-message d-flex w-100`}>
            <div className="ChatMessage__avatar ">
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="avatar" />
            </div>
            <div className="chatMessage__content ">
                 <div className={`p-2 ${position === 'left' ? 'bg-light' : 'bg-primary'} `}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas culpa optio quidem, ratione ab magnam nihil veritatis
               <p className="ecor-right bg-primary  "></p>
                <p className="ecor-left bg-light "></p>
               
                </div>
            </div>
        </div>
     );
}
 
export default ChatMessage;