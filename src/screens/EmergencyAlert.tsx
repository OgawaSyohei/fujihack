import React, { useState } from 'react';
import { AlertOctagon, Send } from 'lucide-react';

const EmergencyAlert: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual emergency alert submission
    console.log('Emergency alert submitted:', message);
    alert('緊急通報が送信されました。救助が到着するまでお待ちください。');
    setMessage('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <AlertOctagon className="mr-2 text-red-500" />
        緊急通報
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">状況説明:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
            placeholder="現在の状況を詳しく説明してください"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition flex items-center justify-center">
          <Send className="mr-2" />
          緊急通報を送信
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        ※ この機能は、あなたの現在位置情報を自動的に送信します。救助チームがあなたの場所を特定するのに役立ちます。
      </p>
    </div>
  );
};

export default EmergencyAlert;