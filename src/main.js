import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from "@/router/router";
import Vintersetion from "@/directives/Vintersetion";
import directives from "@/directives";
import store from "@/store";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
directives.forEach(directive => {
    app.directive(directive.name, directive)
})
app.directive('intersection', Vintersetion)

app
    .use(router)
    .use(store)
    .mount('#app')
