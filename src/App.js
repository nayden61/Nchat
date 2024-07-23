import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

export default function App() {
    return (
        <ChatEngine 
            height="100vh"
            projectID="eaabba16-9c43-4c40-ab75-386110970c94"
            userName="John"
            userSecret="John" 
            renderChatFeed = {(props) => <ChatFeed {...props}/>}
            />
    )
}