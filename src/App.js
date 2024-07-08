import logo from './logo.svg';
import { useState } from 'react'; 
import './App.css';
import { GoogleGenerativeAI } from '@google/generative-ai';

function App() {
  const [state, setState] = useState ("");
  const [responseAI, setResponseAI] = useState ("");

  const genAI = new GoogleGenerativeAI("AIzaSyD-lBAoM816guG_u4mg0Y2MTHKDonz_CpM");
  
  
  const model=genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  async function response (value) {
    const res = await model.generateContent(value);
    setResponseAI(res.response.text());
    return res;
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tony AI
        </p>
      </header>
      <div>
        <span>{responseAI}</span>
      </div>
      <input type='text' onBlur={(e)=>{setState(e.target.value)}}></input>

      <input type='submit' onClick={response(state)}></input>
    </div>
  );
}

export default App;
