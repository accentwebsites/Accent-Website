import './style.css'
import { renderNavigation } from './src/components/Navigation'
import { renderHero } from './src/components/Hero'
import { renderServices } from './src/components/Services'
import { renderAbout } from './src/components/About'
import { renderContact } from './src/components/Contact'
import { renderFooter } from './src/components/Footer'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-white">
    ${renderNavigation()}
    ${renderHero()}
    ${renderServices()}
    ${renderAbout()}
    ${renderContact()}
    ${renderFooter()}
  </div>
`