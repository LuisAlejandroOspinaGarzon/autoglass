import React from 'react';
import './ContactButton.css';
import {Link} from 'react-router-dom';

function ContactButton(){
	return(
		<div className="main-button">
				<div className="content-button">
                    <div className="content-advice" id="heading">
				        <h1 className="content-heading">
                            <br />
                            VIDRIOS PARA AUTOS
                        </h1>
                    </div>
                    <h6 className="content-info" id="info">
                        <br />
                        Autoglass Automotive SAS.<br />
                        Carrera 57 No.93A-47 Barrio Rionegro Bogot&aacute;.<br />
                        CEL. 3102616184 - 3105539523.<br />
                        E-mail:
                        <Link to='/contact'>
                            autoglassautomotivesas@gmail.com<br />
                        </Link>
                    </h6>
                    <div className="content-info" id="icons">
                    <br />
                        <Link to='/contact'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/contact'>
                             <img className="instagram" src="/images/instagram.png" alt="logo"/>
                        </Link>
                    </div>
				</div>        
                
		</div>

	);
}

export default ContactButton;