import React from 'react';
import * as C from './styles';
import SidebarHeader from '../SidebarHeader';
import SideBarChats from '../SidebarChats';

function Sidebar({ userChat, setUserChat }) {
    return (
        <C.Container>
            <SidebarHeader />
            <SideBarChats setUserChat={setUserChat} userChat={userChat} />
        </C.Container>
    );
}

export default Sidebar;
