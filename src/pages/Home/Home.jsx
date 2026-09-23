import './Home.css'
import '././../../index.css'
import '././../../styles/tokens.css'
import Cartoes from './../../assets/imagens/Cartões/cartao_bronze.png'
import CartaoEmPe from './../../assets/imagens/Cartões/cartao_bronze_em_pe.png'
import CartaoLadinho from './../../assets/imagens/Cartões/cartaoBronzeLadinho.png'
import cartaoHome from '././../../assets/imagens/Cartões/cartaoHome.png'

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
		<div className='containerEsquerda'>
			<p className='pInicial'>· CONTA DIGITAL · CARTÂO DE METAL</p>
			<h1 className='h1Principal'>O banco que se</h1>
			<h1 className='h1PrincipalCor'>forja no seu ritmo.</h1>
			<p className='pTexto'>Abra sua conta em minutos, escolha o cartão de metal <br />
			que combina com você e acompanhe cada centavo <br />
			em tempo real. Sem tarifa de manutenção, sem anuidade, <br />
			sem letras miúdas.</p>
			<button className='buttonHome'>Abrir minha conta</button>
			<button className='buttonHomeCor'>Ver os cartões</button>
			<hr />
			
			<div className='vantagens'>
			<h2>0</h2>
			<p>tarifa de <br /> manutenção</p>
			</div>
			<div className='vantagens'>
			<h2>100%</h2>
			<p> digital, <br /> do cadastro ao cartão</p>
			</div>
			<div className='vantagens'>
			<h2>24/7</h2>
			<p>Suporte no App</p>
			</div>
		</div>

		<div className='containerDireita'>
			<img src={cartaoHome} alt="cartaoHome" className="cartaoHome" />
		</div>
	
	</div>
  );
}

