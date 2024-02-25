import { useEffect, useState , useRef } from 'react';
import { PostCard} from '../components/PostCard';
import { db } from '../firebase/config';
import { getDocs , collection} from "firebase/firestore"
import { useTitle } from '../hooks/useTitle';
import { SkeletonCard } from '../components/SkeletonCard';

export const HomePage = () => {
 const [posts,setPosts] = useState(new Array(2).fill(false));
 const [toggle , setToggle ] = useState(false)
 const colRef = useRef(collection(db,"Posts"))
 useTitle("Home Page")

 useEffect(()=>{
  async function getPosts(){
    const data = await getDocs(colRef.current);
    setPosts(data.docs.map((document)=>({...document.data(),id : document.id})))
  }
  getPosts()
  console.log("---")
 },[toggle,colRef])

  return (
    <main>
        {posts.map(post =>(
              post ? <PostCard key={post.id} p={post} toggle = {toggle} setToggle={setToggle}/> : <SkeletonCard/>
        ))}
      
    </main>
  )
}


