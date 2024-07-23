import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";

export default function ChatFeed(props) {
    //console.log(props)
    
    const {chats, activeChat, userName, messages} = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        console.log(keys);
    }

    renderMessages();
    
    return (
        <div>chatFeed</div>
    )

}