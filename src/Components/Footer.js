import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Autoglass Bogot&aacute; Ltda. cuenta con la mejor infraestructura para la Distribuci&oacute;n 
            y Comercializaci&oacute;n de vidrios de seguridad automotrices, teniendo en su cat&aacute;logo vidrios 
            importados y nacionales de las m&aacute;s conocidas marcas (Audi, BMW, Mercedes, Volvo, International,
            Jeep, Kia, Renault, Chevrolet, Mazda, Hyunday, Ford, Nissan,Toyota, Mitsubishi, Daewoo, Iveco, etc.)
            y para toda la gama de veh&iacute;culos existentes (Particulares, Servicio P&uacute;blico, Transportadores, etc.).
        </p>
        <p className='footer-subscription-text'>
          Por su seguridad, f&iacute;jese bien: &ldquo;UN PARABRISAS QUE NO SEA LAMINADO PUEDE<br />COSTARLE LA VIDA&rdquo;.
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>

            <h2>Ac&eacute;rca de nosotros</h2>
            <Link to='/info'>Terminos de servicio</Link>
          </div>
          <div class='footer-link-items'>

            <h2>Cont&aacute;ctanos</h2>
            <Link to='/'>Cont&aacute;cto</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer