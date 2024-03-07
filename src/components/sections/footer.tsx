import { motion } from 'framer-motion';
import { h } from 'preact';
import { Text } from 'preact-i18n';

import { buildAnimation, classNames } from '@/utils';

interface FooterProps {
    className?: string;
}

function Footer(props: FooterProps): h.JSX.Element {
    const { className } = props;

    return (
        <footer className={classNames('flex flex-col text-white bg-primary space-y-2 p-8', className)}>
            <motion.p {...buildAnimation({ initial: { y: 50 }, whileInView: { y: 0 }, delay: 0.6 })} className="mx-auto text-center text-base">
                <div className="hidden size-0 select-none">made by @DeadBryam 🎉</div>
                <Text id="footer.copy" fields={{ year: new Date().getFullYear() }} />
            </motion.p>
        </footer>
    );
}

export { Footer };

// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
//                         |  -)))  -  ))
//  This code is protected by the power of this ASCII angel! 🙏
//  May it protect this code from bugs and errors.
//  Amen 🙏
//
// Don't delete this ASCII art, it's the only thing keeping the code together! 🙏
