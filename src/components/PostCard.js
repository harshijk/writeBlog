import { db , auth } from "../firebase/config"
import {doc , deleteDoc } from "firebase/firestore"



export const PostCard = ({p , toggle , setToggle}) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth") || false)

  async function handleDelete(){
    const document = doc(db , "Posts" , p.id)

    deleteDoc(document);
    setToggle(!toggle)


  }

  return (
    <div className="card">
        <p className="title">{p.title}</p>
        <p className="description">{p.description}</p>
        <p className="control">
        <span className="author">{p.author.name}</span>
        { isAuth && (p.author.id === auth.currentUser.uid) && (<span onClick={handleDelete} className="delete"><i className="bi bi-trash3"></i></span>)}
        
        </p>
    </div>
  )
}
