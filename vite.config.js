import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const config = {
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        assetsDir: '',
    }
};

export default defineConfig(({command, mode, ssrBuild}) => {
    if (command === 'serve') {
        config.publicDir = 'public';
        config.build = {
            assetsDir: '',
            copyPublicDir: false,
            emptyOutDir: true,
        };
    }

    return config;
});
