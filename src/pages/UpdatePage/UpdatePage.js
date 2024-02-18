import UpdateForm from '../../components/UpdateForm/UpdateForm'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import Bookmark from '../../components/Bookmark/Bookmark'

export default function UpdatePage (props) {
    const [title , setTitle] = useState('')
    const [url , setUrl] = useState('')
    const [bookmarks, setBookmarks] = useState([])
  
    const params = useParams();

 // when the update page loads, show all the landmarks.
    async function getBookmarks() {
        try {
            const response = await fetch('/api/bookmarks')
            const foundBookmarks = await response.json()
            setBookmarks(foundBookmarks)
            
        } catch (error) {
            console.error(error)
        }
    }
        console.warn(bookmarks, title, url)
    
         useEffect(() => {
        getBookmarks()
        }, [])
    
   // when the page loads, run the function to refill the form with the data
   useEffect(() => {
      getBookmarkDetails()
   },[])

   // refill the from with the data
   // get to the backend to retrieve the data
   const getBookmarkDetails = async() => {
      let result = await fetch(`/api/bookmarks/${params.id}`)
      result = await result.json()
      setTitle(result.title)
      setUrl(result.url)  
   }



    async function updateBookmark ( ) {
        console.warn(title, url)
        try {
            //const index = bookmarks.findIndex((item) => item._id === params.id)
            const response = await fetch(`/api/bookmarks/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title,url})
            })
            const updatedBookmark = await response.json()
            console.warn(updatedBookmark)
                
            const bookmarksCopy = [...bookmarks]
            bookmarksCopy[index] = {...bookmarksCopy[index], ...updatedBookmark}
           setBookmarks(bookmarksCopy)
           console.warn(bookmarks)
            // if (updatedBookmark) {
            //     Navigate('/')
            // }
    
        } catch (error) {
        }
    }


    return (
        <>
        <h2>Update</h2>
        <input 
        type = 'text'
        value = {title}
        onChange = {
            (e) => {
                setTitle(e.target.value)
            }
        }/>

       <input 
        type = 'text'
        value = {url}
        onChange = {
            (e) => {
                setUrl(e.target.value)
            }
        }/>

        <button 
        onClick = {updateBookmark}>Update</button>
        <button><Link to = {'/'}>HOME</Link></button>
        {/* <UpdateForm
        title = {title}
        setTitle = {setTitle}
        url = {url}
        setUrl = {setUrl}
        updateBookmark = {updateBookmark}/> */}
        </>
    )

}