import React from 'react';

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      )}
      <div className="message-container">
        <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
          {message.text}
        </div>
        <div className="message-info">
          <span className="message-sender">{message.sender.username}</span>
          <span className="message-timestamp">{new Date(message.created).toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
};

export default TheirMessage;
