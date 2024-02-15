import { useState, useEffect } from 'react'

import styles from './App.module.scss'
import Nav from './components/Nav/Nav'
import Bookmark from './components/Bookmark/Bookmark'
import BookmarkList from './components/BookmarkList/BookmarkList'
export default function App() {
    
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
            console.log(error)
        }
    }
   
    async function getBookmarks() {
        try {
            const response = await fetch('/api/bookmarks')
            const foundBookmarks = await response.json()
            setBookmarks(foundBookmarks)
            
        } catch (error) {
            console.log(error)
        }
    }
    

    useEffect(() => {
        getBookmarks()
    }, [])

    return (
        <>
        <Nav/>
        <BookmarkList 
        bookmarks = {bookmarks}
        setBookmarks = {setBookmarks}
        newBookmark = {newBookmark}
        setNewBookmark = {setNewBookmark}
        createBookmark = {createBookmark}/>
        <Bookmark/>
        
        </>
    )
}