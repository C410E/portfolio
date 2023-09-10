import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope} from "react-icons/fa";
import "./contact.css";
import ItemContact from "../components/itemContact/itemContact";


const Contact = () => {
    return (
        <div className="container">
            <div className="content">
                <ItemContact 
                  iconFa={FaLinkedin}
                  linkContact="https://www.linkedin.com/in/caio-nepomuceno/"
                />
                {/*fazer o resto depois*/}
            </div>
        </div>
    )
}

export default Contact
