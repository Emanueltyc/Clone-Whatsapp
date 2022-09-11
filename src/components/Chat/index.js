import React from 'react';
import Default from '../Default';
import ChatHeader from '../ChatHeader';
import ChatBody from '../ChatBody';
import ChatFooter from '../ChatFooter';
import * as C from './styles';

function Chat({ userChat }) {
    return userChat ? (
        <C.Container>
            <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
            <ChatBody chatId={userChat?.chatId} />
            <ChatFooter chatId={userChat?.chatId} />
        </C.Container>
    ) : (
        <Default />
    );
}

export default Chat;
