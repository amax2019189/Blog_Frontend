import { useNavigate } from "react-router-dom";
import { PublicationsCard } from "./PublicationsCard";

export const Publications = ({publications}) => {
    const navigate = useNavigate()

    const handleNavigateToPublications = (id) =>{
        navigate(`/publications/${id}`)
    }

    return(
        <div className="channels-container">
            {publications.map((c) => (
               <PublicationsCard
                    key={c.uid}
                    id={c.uid}
                    title={c.title}
                    content={c.content}
                    author={c.author}
                    navigateToPublicationsHandler={handleNavigateToPublications}
               /> 
            ))}
            <button className="boton">
                Agregar Publicación
            </button>
        </div>
    )
}