import "../../pages/dashboard/dashboardPage.css"

export const PublicationsCard = ({
    title,
    id,
    content,
    author,
    navigateToPublicationsHandler
}) => {
    const handleNavigate = () => {
        navigateToPublicationsHandler(id)
    }

    return(
        <div className="channels-card" onClick={handleNavigate}>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{content}</span>
            <span className="channels-card-title">{author}</span>
        </div>
    )
}