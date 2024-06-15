import {isAuth, logout} from '../api/Service'

const Header = () => {
  if(!isAuth) return (
    <header className='header'>
        <div className='container'>
            <h2><a href="/">НАРУШЕНИЯМ.net</a></h2>
            
            <div className="btn-container">
                <button className='btn'>
                    <a href="/reg">Registration</a>
                    
                </button>

                <button className='btn'>
                    <a href="/login">Login</a>
                    
                </button>
            </div>
        </div>
    </header>
  )
  else
    return (
        <header className='header'>
            <div className='container'>
                <h2><a href="/">НАРУШЕНИЯМ.net</a></h2>
                
                <div className="btn-container">
                   <button onClick={logout} className="btn">Выход</button>
                </div>
            </div>
        </header>
    )
}

export default Header