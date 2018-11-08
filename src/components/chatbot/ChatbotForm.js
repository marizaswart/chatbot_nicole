import React from 'react';
import MessageList from '../messages/MessageList';

import nicole from '../../images/nicole.png';

const ChatbotForm = () => {
    return (
        <form>
            <div className="form-group">
                <img 
                    src={ nicole } 
                    className="rounded mx-auto d-block" 
                    alt="chatbot_avatar" />
                <label 
                    htmlFor="exampleFormControlInput1">
                    </label>
                <div className="conversation">
                    <MessageList />
                </div>
                <input 
                    type="conversation" 
                    className="form-control" 
                    id="FormControlInput" 
                    placeholder="Start the conversation" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
};

export default ChatbotForm;