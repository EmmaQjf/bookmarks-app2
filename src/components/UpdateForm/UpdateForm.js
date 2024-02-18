import { Link } from "react-router-dom";

export default function Updateform(
    title,
    setTitle,
    url,
    setUrl,
    updateBookmark
) {
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
        </>
    )

}

     