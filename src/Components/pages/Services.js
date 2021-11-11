import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../pages/Services.css';
import ContactButton from  '../ContactButton';
import FadeInAnimation from "../FadeInAnimation";
import WhatsappButton from '../WhatsappButton';

function Services() {
  return (
    <div>
        <WhatsappButton />
        <FadeInAnimation direction="down">
            <ContactButton />
        </FadeInAnimation>
        <FadeInAnimation direction="up">
            <h1 className='services' style={{ 
      backgroundImage: `url("/images/img-2.jpg")`}}>SERVICIOS</h1>
        </FadeInAnimation>
        <div className="services-body">
            <FadeInAnimation direction="up" delay={2}>
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Reposici&oacute;n de vidrios para su vehiculo</h1>
                    </div>
                    <img src="/images/servicio1.jpg" class="card-img-bottom" alt="servicio"/>
                </div>
            </FadeInAnimation>
                <br />
            <FadeInAnimation direction="up" delay={3}>
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Impermeabilizaci&oacute;n de panor&aacute;mico delantero o trasero por filtraci&oacute;n de agua.</h1>
                    </div>
                    <img src="/images/servicio2.jpg" class="card-img-bottom" alt="servicio"/>
                </div>
            </FadeInAnimation>
                <br />
            <FadeInAnimation direction="up" delay={4}>
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Pelicula de seguridad.</h1>
                    </div>
                    <img src="/images/servicio3.jpg" class="card-img-bottom" alt="servicio"/>
                </div>
            </FadeInAnimation>
                <br />
            <FadeInAnimation direction="up" delay={5}>
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Polarizado.</h1>
                    </div>
                    <img src="/images/servicio4.jpg" class="card-img-bottom" alt="servicio"/>
                </div>
            </FadeInAnimation>
                <br />
            <FadeInAnimation direction="up" delay={6}>
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Servicio a domicilio.</h1>
                    </div>
                    <img src="/images/servicio5.jpg" class="card-img-bottom" alt="servicio"/>
                </div>
            </FadeInAnimation>
            <br />
        </div>
        <Footer />
    </div>
  );
}

export default Services;