import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from "@/router/router";
import VIntersection from "@/directives/VIntersection";
import storeVuex from '@/storeVuex'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name , component)
} )

app.directive('intersection',VIntersection)

// directives.forEach(directive => {
//     app.directive(directive.name,directive)
// })


app
    .use(router)
    .use(storeVuex)
    .mount('#app')
