import { App } from 'vue';
import JButton from './src/index.vue';

JButton.install = (app: App) => {
    app.component(JButton.name, JButton);
};

export default JButton;
