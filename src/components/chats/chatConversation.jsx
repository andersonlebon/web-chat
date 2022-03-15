import React from 'react';
import ChatMessage from '../common/chatMessage';


const Conversation = () => {
    return ( 
        <section className="conversation d-flex flex-column">
            <ChatMessage position="left"/>
            <ChatMessage position="right"/>

        </section>
     );
}
 
export default Conversation;