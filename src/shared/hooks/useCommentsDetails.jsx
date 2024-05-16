import { useState } from "react";
import {toast} from "react-hot-toast";
import { getCommentsDetails as getCommentsDetailsRequest } from '../../services'

export const useCommentsDetails = () => {
    const [commentsDetails, setCommentsDetails] = useState()

    const getCommentsDetails = async (id) => {
        const responseData = await getCommentsDetailsRequest(id)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'Error al cargar la informaciion del canal'
            )
        }

        setCommentsDetails(responseData.data)
    }

    return{
        commentsDetails,
        isFetching: !commentsDetails,
        getCommentsDetails
    }
}