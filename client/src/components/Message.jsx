import React from 'react';

export default function Message({ from, text }) {
  const isMe = from === 'me';
  return (
    <div className={\`flex \${isMe ? 'justify-end' : 'justify-start'} mb-2\`}>
      <div className={\`px-4 py-2 rounded-lg \${isMe ? 'bg-green-600' : 'bg-gray-700'}\`}>
        {text}
      </div>
    </div>
  );
}