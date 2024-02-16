import BookmarkList from '../../components/BookmarkList/BookmarkList'
import { useState, useEffect } from 'react'



export default function Home() {

    const [bookmarks, setBookmarks] = useState([])
        const [newBookmark, setNewBookmark] = useState({
            title: '',
            url: ''
        })
    
        async function createBookmark () {
            try {
                const response = await fetch('/api/bookmarks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newBookmark)
                })
                const createdBookmark = await response.json()
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
            } catch (error) {
                console.error(error)
            }
        }
       
        async function deleteBookmark(id) {
            // *********review the line of code below******
            
            try {
                const index = bookmarks.findIndex((item) => item._id === id)
                const bookmarksCopy = [...bookmarks]
                const response = await fetch(`/api/bookmarks/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
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
    
        return (
            <>
            <BookmarkList 
            bookmarks = {bookmarks}
            setBookmarks = {setBookmarks}
            newBookmark = {newBookmark}
            setNewBookmark = {setNewBookmark}
            createBookmark = {createBookmark}
            deleteBookmark = {deleteBookmark}/>
            </>
        )
    }