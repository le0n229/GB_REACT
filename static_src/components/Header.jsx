import React from 'react';
import PropTypes from "prop-types";


export default class Header extends React.Component {
    render() {
        return (
            <h1>Отправлено сообщений:{this.props.messageList.length}</h1>
        )
    }
}
