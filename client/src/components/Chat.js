import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Chat.css'
import { ChatEngine } from 'react-chat-engine'

export default function Chat() {
    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);
    return (
    <ChatEngine
        publicKey={'4c9a4123-7701-4745-ab48-5f6ebd77f695'}
        userName={'Alpana'}
        userSecret={'Alpana12@'}
    />
    );
}


