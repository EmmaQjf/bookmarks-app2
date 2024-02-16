export default function Bookmark(
    {bookmark,
    deleteBookmark}
) {
    return (
        <div>
        <a href = {bookmark.url}>{bookmark.title}</a>
        <button onClick = {() => deleteBookmark(bookmark._id)}> delete </button>
        </div>
    )
}


// export default function Bookmark() {
//     return (
//        <h1>Individual bookmark</h1>
//     )
// }