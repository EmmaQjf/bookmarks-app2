import BookmarkList from '../../components/BookmarkList/BookmarkList'
import { useState, useEffect } from 'react'



export default function Home(
    {token,
    user,
    setToken,
    setUser}
) {

    const [bookmarks, setBookmarks] = useState([])
        const [newBookmark, setNewBookmark] = useState({
            title: '',
            url: ''
        })
    
        async function createBookmark () {
            if(!token){
                return
            }
            try {
                const response = await fetch('/api/bookmarks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(newBookmark)
                })
                const createdBookmark = await response.json()
                //return createdBookmark 
               // update the newBookmark object
               //setNewBookmark(newBookmark)
               
               //update the bookmarks array, add the newly created bookmark into the array of bookmarks so later it can be mapped and shown
               const bookmarksCopy = [createdBookmark, ...bookmarks]
               setBookmarks(bookmarksCopy)
    
               // create a new empty bookmark 
               setNewBookmark({
                title: '',
                url: ''
               })
               return createdBookmark
            } catch (error) {
                console.error(error)
            }
        }
       
        async function deleteBookmark(id,token) {
            // *********review the line of code below******
            
            try {
                const index = bookmarks.findIndex((item) => item._id === id)
                const bookmarksCopy = [...bookmarks]
                const response = await fetch(`/api/bookmarks/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                 await response.json()
                
                bookmarksCopy.splice(index, 1)
                setBookmarks(bookmarksCopy)
            } catch (error) {
                console.error(error)
            }
        }
        async function getBookmarks() {
            try {
                const response = await fetch('/api/bookmarks')
                const foundBookmarks = await response.json()
                setBookmarks(foundBookmarks)
                
            } catch (error) {
                console.error(error)
            }
        }
        
    
        useEffect(() => {
            getBookmarks()
        }, [])
        useEffect(()=> {
            if(localStorage.token && !token){
                setToken(localStorage.getItem('token'))
            } 
            if(localStorage.token && localStorage.user && !user){
                setUser(JSON.parse(localStorage.getItem('user')))
            }
        },[])
        //send the token back to user when reloaded the page
      
       
    
        return (
            
            <>
            <BookmarkList 
            bookmarks = {bookmarks}
            newBookmark = {newBookmark}
            setNewBookmark = {setNewBookmark}
            createBookmark = {createBookmark}
            deleteBookmark = {deleteBookmark}
            token ={token}
            user={user}
            />
            </>
        )
    }