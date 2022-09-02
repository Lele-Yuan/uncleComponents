import { App, Plugin } from 'vue';
import JButton from './Button';
// import './theme/css-var.css';
const components = {
    JButton
};
const UnclePlugin: Plugin = {
    install(app: App) {
        // app.use(JButton);
        Object.values(components).forEach(item => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            app.use(item);
        });
    }
};

export default UnclePlugin;

export { default as JButton } from './Button';
