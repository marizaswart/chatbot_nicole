import React, { PropTypes } from 'react';
import ChatbotForm from './ChatbotForm';

class ChatbotPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div className="container">
                <ChatbotForm />
            </div>
        );
    }
}

export default ChatbotPage;