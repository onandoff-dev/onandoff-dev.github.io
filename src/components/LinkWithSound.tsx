import React from 'react';
import {motion} from "framer-motion";
import useSound from "use-sound";

let plungerSfx = require('../sounds/plunger.mp3');

export const LinkWithSound: React.FunctionComponent<{ children: React.ReactNode, css?: string, href: string }> = ({children, css, href}) => {
    const [play, {stop}] = useSound(plungerSfx, {volume: 0.5});
    //const [isHovering, setIsHovering] = React.useState(false);
    return (
        <motion.a
            className={css}
            href={href}
            onMouseEnter={() => {
                //setIsHovering(true);
                play({});
            }}
            onMouseLeave={() => {
                //setIsHovering(false);
                stop();
            }}
            whileHover={{scale: 1.2}}
            whileTap={{scale: 0.9}}
        >
            {children}
        </motion.a>
    );
};
