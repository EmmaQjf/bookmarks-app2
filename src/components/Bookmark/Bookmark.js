import { Link } from "react-router-dom";
import styles from "./Bookmark.module.scss"

export default function Bookmark(
    {
    bookmark,
    deleteBookmark}
) {
    return (
        <div className={styles.bookmark}>
        <a href = {bookmark.url}>{bookmark.title}</a>
        <button className={styles.button} onClick = {() => deleteBookmark(bookmark._id, localStorage.token)}> X </button>
        <button className={styles.button}><Link to = {`/updatepage/${bookmark._id}` }> update</Link></button>
        </div>
    )
}

// how to pass the data of bookmark from one route to another route?