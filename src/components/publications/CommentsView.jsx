import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentsDescription } from "./CommentsDescriptions";
import { useCommentsDetails } from "../../shared/hooks";
import { LoadingSpinner } from '../LoadingSpinner'

export const CommentsView = ({getComments}) => {
    const { isFetching, getCommentsDetails, commentsDetails } = useCommentsDetails();

    const { id } = useParams()

    useEffect(() => {
        getCommentsDetails(id)
    }, [id])

    if(isFetching){
        return <LoadingSpinner/>
    }

    const filteredComments = commentsDetails.filter(comment => comment.publicationsId === id);

    return(
        <div className="channel-container">
            {filteredComments.map((comments) => (
                <CommentsDescription
                    title={comments.title}
                    key={comments.uid}
                    comments={comments.comments}
                    author={comments.author}
                />
            ))}
            <button className="channel-follow-button">
                Agregar Comentario
            </button>
        </div>
    )
}