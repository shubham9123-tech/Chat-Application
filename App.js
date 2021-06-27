import React, { useState } from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./Components/ChatFeed";

const App = () => {
    const [dark, setMode] = useState(false)
    return (
       
        <ChatEngine
        height = "100vh"
        projectID="9bb114e5-8008-4735-861e-9d0bd0656a51"
        userName = "ChatBox"
        userSecret = "9123"
        renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        
        />
      
        
    );
}
export default App;