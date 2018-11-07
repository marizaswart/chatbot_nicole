import React from 'react';

const ChatbotForm = () => {
    return (
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Hi, I am Nicole. How are you?</label>
                <div className="conversation">
                    <p>Conversation</p>
                </div>
                <input 
                    type="conversation" 
                    className="form-control" 
                    id="FormControlInput" 
                    placeholder="Start the conversation" />
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    );
};

export default ChatbotForm;