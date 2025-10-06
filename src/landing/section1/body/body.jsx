import React from 'react'
import "./style.css"
import img from "../../../media/img/conectamos.png"

const Body = () => {
  return (
    <div className='body'>
      <h1 className='textOpacity'>Tu Faro en el mundo del freelance</h1>
      <h2>
        ¿Necesitas a alguien para un proyecto puntual o buscas trabajo como freelancer?
        Farol es la plataforma que te conecta de forma rápida y sencilla.
      </h2>
      <img src={img} alt="Conectamos" className='imgbody' />

      <div className='columns-section'>
        <div className='columns-container'>
          <div className='column'>
            <p>
              Para quienes buscan freelancers: Publica tus tareas, fija el pago que ofreces y recibe
              propuestas de profesionales dispuestos a ayudarte. Encuentra exactamente el talento que
              necesitas en el menor tiempo posible.
            </p>
          </div>
          <div className='column'>
            <p>
              Accede a talento especializado cuando lo necesites. Encuentra freelancers verificados
              para proyectos específicos sin compromisos a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
