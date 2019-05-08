import React from 'react';
import PropTypes from "prop-types";
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';


export default class Layout extends React.Component {
    static propTypes = {
        // text: PropTypes.string.isRequired,
    };

    state = {
        input: '',
        messageList: [1, 2],
        messages: {1: {'text': 'Привет', 'sender': 'me'}, 2: {'text': 'Здравствуйте', 'sender': 'bot'}},
        nextId: 3,       
    };


    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSendMessage = (text, sender) => {
        const { messageList, messages, nextId } = this.state;
        this.setState({
            messageList: [ ...messageList, nextId],
            messages: { ...messages, [nextId]: { text, sender } },
            input: '',
            nextId: nextId + 1,
        })
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) { // Enter
            this.handleSendMessage(this.state.input, 'me');
        }
    };


    render() {
        return (
            <div>
                <header>
                    <Header  messageList= {this.state.messageList} />
                </header>
                <div>
                    <ChatList />
                    <MessageField 
                    handleKeyUp= {this.handleKeyUp} 
                    handleInput= {this.handleInput} 
                    handleSendMessage= {this.handleSendMessage} 
                    input= {this.state.input} 
                    messages= {this.state.messages} 
                    nextId= {this.state.nextId} 
                    messageList= {this.state.messageList}
                    />
                </div>
            </div>
        )
    }
}