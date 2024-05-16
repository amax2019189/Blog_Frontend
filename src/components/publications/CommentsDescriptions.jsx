import { useUserDetails} from "../../shared/hooks";

export const CommentsDescription = ({
    title,
    comments,
    author
}) => {
    const { isLogged } = useUserDetails()

    return(
        <div className="channel-description-container">
            <span className="recuadro">{title}</span>
            <div className="channel-description-box">
                <span className="channel-description">{comments}</span>
                <span className="channel-description">{author}</span>
            </div>
        </div>
    )
}