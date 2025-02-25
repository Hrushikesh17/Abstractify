import React, { useState } from "react";
import styled from "styled-components";
import { summarizeText, answerQuestion } from "./Components/AiApi";
import AnimatedButton from "./Components/AnimatedButton";
import Loader from './Components/Loader';
import Switch from './Components/Switch';

const Container = styled.div`
  position: relative;
  padding: 20px;
  max-width: 800px;
  margin: 40px auto;
  background: #f4f4f4;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 26px;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: bold;
  position: relative;
  padding: 0 150px; // Add padding instead of margin to preserve centering
`;

const Button = styled.button`
  padding: 12px 18px;
  background: ${(props) => (props.primary ? "#3498db" : "#2ecc71")};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  margin-top: 10px;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  border: 2px solid #3498db;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #2ecc71;
    box-shadow: 0px 4px 8px rgba(46, 204, 113, 0.3);
  }
`;

const OutputBox = styled.div`
  margin-top: 12px;
  padding: 14px;
  background: #ecf0f1;
  border-radius: 10px;
  border: 2px solid #bdc3c7;
  font-size: 14px;
  color: #2c3e50;
  transition: all 0.3s ease;
  white-space: pre-wrap; // This will preserve line breaks
  max-height: 400px;
  overflow-y: auto;
`;

const FileUploader = styled.div`
  border: 2px dashed #3498db;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: #ebf5fb;
    border-color: #2980b9;
  }

  input[type="file"] {
    display: none;
  }

  label {
    display: block;
    padding: 10px;
    cursor: pointer;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const ModeWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1; // Ensure toggle appears above other elements
`;

const ModeLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #2c3e50;
  min-width: 85px;
  text-align: center;
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  color: #666;
  font-size: 0.9em;
  font-style: italic;
`;

export { Container, Title, Button, Input, OutputBox };

const App = () => {
  const [summary, setSummary] = useState("");
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [mode, setMode] = useState("summarization");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreativeMode, setIsCreativeMode] = useState(false);

  const handleSummarize = async () => {
    try {
      if (!file) {
        throw new Error('Please upload a PDF file first');
      }
      setIsLoading(true);
      setSummary('Processing...');
      
      const result = await summarizeText(file, isCreativeMode);
      
      if (!result) {
        throw new Error('No summary content received');
      }
      
      setSummary(result);
      console.log('Summary processed successfully:', {
        paragraphs: result.split('\n\n').length,
        totalLength: result.length
      });
      
    } catch (error) {
      console.error('Summarization error:', error);
      setSummary(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAskAI = async () => {
    try {
      if (!file) {
        throw new Error('Please upload a PDF file first');
      }
      if (!query.trim()) {
        throw new Error('Please enter a question');
      }
      
      setIsLoading(true);
      const result = await answerQuestion(file, query, isCreativeMode);
      setAnswer(result);
    } catch (error) {
      console.error('Q&A error:', error);
      setAnswer(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (event) => {
    try {
      const uploadedFile = event.target.files[0];
      
      // Debug log
      console.log('Attempting file upload:', {
        name: uploadedFile?.name,
        type: uploadedFile?.type,
        size: uploadedFile?.size
      });

      if (!uploadedFile) {
        throw new Error('No file selected');
      }

      if (uploadedFile.type !== 'application/pdf') {
        throw new Error('Invalid file type. Please upload a PDF file');
      }

      const maxSize = 10 * 1024 * 1024; // 10MB
      if (uploadedFile.size > maxSize) {
        throw new Error(`File size too large. Maximum size is ${maxSize / 1024 / 1024}MB`);
      }

      setFile(uploadedFile);
      console.log('File upload successful:', uploadedFile.name);
    } catch (error) {
      console.error('File upload error:', error);
      alert(error.message);
      setFile(null);
    }
  };

  const handleModeToggle = (e) => {
    setIsCreativeMode(e.target.checked);
  };

  return ( 
    <Container>
      <Title>Abstractify</Title>
      
      <ModeWrapper>
        <ModeLabel>{isCreativeMode ? "Creative Mode" : "Deterministic Mode"}</ModeLabel>
        <Switch onChange={handleModeToggle} checked={isCreativeMode} />
      </ModeWrapper>

      <FileUploader
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const droppedFile = e.dataTransfer.files[0];
          if (droppedFile) {
            handleFileUpload({ target: { files: [droppedFile] } });
          }
        }}
      >
        <input
          type="file"
          accept=".pdf,application/pdf"
          onChange={handleFileUpload}
          id="file-upload"
        />
        <label htmlFor="file-upload">
          {file ? (
            <>
              <div>Selected: {file.name}</div>
              <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                File size: {(file.size / 1024 / 1024).toFixed(2)} MB
              </div>
            </>
          ) : (
            <>
              <div>Click to upload PDF or drag and drop</div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                Maximum size: 10MB
              </div>
            </>
          )}
        </label>
      </FileUploader>

      {mode === "summarization" ? (
        <>
          <AnimatedButton primary onClick={handleSummarize} disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Summarize'}
          </AnimatedButton>
          {isLoading ? (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          ) : (
            summary && (
              <OutputBox>
                {summary.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </OutputBox>
            )
          )}
        </>
      ) : (
        <>
          <Input
            type="text"
            placeholder="Ask a question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
          />
          <AnimatedButton onClick={handleAskAI} disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Ask AI'}
          </AnimatedButton>
          {isLoading ? (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          ) : (
            answer && <OutputBox>{answer}</OutputBox>
          )}
        </>
      )}

      <AnimatedButton 
        primary={true} 
        onClick={() => setMode(mode === "summarization" ? "qa" : "summarization")}
        disabled={isLoading}
      >
        Switch to {mode === "summarization" ? "Q&A Mode" : "Summarization Mode"}
      </AnimatedButton>

      <Footer>
        <p>Developed by Hrushikesh Pradhan © {new Date().getFullYear()}</p>
        {/* <p>TCS Innovation Lab Project</p> */}
      </Footer>
    </Container>
  );
};

export default App;