import React from 'react';
import WordTutils from './WordTutils';
import "./App.css";

function App() {
  return (
    <>
      <div className="container my-3 text-center">
        <WordTutils title="Playing with Words" button1="Convert into UpperCase" button2="Convert into LowerCase" button3="Words Count" button4="Characters Count" button5="Reset Screen"/>
      </div>
    </>
  );
}

export default App;
