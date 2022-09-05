import { App } from 'vue';
import JIcon from './index.vue';

JIcon.install = (app: App) => {
    app.component(JIcon.name, JIcon);
};

export default JIcon;
