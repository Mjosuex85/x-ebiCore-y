import React from 'react'
import style from '../styles/carsCard.module.css'

const CarsCard = ({ doors, fuelType, modelDescription, cost, placeDescription, url, currency }) => {
  return (

    <div className={style.container} >
      <img src={url} alt="FALTA LA IMAGEN" />

      <div className={style.subTitle}>
        <p>
          <i style={{ color: 'white' }} className="fas fa-car"/>&nbsp;{doors} Puertas
        </p>

        <p>
          <i style={{ color: 'white' }} className="fas fa-fire" />&nbsp; {fuelType}
        </p>
      </div>

      <div className={style.info}>
        <h4> {currency === "ARS" ? "$" : "CLP$"} {cost.toLocaleString('es-US').replace(",", ".")}</h4>
        <h6> {modelDescription}</h6>
        <p> {placeDescription}</p>
      </div>
    </div>

  )
};

export default CarsCard;