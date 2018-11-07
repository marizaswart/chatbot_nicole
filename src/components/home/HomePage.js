import React from 'react';
import ChatbotPage from '../chatbot/ChatbotPage';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to the Sogeti</h1>
                    <h1>#addher-mingle-jingle</h1>
                    <p className="lead">Go ahead and talk to our chatbot Nicole</p>
                </div>
                <div>
                    <ChatbotPage />
                </div>
            </div>
        );
    }
}

export default HomePage;