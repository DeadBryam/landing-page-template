import million from 'million/compiler';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [million.vite({ auto: true }), preact()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@utils': path.resolve(__dirname, './src/utils/'),
            '@pages': path.resolve(__dirname, './src/pages/'),
            '@styles': path.resolve(__dirname, './src/styles/'),
            '@hooks': path.resolve(__dirname, './src/hooks/'),
            '@langs': path.resolve(__dirname, './src/langs/'),
            '@context': path.resolve(__dirname, './src/context/'),
            '@constants': path.resolve(__dirname, './src/constants/'),
            '@layout': path.resolve(__dirname, './src/layout/'),
            '@services': path.resolve(__dirname, './src/services/'),
        },
    },
});
