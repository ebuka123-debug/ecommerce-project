// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap JS (optional but recommended)
import 'bootstrap'
import './assets/main.css'
import './assets/styles/font-sizes.css'
import './assets/styles/font-colors.css'
import './assets/styles/icons.css'
import './assets/styles/background-colors.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// font awesome core
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUser, faHeart, faUserCircle,
  faBoxOpen, faCartPlus, faBars,
  faStoreAlt, faLightbulb, faCubes,
  faLaptop, faStar,faPencilAlt,
  faAngleRight,faEnvelope,faUserCog,
  faCreditCard,faAddressBook,faEnvelopeOpen,
  faArrowLeft,faCarSide,faFileAlt,
  faShieldCat,
} from '@fortawesome/free-solid-svg-icons'

// add icons you need
library.add(
  faUser, faHeart, faUserCircle,
  faBoxOpen, faCartPlus, faBars,
  faStoreAlt, faLightbulb, faCubes,
  faLaptop, faStar, faPencilAlt,
  faAngleRight, faEnvelope, faUserCog,
  faCreditCard, faAddressBook, faEnvelopeOpen,
  faArrowLeft, faCarSide, faFileAlt,
  faShieldCat
)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
