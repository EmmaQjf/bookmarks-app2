import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'


//pages 

import Home from './pages/Home/Home'
import UpdatePage from './pages/UpdatePage/UpdatePage'

//components
import Nav from './components/Nav/Nav'
import Bookmark from './components/Bookmark/Bookmark'
import BookmarkList from './components/BookmarkList/BookmarkList'


export default function App() {
    return (
                <div className={styles.banner}>  
                <Nav/>
                <Routes>
                    <Route path = '/'  element = {<Home/>}/>

                    <Route path = '/updatepage/:id'  element = {<UpdatePage/>}/>
                </Routes>
                </div>
            )
        }


// export default function App() {
    
//     const [bookmarks, setBookmarks] = useState([])
//     const [newBookmark, setNewBookmark] = useState({
//         title: '',
//         url: ''
//     })

//     async function createBookmark () {
//         try {
//             const response = await fetch('/api/bookmarks', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(newBookmark)
//             })
//             const createdBookmark = await response.json()
//            // update the newBookmark object
//            //setNewBookmark(newBookmark)
           
//            //update the bookmarks array, add the newly created bookmark into the array of bookmarks so later it can be mapped and shown
//            const bookmarksCopy = [createdBookmark, ...bookmarks]
//            setBookmarks(bookmarksCopy)

//            // create a new empty bookmark 
//            setNewBookmark({
//             title: '',
//             url: ''
//            })
//         } catch (error) {
//             console.error(error)
//         }
//     }
   
//     async function deleteBookmark(id) {
//         // *********review the line of code below******
        
//         try {
//             const index = bookmarks.findIndex((item) => item._id === id)
//             const bookmarksCopy = [...bookmarks]
//             const response = await fetch(`/api/bookmarks/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//              await response.json()
            
//             bookmarksCopy.splice(index, 1)
//             setBookmarks(bookmarksCopy)
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     async function getBookmarks() {
//         try {
//             const response = await fetch('/api/bookmarks')
//             const foundBookmarks = await response.json()
//             setBookmarks(foundBookmarks)
            
//         } catch (error) {
//             console.error(error)
//         }
//     }
    

//     useEffect(() => {
//         getBookmarks()
//     }, [])

//     return (
//         <>

//         <Nav/>
//         <Routes>
//             <Route path = '/'  element = {Home}/>
//             <Route path = '/updateform'  element = {UpdateForm}/>
//         </Routes>
//         <BookmarkList 
//         bookmarks = {bookmarks}
//         setBookmarks = {setBookmarks}
//         newBookmark = {newBookmark}
//         setNewBookmark = {setNewBookmark}
//         createBookmark = {createBookmark}
//         deleteBookmark = {deleteBookmark}/>
        
//         </>
//     )
// }