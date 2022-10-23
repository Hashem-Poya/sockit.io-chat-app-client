import React from 'react';

const ChatSideBar = () => {
  return (
    <div className='chat__sidebar'>
      <h2>Open chat</h2>
      <div>
        <h4 className='chat__header'>Active users</h4>
        <div className='chat__users'>
          <p>User 1</p>
          <p>User 2</p>
          <p>User 3</p>
          <p>User 4</p>
        </div>
      </div>
    </div>
  );
};

export default ChatSideBar;
