
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="" />
            
                <h1>Rick and Morty</h1>
                 </div>
        <Link to="/">
            <div className="botones">
                <button>Home</button>
            </div>
            </Link>
            <Link to="/alive">
                <div className="botones">
                    <button>Vivos</button>
                </div>
            </Link>
        
         <Link to="/dead">
          <div className="botones">
              <button>Muertos</button>
          </div>
          </Link>
        
        </div >
  )
}

export default Navbar