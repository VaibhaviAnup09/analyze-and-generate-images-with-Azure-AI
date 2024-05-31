import React, { useState } from 'react';
import { analyzeImage } from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyzeClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeImage(imageUrl);
      setAnalysisResult(result);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Image Analysis</h1>
      <input 
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={handleAnalyzeClick} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {analysisResult && (
        <div>
          <h2>Analysis Results</h2>
          <p><strong>Image URL:</strong> {imageUrl}</p>
          <p><strong>Caption:</strong> {analysisResult.description.captions[0].text}</p>
          <img src={imageUrl} alt="Analyzed" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default App;
