import React from 'react';
import logo from './images/logo-bg-white.svg';
import github from './images/github.svg';
import email from './images/email.svg';
import {motion} from "framer-motion";
import './styles/tailwind.css';

function App() {
    return (
        <div className="mx-auto flex flex-col onandoff-hero-bg min-h-screen">
            <nav className="bg-black px-4 sm:px-0">
                <div className="flex flex-row container items-center justify-between mx-auto my-2">
                    <motion.img
                        src={logo}
                        className="h-8 my-4 bg-white rounded-lg"
                        alt="logo"
                        whileHover={{scale: 1.2, rotate: 90}}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                    />
                    <div className="flex flex-row">
                        <motion.a
                            className="text-white ml-2 text-base font-normal font-sans leading-loose tracking-tight"
                            href="mailto:contact@onandoff.io"
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                        >
                            <img src={email} className="rounded-sm h-8" alt="email"/>
                        </motion.a>
                        <motion.a
                            className="text-white ml-2 text-base font-normal font-sans leading-loose tracking-tight"
                            href="https://github.com/onandoff-dev/"
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                        >
                            <img src={github} className="rounded-sm h-8" alt="github"/>
                        </motion.a>
                    </div>
                </div>
            </nav>
            <main className="flex container items-center justify-start flex-grow mx-auto">
                <div className="flex flex-col px-4 sm:px-0">
                    <p className="font-medium text-2xl leading-relaxed max-w-2xl">We are Software
                        Engineers based in Munich specialising in app
                        development, web development, design and deployment across all platforms.</p>
                </div>
            </main>
            <footer className="flex flex-row w-full">

            </footer>
        </div>
    );
}

export default App;
