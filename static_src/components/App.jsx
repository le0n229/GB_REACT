import React from 'react';
import Message from './Message';

const messageChoices = ['Привет', 'Здравствуйте', 'Здорова', 'Доброго здоровьица', 'Здрасте'];

export default class App extends React.Component {
    state = {       
        messages: ['Привет', 'Здравствуйте'],
        newMessage: false,
    };    

    sendMessage = () => {
        this.setState({ messages: [ ...this.state.messages,
                messageChoices[Math.floor(Math.random()*messageChoices.length)]], newMessage:true })
    };

    componentDidUpdate(prevProps, prevState) {
      if (this. state.newMessage) {
        this.setState({ messages: [ ...this.state.messages, 'Я робот'], newMessage:false  });
      }
  }

    render() {
        const messageElements = this.state.messages.map((item, index) => <Message key={ index } text={ item } />);
        return (
            <div>
                { messageElements }
                <button onClick={ this.sendMessage }>sendMessage</button>
            </div>
        )
    }
}