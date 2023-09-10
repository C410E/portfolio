
import { Link } from "react-router-dom"; 

import "./Header.css";


const Header = () => {
    return (
        <div className="container">
            <div className="content">
                 <div className="contentTitle"> 
                    <div className="title">
                        Caio Evandro 
                    </div>
                    <span>
                        portifolio profissional
                    </span>
                 </div>
                 <div className="links">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/projetos">Projetos</Link>
                    <Link className="link" to="/contatos">Contatos</Link>
                 </div>
            </div>
        </div>
    )
}

export default Header