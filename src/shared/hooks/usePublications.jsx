import { useState } from "react";
import toast from "react-hot-toast";
import { getPublications as getPublicationsRequest } from "../../services/api";

export const usePublications = () => {
    const [ publications, setPublications ] = useState([])

    const getPublications = async (isLogged = false) => {
        const publicationsData = await getPublicationsRequest()
        if(publicationsData.error){
            
            return toast.error(
                publicationsData.e?.response?.data || 'Ocurrio un error con las publicaciones'
            )
        }

        if(isLogged){
            return setPublications({
                publications: publicationsData.data
            })
        }

        setPublications({
            publications: publicationsData.data
        })
        
    }

    return{
        isFetching: !Boolean(publications),
        getPublications,
        allPublications: publications?.publications
    }
}