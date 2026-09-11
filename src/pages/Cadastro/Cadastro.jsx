import './Cadastro.css'
import '././../../index.css'
import LogoCor from './../../assets/imagens/Logos/Logo_Cor.png'
import LogoBranco from './../../assets/imagens/Logos/Logo_Branco.png'
import '././../../styles/tokens.css'
import Cartoes from './../../assets/imagens/Cartões/Cartoes_juntos.png'
import { FaLock } from "react-icons/fa";

function Cadastro() {
	return (
		<main className="cadastro">
			<div className="containerEsquerda">	
			<LogoCorEsquerda />
			<TextoCor />
			<Subtitulo />
			<CartoesJuntos />
      		<FaLock />
			<TextoFinal />
			</div>
			<div className="containerDireita">
			<BoxCadastro />

			</div>
		</main>
	)
}

export default Cadastro


/* 
  Exporte das logos 
*/

export const LogoCorEsquerda = () => {
	return (
		<div className="logoCor">
			<img src={LogoCor} alt="Logo_Cor" className="logo-cor" />
		</div>
	)
}

export const LogoBrancoDireita = () => {
	return (
		<div className="logoBranco">
			<img src={LogoBranco} alt="Logo_Branco" className="logo-branco" />
		</div>
	)
}


/* 
  título da página com cor.
*/

export const TextoCor = () => {
	return (
		<div className="textoCor">
			<div className="text-wrapper">Bem vindo ao S3Bank</div>
		</div>
	)
}

/* 
  subtítulo da página.
*/

export const Subtitulo = () => {
  return (
    <div className="subtitulo">
      <p className="sua-vida-fianceira">
        Sua vida fianceira <br />
        em um só lugar.
      </p>
    </div>
  );
}

/* 
  imagem dos cartões
*/

export const CartoesJuntos = () => {
	return (
		<div className="cartoes">
			<img src={Cartoes} alt="Cartões" className="cartoes" />
		</div>
	)
}

/* 
  texto footer
*/

export const TextoFinal = () => {
  return (
    <div className="textoFinal">
      <p className="sua-vida-fianceira">
        Sua vida fianceira <br />
        em um só lugar.
      </p>
    </div>
  );
}

export const BoxCadastro = () => {
  return (
    <div className="box">
      <div className="retangulo" />
	<img src={LogoBranco} alt="Logo_Branco" className="logo-branco" />
    <button>Entrar como convidado</button>
	<p className="sua-vida-fianceira">
        Sua organização financeira <br />
		nunca ficou tão facil
      </p>
	</div>
	
  );
}

