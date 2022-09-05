import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    "plugins": [vue()],
    "resolve": {
        "alias": {
            '@src/*': resolve(__dirname, './src')
        }
    },
    "build": {
        // 指定输出路径为 lib
        "outDir": 'lib',
        // 库模式构建配置
        "lib": {
            "entry": resolve(__dirname, './src/index.ts'),
            "name": '@unclejia/components',
            "formats": ['es'],
            "fileName": (format) => `unclejia-components.${format}.js`
        },
        "rollupOptions": {
            "external": ['vue'],
            "output": {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                "globals": {
                    "vue": 'Vue'
                }
            }
        },
        "emptyOutDir": false // 确保在执行tsc的时候生成types
    }
});
