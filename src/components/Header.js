import Logo from '../assets/logo.png'
import { Link , NavLink} from 'react-router-dom'
import { signInWithPopup , signOut} from 'firebase/auth';
import { auth, provider } from '../firebase/config';
import { useState } from 'react';

export const Header = () => {
  const [isAuth , setIsAuth ] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
 
  function handleLogin() {
    signInWithPopup(auth , provider).then((results)=>{
      console.log(results);
      setIsAuth(true)
      localStorage.setItem("isAuth",true)
    }).catch(error=>{
      console.log(error)
    })
  }

  function handleLogout(){
    signOut(auth).then(()=>{
      console.log("User logged out")
      setIsAuth(false)
      localStorage.setItem("isAuth",false)


    })

  }


  return (
    <header>
        <Link className="logo">
        <img src={Logo} alt="Write Blog" />
        <span>WriteBlog</span>
        </Link>
        <nav className='nav'>
            <NavLink to='/' className='link' end>Home</NavLink>
            { isAuth ? <>
                <NavLink to='create' className='link'>Create</NavLink>
                <button onClick={handleLogout} className='auth' ><i className='bi bi-box-arrow-left'></i> Logout</button>
            </> :<button onClick={handleLogin} className='auth'><i className='bi bi-google'></i> Login</button> }

            
        </nav>
    </header>
  )
}
