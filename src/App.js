import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';
import LoginForm from './components/LoginForm';

export default function App() {

    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="eaabba16-9c43-4c40-ab75-386110970c94"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed = {(chatAppState) => <ChatFeed {...chatAppState}/>}
            />
    )
}