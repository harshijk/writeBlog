import { addDoc , collection } from "firebase/firestore"
import { db , auth } from "../firebase/config"
import { useNavigate } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"

export const CreatePost = () => {
  const navigate = useNavigate()
  useTitle("Create Post")
  async function handleCreatePost(event){
    event.preventDefault();
    const colRef = collection(db,"Posts");
    console.log(auth.currentUser)
    const document = {
      title : event.target.title.value,
      description : event.target.description.value,
      author : {
        id : auth.currentUser.uid,
        name : auth.currentUser.displayName
      }

    }

    addDoc(colRef , document).then(()=>{
      console.log("done")
      navigate('/')

    })

  }

  return (
    <main className="create">
        <div className="heading">
            <h1>Add New Post</h1>
        </div>
        <form className="createPost" onSubmit={handleCreatePost}>
            <input type="text" className='title' name='title' placeholder="title" autoComplete="off" maxLength='50' required />
            <textarea type="text" name="description" className="description" placeholder="description" maxLength="600" required/>
            <button type="submit">Add Post</button>
        </form>

    </main>
  )
}
