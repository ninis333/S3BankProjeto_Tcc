import './Home.css'
import '././../../index.css'
import '././../../styles/tokens.css'

export default Home

function Home() {
	return (
		<main className="home">
			<div className="containerheader">
				<Header />
				<BodyHome/>
			</div>
		</main>
	)
}

export const Header = () => {
	return (
		<div className="header">
			<div className="linksEsquerda">
			<p className="links">Conta</p>
			<p className="links">Cartões</p>
			<p className="links">App</p>
			<p className="links">Segurança</p>
			</div>
			<div className="linksDireita">
			<p className="linkEntrar">Entrar</p>
			<button className='botaoConta'>Abrir minha conta</button>
			</div>
		</div>

	)
}

export const BodyHome = () => {
  return (
    <div className="bodyHome">
		<p className='pInicial'>· CONTA DIGITAL · CARTÂO DE METAL</p>
    </div>
  );
}