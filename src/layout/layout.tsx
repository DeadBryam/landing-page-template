import { h } from 'preact';

import { Footer } from '@/components';
import { classNames } from '@/utils';

interface LayoutProps {
    className?: string;
    children?: h.JSX.Element | h.JSX.Element[];
}

function Layout(props: LayoutProps): h.JSX.Element {
    const { className, children } = props;

    return (
        <div className="flex min-h-screen flex-col flex-wrap overflow-hidden">
            {/* If you have header or navbar, you can add it here */}
            <main className={classNames('relative flex flex-col', className)}>{children}</main>
            <Footer />
        </div>
    );
}

export { Layout };

// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀⠀⢸⣷⣿⣧⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⡇⠀⢙⣿⡟⠿⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⠀⢹⠀⢸⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡇⠀⠀⠀⠈⠃⣾⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣇⠀⠀⠀⣀⢀⣿⠁⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣦⡀⠀⣸⢸⡿⢠⠹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⢸⣿⣷⡄⣿⣌⠃⣼⢀⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⣀⠀⠀⣿⣿⣗⣿⣿⢺⣷⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⣰⡀⠀⠀⠈⠛⢿⣾⣿⡟⣴⣿⣿⢸⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠰⣿⡇⠀⠀⠀⢉⡻⣿⣿⣴⣿⣿⣿⣜⢿⣿⡂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠚⠷⠀⠀⠀⢸⣧⣽⣿⣿⣿⣿⣿⣿⣷⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⢸⣿⣿⣿⣿⣿⣿⣿⣿⣧⡖⡀⠀⠀⠀⠀⠀⣠⣦⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣯⣿⣮⡛⣿⣿⣿⣿⣿⣿⣿⣟⣵⠇⠀⠀⠠⠶⠿⠛⠉⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣿⣡⣿⣿⣿⣿⣿⣿⣿⣸⣟⣿⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⣤⣶⣶⣆⣟⠻⢿⣿⣿⢿⣿⣿⣯⣽⣿⣓⠶⣭⣟⣳⠶⣤⣀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⢀⣤⣶⢟⣥⣾⣿⣿⢿⣿⠇⣿⡦⣿⣿⡟⢯⡙⠻⢿⣶⣭⣛⠻⢶⣿⣤⣀⠀⠀⠀⠀
// ⠀⠀⠀⠐⣟⣽⢾⣫⣷⢿⣋⣰⡿⣷⣿⣿⡇⠈⣃⡘⣮⡹⣷⣄⣾⣝⠿⣿⣶⣦⣉⡙⠿⣶⣦⣀
// ⢀⣤⠾⠛⢉⡴⠟⠛⠾⣻⣿⣿⣷⣿⣧⢹⣇⢾⣿⣷⠘⢿⣮⡻⣿⣟⠷⠈⠙⠻⢿⣿⡷⠒⠀⠀
// ⠉⠀⠀⠀⠀⠀⠀⣠⣾⠟⢱⡿⠛⠙⠛⢸⣿⠀⠀⠀⠀⠈⢻⣷⡀⠙⠷⠀⠀⠀⠀⠈⠁⠀⠀⠀
// ⠀⠀⠀⠀⠀⢠⡿⠛⠁⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⠀⠀⠙⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//
// Nobody can destroy this code, cuz it's protected by the power by me, the soul of Cinder, Soul of all the Lords that link the flame,
// the perfect warrior and the protector of the fist flame.
