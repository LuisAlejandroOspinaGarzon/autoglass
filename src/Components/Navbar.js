import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    };
    
    useEffect(() => {
        showButton()    
    }, [])
    
    window.addEventListener('resize', showButton);
        
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <p>
                            <img className="logo" src="/images/logo.png" alt="logo"/>
                        </p>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Servicios
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/info' className='nav-links' onClick={closeMobileMenu}>
                                ¿Quienes Somos?
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contáctanos
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar