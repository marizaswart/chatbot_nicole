import React from 'react';
import Header from '../common/Header';
import ChatbotPage from '../chatbot/ChatbotPage';
import UserAvatar from '../user/UserAvatar';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <UserAvatar />
                <ChatbotPage />
            </div>
        );
    }
}

export default HomePage;