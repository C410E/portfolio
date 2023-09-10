import imagem from "../image/foto.jpeg";
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="containe">
        <div className="tex">
          <h1 className="titulo">
            Olá, sou Caio Evandro Bispo Nepomuceco.
          </h1>
          <p className="apresentacao">
          Tenho experiência em desenvolvimento tanto front-end quanto 
          back-end, com conhecimento em tecnologias como React, Node.js, 
          TypeScript, Next.js e Express. Minha dedicação à programação e ao 
          aprimoramento contínuo me permite enfrentar desafios técnicos e 
          encontrar soluções eficazes. Estou comprometido com a entrega de 
          resultados de qualidade e estou sempre buscando aprender e me adaptar 
          às mudanças na indústria de tecnologia.
          </p>
          <Link 
          className="projetos"
          to="/projetos"
          >
            Projetos ➔
          </Link>
        </div>
        <img className="img" src={imagem} alt="" />
      </div>
      

    )
}

export default Home