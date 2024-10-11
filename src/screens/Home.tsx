import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Map, CheckCircle, HelpCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">災害時の助け合いをサポート</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/emergency-alert" className="bg-red-500 text-white p-6 rounded-lg shadow-md hover:bg-red-600 transition">
          <AlertCircle size={48} className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">緊急通報</h2>
          <p>位置情報を共有し、救助を要請</p>
        </Link>
        <Link to="/rescue-map" className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition">
          <Map size={48} className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">救助マップ</h2>
          <p>近くの被災者の位置を確認</p>
        </Link>
        <Link to="/safety-check" className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition">
          <CheckCircle size={48} className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">安全確認</h2>
          <p>被災状況の確認と報告</p>
        </Link>
        <Link to="/rescue-guide" className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:bg-yellow-600 transition">
          <HelpCircle size={48} className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">救助ガイド</h2>
          <p>安全な救助方法の案内</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;