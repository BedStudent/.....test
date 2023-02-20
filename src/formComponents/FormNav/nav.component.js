
import { Link } from "react-router-dom";

const FormNav=()=>{
  return(
    <nav className='navbar navbar-expand navbar-light mb-5'>
    <div className='container'>
      <Link className='navbar-brand' to={'/'}> Home </Link>
      <div className='collapse navbar-collapse justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to={'/login'}>Login</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={'/register'}> Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

)
}

export default FormNav