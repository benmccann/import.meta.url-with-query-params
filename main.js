import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

const demo = (x) => new URL(`/sample/${x}/example.jpg?abc`, import.meta.url).href

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <img src="${demo('directory')}" />
  </div>
`
