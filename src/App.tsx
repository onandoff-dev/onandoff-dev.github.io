import React from 'react';
import logo from './logo.svg';
import './styles/tailwind.css';

function App() {
  return (
    <div className="container fle bg-black min-h-screen min-w-full">
      <header className="pt-16">
        <img src={logo} className="rounded-sm h-24 mx-auto" alt="logo" />
      </header>
    </div>
  );
}

export default App;
