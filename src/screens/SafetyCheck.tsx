import React, { useState } from 'react';
import { CheckCircle, Camera } from 'lucide-react';

const SafetyCheck: React.FC = () => {
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual safety check submission
    console.log('Safety check submitted:', { status, description, image });
    alert('安全確認情報が送信されました。ありがとうございます。');
    setStatus('');
    setDescription('');
    setImage(null);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <CheckCircle className="mr-2 text-green-500" />
        安全確認
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="status" className="block mb-2 font-semibold">現在の状態:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">選択してください</option>
            <option value="safe">安全</option>
            <option value="need_help">助けが必要</option>
            <option value="injured">怪我をしている</option>
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 font-semibold">状況説明:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
            placeholder="現在の状況を詳しく説明してください"
          ></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block mb-2 font-semibold">画像アップロード:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition flex items-center justify-center">
          <Camera className="mr-2" />
          安全確認情報を送信
        </button>
      </form>
    </div>
  );
};

export default SafetyCheck;