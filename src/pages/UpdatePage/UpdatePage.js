import UpdateForm from '../../components/UpdateForm/UpdateForm'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';




export default function UpdatePage () {
        const [updatedBookmark , setupdatedBookmark] = useState(
            {title: '',
             url: ""
            })
        const [bookmarks, setBookmarks] = useState([])
      
        const params = useParams();
    
     // when the update page loads, get all the bookmarks.
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
        
       // when the page loads, run the function to refill the form with the data
       useEffect(() => {
          getBookmarkDetails()
       },[])
    
       // refill the from with the data
       // get to the backend to retrieve the data
       //********try catch
       const getBookmarkDetails = async() => {
          let result = await fetch(`/api/bookmarks/${params.id}`)
          result = await result.json()
          setupdatedBookmark(result)
       }
    
    
    
        async function updateBookmark ( ) {
            try {
                //const index = bookmarks.findIndex((item) => item._id === params.id)
                const response = await fetch(`/api/bookmarks/${params.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedBookmark)
                })
                response = await response.json()
                console.warn(response)
                    
                const bookmarksCopy = [...bookmarks]
                bookmarksCopy[index] = {...bookmarksCopy[index], ...response}
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
              <h2>Update Form</h2>
              <UpdateForm
              bookmarks= {bookmarks}
              setBookmarks = {setBookmarks}
              updatedBookmark = {updatedBookmark}
              setupdatedBookmark = {setupdatedBookmark}
              updateBookmark = {updateBookmark}/>
            </>
            
        )
    
    }




/****** ONE WAY TO UPDATE THE BOOKMARK */

    /*

export default function UpdatePage (props) {
    const [title , setTitle] = useState('')
    const [url , setUrl] = useState('')
    const [bookmarks, setBookmarks] = useState([])
  
    const params = useParams();

 // when the update page loads, get all the bookmarks.
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
        <div className = {styles.updatepage}>
        <h2>Update</h2>
        <input className = {styles.input}
        type = 'text'
        value = {title}
        onChange = {
            (e) => {
                setTitle(e.target.value)
            }
        }/>

       <input className = {styles.input}
        type = 'text'
        value = {url}
        onChange = {
            (e) => {
                setUrl(e.target.value)
            }
        }/>

        <button  className = {styles.button}
        onClick = {updateBookmark}>Update</button>
        <button  className = {styles.button}><Link to = {'/'}>HOME</Link></button>
        {/* <UpdateForm
        title = {title}
        setTitle = {setTitle}
        url = {url}
        setUrl = {setUrl}
        updateBookmark = {updateBookmark}/> }
        </div>
    )
}
*/




/****** SECOND WAY TO UPDATE THE BOOKMARK */

/*

// export default function UpdatePage (props) {
//         const [updatedBookmark , setupdatedBookmark] = useState(
//             {title: '',
//              url: ""
//             }
//             )
//         const [bookmarks, setBookmarks] = useState([])
      
//         const params = useParams();
    
//      // when the update page loads, get all the bookmarks.
//         async function getBookmarks() {
//             try {
//                 const response = await fetch('/api/bookmarks')
//                 const foundBookmarks = await response.json()
//                 setBookmarks(foundBookmarks)
                
//             } catch (error) {
//                 console.error(error)
//             }
//         }
        
//              useEffect(() => {
//             getBookmarks()
//             }, [])
        
//        // when the page loads, run the function to refill the form with the data
//        useEffect(() => {
//           getBookmarkDetails()
//        },[])
    
//        // refill the from with the data
//        // get to the backend to retrieve the data
//        const getBookmarkDetails = async() => {
//           let result = await fetch(`/api/bookmarks/${params.id}`)
//           result = await result.json()
//           setupdatedBookmark(result)
//        }
    
    
    
//         async function updateBookmark ( ) {
//             try {
//                 //const index = bookmarks.findIndex((item) => item._id === params.id)
//                 const response = await fetch(`/api/bookmarks/${params.id}`, {
//                     method: 'PUT',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(updatedBookmark)
//                 })
//                 response = await response.json()
//                 console.warn(response)
                    
//                 const bookmarksCopy = [...bookmarks]
//                 bookmarksCopy[index] = {...bookmarksCopy[index], ...response}
//                setBookmarks(bookmarksCopy)
//                console.warn(bookmarks)
//                 // if (updatedBookmark) {
//                 //     Navigate('/')
//                 // }
        
//             } catch (error) {
//             }
//         }
    
    
//         return (
//             <div className = {styles.updatepage}>
//             <h2>Update</h2>
//             <input className = {styles.input}
//             type = 'text'
//             value = {updatedBookmark.title}
//             onChange = {
//                 (e) => {
//                     setupdatedBookmark({...updatedBookmark, title: e.target.value})
//                 }
//             }/>
    
//            <input className = {styles.input}
//             type = 'text'
//             value = {updatedBookmark.url}
//             onChange = {
//                 (e) => {
//                     setupdatedBookmark({...updatedBookmark, url: e.target.value})
//                 }
//             }/>
    
//             <button  className = {styles.button}
//             onClick = {updateBookmark}>Update</button>
//             <button  className = {styles.button}><Link to = {'/'}>HOME</Link></button>
//             {/* <UpdateForm
//             title = {title}
//             setTitle = {setTitle}
//             url = {url}
//             setUrl = {setUrl}
//             updateBookmark = {updateBookmark}/> }
//             </div>
//         )
    
//     }

*/