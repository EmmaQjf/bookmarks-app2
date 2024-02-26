// export default function BookmarkList(){
//     return <h1>This is the bookmark list</h1>
// }

import {useEffect} from 'react'
import Bookmark from '../Bookmark/Bookmark'  
import styles from './BookmarkList.module.scss'

export default function BookmarkList(
    {
        bookmarks, 
        newBookmark, 
        setNewBookmark,
        createBookmark,
        deleteBookmark,
        token
    }

) {
    
    return (
        <>
        
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
               }}
           />
           <input className={styles.input}
           placeholder = 'https://'
           type = 'text' 
           value = {newBookmark.url}
           onChange = {(e) => {
               setNewBookmark({...newBookmark, url: e.target.value})
               }}
           />
           <button
           className={styles.button}
           onClick = {(e)=>{
            e.preventDefault()
            createBookmark(newBookmark,token)
           }} >Add!
           </button>
          </div>
          

          <div className={styles.list}>
          {bookmarks.map(bookmark => (
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
         </div >
       {/* {bookmarks.map((bookmark) => {
               const {title, url} = bookmark;
               return (
                   <div key = {bookmark._id}>
                       <a href = {url}>{title}</a>
                       <button onClick = {() => deleteBookmark(bookmark._id,token)}> delete </button>
                    </div>
               );
        })}  */}
        </>
    )
}
        
 
