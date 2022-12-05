import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../store/actions';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import { useEffect } from 'react';

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
    dispatch(getUsers())
  };


  useEffect(() => {
    dispatch(getUsers())
  },[dispatch])

  return (

    <div>
        <Button onClick={() => handleClick()} color="success">
          USERS
        </Button>


      <Modal style={{textAlign: "center"}} isOpen={open}>

        <ModalHeader>
          Users
        </ModalHeader>

        <ModalBody>
          {<table className="table table-striped table-fixed table-bordered" >
            <thead>
              <tr className="text-sm">
                <th className="header col-1" scope="col-10">id</th>
                <th className="header col-1" scope="col-10" >Name</th>
                <th className="header col-1" scope="col-10">phone</th>
                <th className="header col-1" scope="col-10" >email</th>
              </tr>
            </thead>

            <tbody>
              {users && users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id.slice(0, 3)}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>}
        </ModalBody>

        <ModalFooter>
          <Button onClick={() => handleClick()} color="danger">
            Close
          </Button>
        </ModalFooter>

      </Modal>

    </div>
  );


};




export default Users