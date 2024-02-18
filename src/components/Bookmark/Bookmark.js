import { Link } from "react-router-dom";

export default function Bookmark(
    {bookmarks,
    bookmark,
    deleteBookmark}
) {
    return (
        <div>
        <a href = {bookmark.url}>{bookmark.title}</a>
        <button onClick = {() => deleteBookmark(bookmark._id)}> delete </button>
        <button><Link to = {`/updatepage/${bookmark._id}` }> update</Link></button>
        </div>
    )
}


// export default function Bookmark() {
//     return (
//        <h1>Individual bookmark</h1>
//     )
// }