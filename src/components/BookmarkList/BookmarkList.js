import Bookmark from '../Bookmark/Bookmark'  

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
        <div>
        <h2>Add a new bookmark</h2>
        <input 
        type = 'text' 
        value ={newBookmark.title}
        onChange = {(e) => {
            setNewBookmark({...newBookmark, title: e.target.value})
               // setNewBookmark(e.target.value)
            }}
        />
        <input 
        type = 'text' 
        value = {newBookmark.url}
        onChange = {(e) => {
            setNewBookmark({...newBookmark, url: e.target.value})
                //setNewBookmark(e.target.value)
            }}
        />
        <button
        onClick = {createBookmark} >Add!
        </button>

        
        {/* {bookmarks.map((bookmark) => {
                const {title, url} = bookmark;
                return (
                    <div key = {bookmark._id}>
                        <a href = {url}>{title}</a>
                        <button onClick = {() => deleteBookmark(bookmark._id)}> delete </button>
                     </div>
                );
         })}  */}


          {
             bookmarks.map(bookmark => (
                <Bookmark
                key={bookmark._id}
                bookmark={bookmark}
                deleteBookmark={deleteBookmark}
                />
            ))
         } 
        </div>
    )
}