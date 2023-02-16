import logo from './logo.svg';
import './App.css';
import Quote from './components/Quote';
import { useState } from 'react';

function App() {

  const [quotes, setQuotes] = useState(null);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [error, setError] = useState(false);

  const getQuotes = async () => {
      const response = await fetch("https://api.quotable.io/quotes");
      const data = await response.json();
      const quotes = data.results;

      if (quotes){
        setQuotes(quotes);
        setError(false);        
      } else {
        setError(true);
      }
  }

  const prev = () => {
    if (currentQuote - 1 < 0) setCurrentQuote(quotes.length - 1);
    else setCurrentQuote(curr => (curr - 1));
  }

  const next = () => {
    setCurrentQuote(curr => (curr + 1) % quotes.length);
  }  

  return (
    <div className="App">
        <div className='header'>
            <button className="action-button" onClick={getQuotes}>Let's get some inspiration today!</button>
        </div>
        {error && 
          <div className='error'>
              <h1>Failed to fetch quotes.</h1>
          </div>
        }        
        <div className='quotes-container'>
            {
              quotes && 
              <>
                <h1 className='indicator'>{currentQuote + 1} / {quotes.length} </h1>

                <Quote quote={quotes[currentQuote]}/>
                
                <div className='nav'>
                  <button onClick={prev}>Previous</button>
                  <button onClick={next}>Next</button>
                </div>                 
              </>
            }                  
        </div> 




    </div>
  );
}

export default App;
