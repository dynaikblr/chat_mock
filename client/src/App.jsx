import React from 'react';
import ChatWindow from './components/ChatWindow';
import Composer from './components/Composer';

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <ChatWindow />
      <Composer />
    </div>
  );
}