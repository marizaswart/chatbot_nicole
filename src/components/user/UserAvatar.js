import React from 'react';
import lucy from '../../images/girl_black_hair.png';
import mary from '../../images/girl_brown_hair_thumb.png';
import jane from '../../images/girl_blond_hair_thumb.png';
import elsa from '../../images/girl_light_brown_hair.png';



const UserAvatar = () => {
    return (
        <div className="container">
            <h1 className="text-center">Select your avatar</h1>

            <div class="d-flex justify-content-center">
                <div class="p-2">
                    <img 
                            src={ mary } 
                            className="rounded mx-auto d-block" 
                            alt="chatbot_avatar" />
                </div>
                <div class="p-2">
                    <img 
                            src={ jane } 
                            className="rounded mx-auto d-block" 
                            alt="chatbot_avatar" />
                </div>
                <div class="p-2">
                    <img 
                            src={ elsa } 
                            className="rounded mx-auto d-block" 
                            alt="chatbot_avatar" />
                </div>
                <div class="p-2">
                    <img 
                            src={ lucy } 
                            className="rounded mx-auto d-block" 
                            alt="chatbot_avatar" />
                </div>
            </div>
        </div>

    )
};

export default UserAvatar;