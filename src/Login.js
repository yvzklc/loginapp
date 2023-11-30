import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faApple } from '@fortawesome/free-brands-svg-icons'
export const Login = () => {
  return (
    <div>
    <div className="container">
    <input type="Email" placeholder='Email'></input>
    <input type="text" placeholder='Password'></input>
    <button>Log in</button>
    <span >or</span>
    <footer>
    <FontAwesomeIcon className='icons' icon={faGoogle} />
    <FontAwesomeIcon className='icons' icon={faApple} />
    </footer>
    </div>
    </div>
  )
}
