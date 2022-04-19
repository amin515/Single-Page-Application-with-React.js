
import {Col, Container, Row, Button, Card, Table, Modal} from 'react-bootstrap'
import './Admin.css'
import { useState } from 'react'
import { useEffect } from 'react'

import  Axios  from 'axios'
import { Link } from 'react-router-dom'
const Admin = () => {

    // show data to admin
   const [user, setUser] = useState([]);
   
   useEffect(() => {
       Axios.get('http://localhost:5500/item').then(res =>{
           setUser(res.data)
       }).catch(error =>{
           console.log(error)
       })
   },[user]);

   // user delete data 
   const handleDeleteData = (id) =>{
    Axios.delete('http://localhost:5500/item/' + id)
   }
    return(
        <>
        <Container>
            <Row className='d-flex justify-content-center my-5'>
                <Col md={ 10 }>
                    <Card>
                        <Card.Header>
                            <div className="top-bar d-flex justify-content-between">
                            <h3>Add new Devs</h3>
                            <Link to="/AddDevs" className='btn btn-primary'>Add devs</Link>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Age</th>
                                        <th>Cell</th>
                                        <th>Gender</th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        user.map((data, index) =>
                                        <tr>
                                        <td>{ index + 1}</td>
                                        <td>{ data.name }</td>
                                        <td>{ data.email }</td>
                                        <td>{ data.age } Years</td>
                                        <td>{ data.cell }</td>
                                        <td>{ data.gender }</td>
                                        <td><img style={{width:'40px', height: '40px'}} src={ data.photo} alt="" /></td>
                                        <td>
                                            <a className='btn btn-danger btn-sm' href="#" onClick={() => handleDeleteData(data.id) }><i class='bx bx-trash'></i></a>
                                        </td>
                                    </tr>
                                    )
                                 }
                                   
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Admin;