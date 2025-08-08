import React, { useState } from 'react';

export default function Composer() {
  const [input, setInput] = useState('');

  const sendMessage = () => {
    console.log('Message sent:', input);
    setInput('');
  };

  return (
    <div className="p-4 bg-gray-800 flex">
      <input
        className="flex-1 p-2 rounded-l-lg text-black"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button
        className="bg-green-600 px-4 rounded-r-lg"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}