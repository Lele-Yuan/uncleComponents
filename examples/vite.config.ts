import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    "base": './',
    "plugins": [vue()],
    "resolve": {
        "alias": {
            '@': resolve(__dirname, './src'),
            "assets": resolve(__dirname, 'src/assets')
        }
    }
});
