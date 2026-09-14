import Cadastro from './pages/Cadastro/Cadastro'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Cadastro />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
