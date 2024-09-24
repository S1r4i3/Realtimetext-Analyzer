import React, { useState } from 'react';
import './App.css'; 

const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  const [punctuationCount, setPunctuationCount] = useState(0);

  const analyzeText = () => {
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    const sentences = text.split(/[.!?]+/).filter((sentence) => sentence.length > 0);
    const paragraphs = text.split(/\n+/).filter((paragraph) => paragraph.length > 0);
    
    setWordCount(words.length);
    setCharCount(text.length);
    setSentenceCount(sentences.length);
    setParagraphCount(paragraphs.length);
    setSpaceCount(text.split(' ').length - 1);
    setPunctuationCount((text.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) || []).length);
  };

  return (
    <div className="analyzer-container">
      <textarea
        className="text-input"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="analyze-button" onClick={analyzeText}>
        Analyze
      </button>

      <div className="results-container">
        <div className="result-tab">
          <span>Word Count:</span> <span className="count-value">{wordCount}</span>
        </div>
        <div className="result-tab">
          <span>Character Count:</span> <span className="count-value">{charCount}</span>
        </div>
        <div className="result-tab">
          <span>Sentence Count:</span> <span className="count-value">{sentenceCount}</span>
        </div>
        <div className="result-tab">
          <span>Paragraph Count:</span> <span className="count-value">{paragraphCount}</span>
        </div>
        <div className="result-tab">
          <span>Space Count:</span> <span className="count-value">{spaceCount}</span>
        </div>
        <div className="result-tab">
          <span>Punctuation Count:</span> <span className="count-value">{punctuationCount}</span>
        </div>
      </div>
    </div>
  );
};

export default TextAnalyzer;
