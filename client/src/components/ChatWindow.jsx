import React from 'react';
import Message from './Message';

export default function ChatWindow() {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-900">
      <Message from="me" text="Hello!" />
      <Message from="them" text="Hey, how are you?" />
    </div>
  );
}