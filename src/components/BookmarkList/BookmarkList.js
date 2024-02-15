export default function BookmarkList(
    {
        bookmarks, 
        setBookmarks ,
        newBookmark, 
        setNewBookmark,
        createBookmark,
    }
) {
    return (
        <>
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
        
            {bookmarks.map((bookmark) => {
                const {title, url} = bookmark;
                return (
                    <h3><a href = {url}>{title}</a></h3>
                );
            })}

        
        </>

    )
}