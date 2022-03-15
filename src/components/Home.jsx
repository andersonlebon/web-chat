import React from 'react';
import Conversation from './chats/chatConversation';


const Home = () => {
    return (
        <main className="homepage">
            <h1>Welcome to the Web chat</h1>
            <Conversation/>
        </main>
    )
}
 
export default Home;