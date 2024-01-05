import React from 'react';

const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <div className="message-container my-message">
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
        />
        <div className="message-info">
          <span className="message-timestamp">{new Date(message.created).toLocaleTimeString()}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="message-container my-message">
      <div className="message" style={{ backgroundColor: '#3B2A50',color:"#fff" }}>
        {message.text}
      </div>
      <div className="message-info">
        <span className="message-timestamp">{new Date(message.created).toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default MyMessage;
