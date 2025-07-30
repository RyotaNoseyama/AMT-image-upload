import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <ImageIcon className="text-blue-600" size={40} />
            画像サーバー
          </h1>
          <p className="text-gray-600">publicディレクトリの画像にアクセスできます</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">画像アクセス方法</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">基本的な使い方</h3>
              <p className="text-gray-600 mb-2">
                publicディレクトリに画像ファイルを配置すると、以下のURLでアクセスできます：
              </p>
              <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                http://localhost:5173/your-image.jpg
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">例</h3>
              <p className="text-gray-600 mb-2">
                public/sample.jpgファイルがある場合：
              </p>
              <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                http://localhost:5173/sample.jpg
              </code>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">注意</h3>
              <p className="text-gray-600">
                画像ファイルは手動でpublicディレクトリに配置してください。
                このアプリケーションは画像の表示・アクセスのみを提供します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;