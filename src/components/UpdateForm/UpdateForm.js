import { Link } from "react-router-dom";
import styles from './UpdateForm.module.scss'

export default function Updateform(
    {
        setupdatedBookmark,
        updatedBookmark,
        updateBookmark,
        bookmarks,
        setBookmarks
    }
   
) {
    return (
    <div className = {styles.updateform}>
        <input className = {styles.input}
        type = 'text'
        value = {updatedBookmark.title}
        onChange = {
            (e) => {
                setupdatedBookmark({...updatedBookmark, title: e.target.value})
            }
        }/>

       <input className = {styles.input}
        type = 'text'
        value = {updatedBookmark.url}
        onChange = {
            (e) => {
                setupdatedBookmark({...updatedBookmark, url: e.target.value})
            }
        }/>

        <button  className = {styles.button}
        onClick = {updateBookmark}>Update</button>
        <button  className = {styles.button}><Link to = {'/'}>HOME</Link></button>
        
        </div>
             
    )


}

     