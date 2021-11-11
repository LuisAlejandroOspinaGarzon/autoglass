import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../pages/Contact.css';
import FadeInAnimation from "../FadeInAnimation";
import WhatsappButton from '../WhatsappButton';
import ContactButton from '../ContactButton';
import MapContainer from '../MapContainer';

function Contact() {
  return (
    <div>
        <WhatsappButton />
        <FadeInAnimation direction="down">
            <h1 className='contact' style={{ 
      backgroundImage: `url("/images/img-8.jpg")`}}>CONTACTANOS</h1>
        </FadeInAnimation>
        <FadeInAnimation direction="up" delay={0}>
            <div className="form">
                <div className="item">
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Nombre Completo</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Tel&eacute;fono o m&oacute;vil</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Ciudad</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Direcci&oacute;n de correo electr&oacute;nico</label>
                </div>
                 <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                        <option selected>Informaci&oacute;n</option>
                        <option value="1">Cotizaci&oacute;n</option>
                        <option value="2">Pedido</option>
                        </select>
                        <label for="floatingSelectGrid">Asunto</label>
                    </div>
                </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                        <label for="floatingTextarea2">Mensaje</label>
                    </div>
                    <br />
                <button type="button" class="btn btn-outline-primary">Enviar</button>
                </div>
                <br />
                <div className="map">
                    <MapContainer />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </FadeInAnimation>
        <ContactButton />
        <Footer />
    </div>
  );
}

export default Contact;