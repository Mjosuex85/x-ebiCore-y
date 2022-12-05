import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { /* getUsers, */ registerUser } from '../store/actions';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";


const Form = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({})
  const users = useSelector((state) => state.users)

  useEffect(() => {
    /* dispatch(getUsers()) */
  },[dispatch])
  
  /**
   * this function close and open the modal to register
   */
  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  /**
   * this function dispatch the functio tu register the user
   */
  const register = async () => {
    dispatch(registerUser(user))
    setOpen(false)
  };

  /**
   * this function create de objet user with all information
   */
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.title]: event.target.value
     })
  };

  return (
    <div>
      <div>
        <Button style={{marginRight: '10px'}} onClick={() => handleClick()} color="success">
          REGISTER
        </Button>
      </div>

      {/* /////////////////// MODAL /////////////////////////////// */}

      <Modal isOpen={open}>
        
        <ModalHeader>
          Registro de Usuario
        </ModalHeader>

        <ModalBody>
          <Input title='name' placeholder="Name" onChange={(e) => handleChange(e)} type="text" />
          <br />

          <Input title='phone' placeholder='Phone' onChange={(e) => handleChange(e)} type="text" />
          <br />

          <Input title="email" placeholder="email" onChange={(e) => handleChange(e)} type="text" />
          {!!users.find(e=>e.email === user.email) ? "the e-mail is already registred" : ""}
        </ModalBody>

        
        <ModalFooter>
          <Button /* disabled={disabled} */ onClick={() => register()} color="success">
            Register
          </Button>

          <Button  onClick={() => handleClick()} color="danger">
            Close
          </Button>
        </ModalFooter>

      </Modal>

    </div>
  )
};




export default Form;