import React, { useState } from 'react';
import { HelpCircle, ArrowRight, ArrowLeft, Volume2, AlertTriangle, Shield, Eye, MapPin, Upload, Check, UserCheck, Tool } from 'lucide-react';

interface GuideStep {
  title: string;
  content: string;
  subSteps: {
    icon: React.ReactNode;
    text: string;
  }[];
  imageUrl?: string;
  videoUrl?: string;
}

const RescueGuide: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [aiAssessment, setAiAssessment] = useState<string | null>(null);

  const guideSteps: GuideStep[] = [
    {
      title: "安全の確認",
      content: "周囲の状況を画像で撮影し、AIによる安全評価を行います。",
      subSteps: [
        {
          icon: <Upload className="text-blue-500" />,
          text: "周囲の状況を撮影し、画像をアップロードしてください"
        },
        {
          icon: <Eye className="text-green-500" />,
          text: "AIが画像を分析し、安全性を評価します"
        },
        {
          icon: <AlertTriangle className="text-yellow-500" />,
          text: "AIの評価結果を確認し、安全が確認できたら次のステップに進んでください"
        }
      ]
    },
    {
      title: "被災者の状態確認",
      content: "被災者の状態を確認し、必要な救助方法を判断します。",
      subSteps: [
        {
          icon: <UserCheck className="text-blue-500" />,
          text: "被災者の意識と呼吸を確認してください"
        },
        {
          icon: <AlertTriangle className="text-yellow-500" />,
          text: "明らかな外傷や出血がないか確認してください"
        },
        {
          icon: <Shield className="text-green-500" />,
          text: "被災者の安全を確保し、二次被害を防止してください"
        }
      ]
    },
    {
      title: "救助方法の選択",
      content: "被災者の状態に応じた適切な救助方法を選択します。",
      subSteps: [
        {
          icon: <Tool className="text-blue-500" />,
          text: "必要な救助器具を確認し、準備してください"
        },
        {
          icon: <MapPin className="text-green-500" />,
          text: "安全な救助ルートを確認してください"
        },
        {
          icon: <UserCheck className="text-yellow-500" />,
          text: "被災者の状態に応じた救助方法を選択してください"
        }
      ]
    }
  ];

  const nextStep = () => {
    if (step < guideSteps.length) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // TODO: Implement actual audio playback
    console.log(isPlaying ? 'Audio paused' : 'Audio playing');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        // 実際のAI評価の代わりに、ランダムな評価結果を生成
        simulateAiAssessment();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAiAssessment = () => {
    const assessments = [
      "周囲の状況は安全です。救助活動を開始できます。",
      "注意が必要です。落下物の危険があります。ヘルメットを着用してください。",
      "危険な状況が検出されました。専門の救助隊を待ってください。",
      "火災の危険があります。消火器を準備し、避難経路を確保してください。"
    ];
    const randomAssessment = assessments[Math.floor(Math.random() * assessments.length)];
    setAiAssessment(randomAssessment);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <HelpCircle className="mr-2 text-yellow-500" />
        救助ガイド
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">ステップ {step}: {guideSteps[step - 1].title}</h2>
        <p className="mb-4">{guideSteps[step - 1].content}</p>
        
        {step === 1 && (
          <div className="mb-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition flex items-center justify-center"
            >
              <Upload className="mr-2" />
              画像をアップロード
            </label>
            {uploadedImage && (
              <div className="mt-4">
                <img
                  src={uploadedImage}
                  alt="Uploaded scene"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                {aiAssessment && (
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Check className="mr-2 text-green-500" />
                      AI評価結果
                    </h3>
                    <p>{aiAssessment}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-2">詳細手順:</h3>
        <ul className="space-y-3 mb-6">
          {guideSteps[step - 1].subSteps.map((subStep, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1">{subStep.icon}</span>
              <span>{subStep.text}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-4 py-2 rounded flex items-center ${step === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            <ArrowLeft className="mr-2" />
            前へ
          </button>
          <button
            onClick={toggleAudio}
            className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 flex items-center"
          >
            <Volume2 className="mr-2" />
            {isPlaying ? '音声停止' : '音声再生'}
          </button>
          <button
            onClick={nextStep}
            disabled={step === guideSteps.length}
            className={`px-4 py-2 rounded flex items-center ${step === guideSteps.length ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            {step === guideSteps.length ? '完了' : '次へ'}
            {step !== guideSteps.length && <ArrowRight className="ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RescueGuide;