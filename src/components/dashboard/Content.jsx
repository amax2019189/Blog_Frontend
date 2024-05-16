import { Route, Routes } from "react-router-dom";
import { Publications } from "../publications/Publications";
import { CommentsView } from "../publications/CommentsView";

export const Content = ({publications, getComments}) => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="publications" element={<Publications publications={publications}/>}/>
                <Route path="publications/:id" element={<CommentsView getComments={getComments}/>}/>
            </Routes>
        </div>
    )
}