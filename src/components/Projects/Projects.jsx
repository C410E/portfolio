import { useState, useEffect } from "react";
import "./Projects.css";
//colocar a api dogithub aqui
const Projects = () => {
    const [itemsApi, setItemsApi] = useState([]);

    useEffect(() => {
        let abortController = new AbortController(); 

        const getGitHubApi = () => {
            fetch('https://api.github.com/users/C410E/repos')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                const data = await res.json()
                setItemsApi(data)
            }).catch(e => console.log(e))
        }
        getGitHubApi()

        return () => abortController.abort()
    }, [])
    return (
        <div className="containe">
            <div className="conten">
                <ul className="ul">
                    {itemsApi.map((item) => 
                    <li className="li" key={item.id}>
                        <strong className="title">{item.name.toUpperCase()}</strong>
                            <p className="url">
                                <a className="a" 
                                    href={item.html_url}
                                    >
                                    {item.html_url}
                                    </a>
                            </p>
                        <span className="data">
                            Data Criação:  { Intl.DateTimeFormat('pt-BR')
                            .format(new Date(item.created_at))}
                        </span>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Projects