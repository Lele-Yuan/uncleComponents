import { App, Plugin } from 'vue';
import { ButtonPlugin } from './Button/Index';
// import './theme/css-var.css';

const UnclePlugin: Plugin = {
    install(app: App) {
        ButtonPlugin.install(app);
    }
};

export default UnclePlugin;

export * from './Button';
