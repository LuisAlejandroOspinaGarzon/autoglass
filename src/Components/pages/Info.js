import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../pages/Info.css';
import ContactButton from '../ContactButton';
import FadeInAnimation from "../FadeInAnimation";
import WhatsappButton from '../WhatsappButton';

function Info() {
  return (
    <div>
        <WhatsappButton />
        <FadeInAnimation direction="down">
            <ContactButton />
        </FadeInAnimation>
        <FadeInAnimation direction="up">
            <h1 className='info' style={{ 
      backgroundImage: `url("/images/img-1.jpg")`}}>&iquest;QUIENES SOMOS?</h1>
        </FadeInAnimation>

        <div className="info-body">
            <FadeInAnimation direction="right" delay={2}>
                <div className="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="../images/img-9.jpg" alt="servicio1" width="400px" height="300pxs" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title-principal">Nuestra Visi&oacute;n</h5>
                                <p class="card-text">Ofrecer a nuestros clientes productos y servicios de la mejor calidad, y con el mejor respaldo de nuestra organizaci&oacute;n: su gente, la cual ofrece lo mejor de s&iacute; en el desarrollo de nuestra actividad, comprometidos siempre por el bienestar y desarrollo de nuestro recurso humano.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInAnimation>
            <FadeInAnimation direction="left" delay={4}>
            <div className="card mb-3">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title-principal" className="right-aligned-card">Nuestra misi&oacute;n</h5>
                            <p class="card-text">Ser la principal empresa, Importadora, Distribuidora y Comercializadora de vidrios de seguridad para autos y camiones en Colombia y el &aacute;rea andina, basado en un excelente servicio a nuestros clientes con productos de la mejor calidad y recurso humano comprometido.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src="../images/img-9.jpg" alt="servicio1" width="400px" height="300pxs" />
                    </div>
                </div>
            </div>
            </FadeInAnimation>
            <FadeInAnimation direction="right" delay={6}>
            <div className="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../images/img-9.jpg" alt="servicio1" width="400px" height="300pxs" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title-principal">Nuestra Experiencia</h5>
                            <p class="card-text">Autoglass Bogot&aacute; Ltda. Es l&iacute;der en el mercado de la comercializaci&oacute;n e importaci&oacute;n de vidrios de seguridad originales de las mejores marcas de veh&iacute;culos con m&aacute;s de 25 a&ntilde;os de experiencia en el sector automotriz.
                            <br />
                            Dentro de nuestro cat&aacute;logo tenemos: vidrios especiales para todo tipo de veh&iacute;culos antiguos, cl&aacute;sicos, camiones y especiales, de las diferentes marcas y modelos de automotores. El mejor servicio del mercado en entrega, cumplimiento, calidad respaldo y atenci&oacute;n.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </FadeInAnimation>
            <FadeInAnimation direction="left" delay={8}>
            <div className="card mb-3">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title-principal" className="right-aligned-card">Nuestra Ventajas</h5>
                            <p class="card-text">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Ofrecemos vidrios laminados y templados originales</li>
                                <li class="list-group-item">Servicio de instalaci&oacute;n de vidrios laminados o templados a domicilio o en nuestro
                                    taller, con el cumplimiento exacto en el tiempo</li>
                                <li class="list-group-item">Trabajamos con los mejores materiales y est&aacute;ndares internacionales de calidad.
                                    </li>
                                <li class="list-group-item">A fourth item</li>
                                <li class="list-group-item">Distribuimos vidrios de seguridad en todo el territorio nacional.</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src="../images/img-9.jpg" alt="servicio1" width="400px" height="300pxs" />
                    </div>
                </div>
            </div>
            </FadeInAnimation>
            <FadeInAnimation direction="right" delay={10}>
            <div className="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../images/img-9.jpg" alt="servicio1" width="400px" height="300pxs" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title-principal">Nuestros Servicios</h5>
                            <p class="card-text">Instalamos su vidrio de seguridad en nuestro taller, o de ser necesario nos trasladamos donde usted lo solicite, utilizando la m&aacute;s reciente tecnolog&iacute;a sin maltratar su veh&iacute;culo, y con personal calificado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </FadeInAnimation>
        </div>
        <Footer />
    </div>
  );
}

export default Info;