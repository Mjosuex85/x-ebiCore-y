import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../store/actions';
import CarsCard from './CarsCard.jsx';
import car from '../images/car.png'
import pointer from '../images/pointer.png'
import pay from '../images/retirar.png'
import retira from '../images/retirar.png'
import destacados from '../images/destacados.png'
import style from '../styles/home.module.css'
import Pagination from './Pagination';
import { useState } from 'react';

const Home = () => {
  const dispatch = useDispatch()
  const allCars = useSelector((state) => state.cars)
  const [carPerPage, /* setCarPerPage */] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastCharacter = currentPage * carPerPage // esto es igual a 6
  const indexOfFirstCharacter = indexOfLastCharacter - carPerPage // esto es igual a 0
  /*  const currentCars = cars.carList?.map((e) => {
     return e.brandDescription === "FORD"
   }).slice(indexOfFirstCharacter, indexOfLastCharacter); */


  useEffect(() => {
    dispatch(getCars())
  }, [dispatch])


  const handlePagination = (pag) => {
    setCurrentPage(pag)
  };

  return (

    <div>
      <div className={style.optionsContainer}>

        <div className={style.optionBox}>
          <img style={{ marginBottom: '20px' }} src={pointer} alt="" />
          <h5>ELEGI UN AUTO</h5>
          <p>Acorde a tus intereses</p>
        </div>

        <div className={style.optionBox}>
          <img style={{ marginBottom: '20px' }} src={retira} alt="" />

          <h5>RETIRA EL AUTO</h5>
          <p>Combina un lugar de encuentro con el propietario</p>
        </div>

        <div className={style.optionBox}>
          <img style={{ marginBottom: '20px' }} src={car} alt="" />
          <h5>VIAJA SEGURO</h5>
          <p>Cocoche cuenta con un seguro todo
            riesgo y retiene un deposito en la tarjeta como garantia
          </p>
        </div>

        <div className={style.optionBox}>
          <img style={{ marginBottom: '20px' }} src={pay} alt="" />
          <h5>REALIZA EL PAGO</h5>
          <p>Abonás el costo de alquiler</p>
        </div>

      </div>

      <div className={style.destacados}>
        <img src={destacados} alt="..." />
      </div>

      <div className={style.carsContainer}>

        {allCars && allCars.slice(indexOfFirstCharacter, indexOfLastCharacter).map((cars, index) => {
          return (
            <div key={index}>
              <CarsCard
                
                doors={cars.doors}
                fuelType={cars.fuelType}
                cost={cars.cost}
                title={cars.title}
                modelDescription={cars.modelDescription}
                placeDescription={cars.placeDescription}
                url={cars.url}
                currency={cars.currency}
              />
            </div>
          )
        })}
      </div>

      <div>
        <Pagination
          currentPage={currentPage}
          allCars={allCars.length}
          carPerPage={carPerPage}
          handlePagination={handlePagination}
        />
      </div>
    </div>
  )
};

export default Home