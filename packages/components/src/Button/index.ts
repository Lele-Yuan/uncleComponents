import { App } from 'vue';
import JButton from './index.vue';

JButton.install = (app: App) => {
    app.component(JButton.name, JButton);
};

export default JButton;
