import { mount } from 'svelte';
import App from './App.svelte'

const app = mount(App, { target: document.body, props: { name: 'electron' } });

export default app;