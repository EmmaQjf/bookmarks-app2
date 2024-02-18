import Bookmark from '../Bookmark/Bookmark'  
import styles from './BookmarkList.module.scss'

export default function BookmarkList(
    {
        bookmarks, 
        setBookmarks,
        newBookmark, 
        setNewBookmark,
        createBookmark,
        deleteBookmark
    }
) {
    return (
        <div className = {styles.bookmarklist}>
        <h2>Add a new bookmark</h2>
        <div className = {styles.centeredSearchbox}>
        <input
        className={styles.input}
        placeholder = 'website'
        type = 'text' 
        value ={newBookmark.title}
        onChange = {(e) => {
            setNewBookmark({...newBookmark, title: e.target.value})
               // setNewBookmark(e.target.value)
            }}
        />
        <input className={styles.input}
        placeholder = 'https://'
        type = 'text' 
        value = {newBookmark.url}
        onChange = {(e) => {
            setNewBookmark({...newBookmark, url: e.target.value})
                //setNewBookmark(e.target.value)
            }}
        />
        <button
          className={styles.button}
        onClick = {createBookmark} >Add!
        </button>
        </div>
        
        {/* {bookmarks.map((bookmark) => {
                const {title, url} = bookmark;
                return (
                    <div key = {bookmark._id}>
                        <a href = {url}>{title}</a>
                        <button onClick = {() => deleteBookmark(bookmark._id)}> delete </button>
                     </div>
                );
         })}  */}

          <div className={styles.list}>
       
          {
             bookmarks.map(bookmark => (
                <li key={bookmark._id}>
                <Bookmark
                bookmarks = {bookmarks}
             
                bookmark={bookmark}
                deleteBookmark={deleteBookmark}
                />
                </li>
            ))
         } 
         </div>  
        </div>
    )
}