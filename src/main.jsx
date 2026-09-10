// Importamos o React StrictMode.
// Ele ajuda a encontrar possíveis problemas durante o desenvolvimento.
import { StrictMode } from 'react'

// Importamos a função que cria a aplicação React no navegador.
import { createRoot } from 'react-dom/client'

// Importamos o componente principal da aplicação.
import App from './App.jsx'

// Importamos o CSS global do projeto.
import './index.css'

// Procuramos o elemento HTML com id="root"
// e renderizamos toda a aplicação React dentro dele.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Aqui começa nossa aplicação */}
    <App />
  </StrictMode>,
)