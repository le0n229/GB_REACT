import React from 'react';
import Message from './Message';
import TextField from 'material-ui/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class MessageField extends React.Component {
  
   
    componentDidUpdate(prevProps, prevState) {
        const { nextId, messages, messageList } = this.props;
        const lastSender = messages[nextId - 1].sender;
        // if (lastSender === 'me' && messageList.length > prevState.messageList.length ) {
          if (lastSender === 'me') {
            setTimeout(() => this.props.handleSendMessage('Отстань, я робот!', 'bot'), 500)
        }
    }

    

    

    render() {
      const { classes } = this.props;
        const { messages, messageList, input } = this.props;
        const messageElements = messageList.map((messageId, index) =>
            <Message key={ index } text={ messages[messageId].text } />);
        return (
            <div>
                { messageElements }
                <TextField
                    onKeyUp={ this.props.handleKeyUp }
                    label="Name"
                    underlineStyle={{ color: 'red' }}
                    name="input"
                    value={ input }
                    onChange={ this.props.handleInput }
                    placeholder="Введите сообщение"
                />
                <Fab color="primary" aria-label="Add" className={classes.fab} 
                onClick={ () => this.props.handleSendMessage(input, 'me') }>
        <AddIcon  />
      </Fab>
            </div>
        )
    }
}


export default withStyles(styles)(MessageField);