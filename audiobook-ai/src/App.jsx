import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [audioReady, setAudioReady] = useState(false);

  const handleGenerate = () => {
    if (inputText.trim()) {
      setAudioReady(true);
    }
  };

  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-indigo-600">AudioBook AI</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Upload</a>
          <a href="#" className="hover:text-indigo-600">Library</a>
          <a href="#" className="hover:text-indigo-600">Settings</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Convert Novels into Engaging Audiobooks
        </h2>
        <p className="text-lg max-w-xl mx-auto text-gray-600 mb-8">
          Paste any paragraph below to hear how our AI can bring your stories to life.
        </p>
      </section>

      {/* Try a Sample Section */}
      <section className="px-6 pb-20">
        <h3 className="text-2xl font-semibold mb-4 text-center">Try a Sample Paragraph</h3>
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-2xl mx-auto">
          <textarea
            rows="5"
            className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded mb-4"
            placeholder="Paste a paragraph here..."
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              setAudioReady(false);
            }}
          />
          <button
            onClick={handleGenerate}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Generate Sample
          </button>

          {audioReady && (
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">Generated Audiobook:</p>
              <div className="w-full h-12 bg-gray-200 rounded flex items-center justify-center text-gray-600 italic">
                🎧 [Audio Playback Placeholder]
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;