import React from 'react';
import logo from './logo.svg';
import './styles/tailwind.css';

function App() {
    return (
        <div className="mx-auto flex flex-col bg-white min-h-screen">
            <main className="onandoff-hero-bg flex-grow">
            </main>
            <footer className="flex flex-row bg-black w-full h-24">
                <div className="flex flex-row container items-center justify-start mx-auto">
                    <img src={logo} className="rounded-sm ml-6 h-8" alt="logo"/>
                    <p>
                        <a className="text-white ml-2 text-base font-normal font-sans leading-loose tracking-tight"
                           href="https://github.com/onandoff-dev/">onandoff.io</a>
                    </p>
                </div>
            </footer>

        </div>
    );
}

export default App;
