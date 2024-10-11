import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

interface EmergencyLocation {
  id: number;
  lat: number;
  lng: number;
  message: string;
}

const RescueMap: React.FC = () => {
  const [emergencyLocations, setEmergencyLocations] = useState<EmergencyLocation[]>([]);

  useEffect(() => {
    // TODO: Implement actual API call to fetch emergency locations
    const mockLocations: EmergencyLocation[] = [
      { id: 1, lat: 35.6895, lng: 139.6917, message: "建物の下敷きになっています。助けが必要です。" },
      { id: 2, lat: 35.6897, lng: 139.6922, message: "火災が発生しています。消火活動が必要です。" },
      { id: 3, lat: 35.6899, lng: 139.6925, message: "高齢者が取り残されています。救助をお願いします。" },
    ];
    setEmergencyLocations(mockLocations);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <MapPin className="mr-2 text-blue-500" />
        救助マップ
      </h1>
      <div className="bg-gray-200 p-4 mb-4 rounded">
        <p>地図表示エリア (実際の地図ライブラリを統合する必要があります)</p>
      </div>
      <h2 className="text-2xl font-semibold mb-4">緊急通報一覧</h2>
      <ul className="space-y-4">
        {emergencyLocations.map((location) => (
          <li key={location.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">緊急通報 #{location.id}</h3>
            <p className="text-sm text-gray-600">位置: {location.lat}, {location.lng}</p>
            <p className="mt-2">{location.message}</p>
            <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition">
              救助に向かう
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RescueMap;