import React from 'react'
import "./style.css"
import { FaBolt, FaRocket, FaUserTie, FaComments, FaGlobe, FaMobile } from "react-icons/fa"

let titles = ["Búsqueda inteligente","Rapidez garantizada","Perfiles profesionales","Comunicación directa","Cercanía global","Disponible en cualquier dispositivo"]
let description = ["Encuentra al freelancer perfecto en segundos gracias a nuestros filtros por habilidades, precio y disponibilidad.",
    "Publica tu oferta y recibe propuestas en tiempo récord. Ideal para proyectos urgentes.", 
    "Cada freelancer tiene su perfil con trabajos anteriores, valoraciones y tarifas para que elijas con confianza.",
    "Chatea de manera segura dentro de la plataforma para aclarar detalles antes de contratar.",
    "Conecta con talento de tu ciudad o de cualquier parte del mundo.",
    "Usa Farol desde tu computadora, tablet o smartphone sin complicaciones."
]

let icons = [FaBolt, FaRocket, FaUserTie, FaComments, FaGlobe, FaMobile]

const Body = () => {
    return (
      <div>
        <h1 className='title'>Características</h1>
        <div className='cards-grid'>
          {titles.map((item, index) => {
            const IconComponent = icons[index]
            return (
              <div className='card' key={index}>
               
                <h2>{item}</h2> 
                <IconComponent size={64} color="# #2D2D2D" className='icon'/>
                <p>{description[index]}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
export default Body
