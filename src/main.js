import { createApp } from 'vue'
import App from './App.vue'

import Button from 'primevue/button'
import Card from 'primevue/card'
import Menu from 'primevue/menu'
import InputText from 'primevue/inputtext'


import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


// createApp(App).mount('#app')

const app = createApp(App)

app.component('Button', Button)
app.component('Card', Card)
app.component('Menu', Menu)
app.component('InputText', InputText)

app.mount('#app')
