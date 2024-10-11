import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <AlertTriangle className="mr-2" />
          災害救助サポート
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/emergency-alert" className="hover:underline">緊急通報</Link></li>
            <li><Link to="/rescue-map" className="hover:underline">救助マップ</Link></li>
            <li><Link to="/safety-check" className="hover:underline">安全確認</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;