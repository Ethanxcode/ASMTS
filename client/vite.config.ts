import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            assets: path.resolve(__dirname, 'src/assets'),
        },
    },
    server: {
        port: 3000,
    },
    preview: {
        port: 3000,
    },
});
