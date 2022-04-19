
import { Card, Col, Container, Form, Row, Button} from "react-bootstrap";
import './Profile.css'
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import  Axios  from "axios";
const EditProfile = () => {

    // edit data 
   const {id} = useParams();
   
    const [edit, setedit] = useState({
        name : '',
        email: '',
        cell : '',
        username : '',
        age : '',
        photo : '',
        skill : '',
        gender : '',
        facebook : '',
        twitter : '',
        linkedin : '',
        instagram : ''
    })
   // get data for edit
    useEffect(() => {
       Axios.get(`http://localhost:5500/item/${id}`).then(res =>{
         setedit({
             ...res.data
         })
       }).catch(eror =>{
           console.log(eror)
       })
    }, [])
    // submit after edit data
    const handleEditSubmit = (e) =>{
        e.preventDefault();
        Axios.patch(`http://localhost:5500/item/${id}` ,  edit  ).then( res =>{
         
        }).catch( error =>{
            console.log(error)
        })
    }
    return(
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col md={6} className='my-5'>
                <Card className='shadow'>
                    <div className="box-content">
                    <Card.Body>
                     <img style={{width: '250px', height: '250px'}} src={edit.photo} alt="" />
                    </Card.Body>
                    <Row>
                        <Col md={6}>
                        <h6>Name : {edit.name}</h6>
                        <p>Skill : {edit.skill}</p>
                        <p>Age : {edit.age} Years old</p>
                        <p>Email : {edit.email}</p>
                        <p>UserName: {edit.username}</p>
                        <p>Id : {edit.id}</p>
                        </Col>
                        <Col md={6}>
                        <p>Facebook : {edit.facebook}</p>
                        <p>Twitter : {edit.twitter}</p>
                        <p>Linkdin : {edit.linkedin}</p>
                        <p>Instagram : {edit.instagram}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form className='px-2' onSubmit={(e) => handleEditSubmit(e) }>
                            <Row className='d-flex justify-content-center'>
                                <Col className='6'>
                                    <div className="my-2">
                                    <Form.Control type="text" placeholder="Name" value={edit.name} onChange={ e => setedit({...edit, name: e.target.value})}/>
                                    </div>
                                    <div className="my-2">
                                    <Form.Control type="text" placeholder="Email" value={edit.email} onChange={ e => setedit({...edit, email: e.target.value})}/>
                                    </div>
                                    <div className="my-2">
                                    <Form.Control type="text" placeholder="Age" value={edit.age} onChange={ e => setedit({...edit, age: e.target.value})}/>
                                    </div>
                                    <div className="my-2">
                                    <Form.Control type="text" placeholder="Skill" value={edit.skill} onChange={ e => setedit({...edit, skill: e.target.value})}/>
                                    </div>
                                    <div className="my-2">
                                    <Form.Control type="text" placeholder="UserName" value={edit.username} onChange={ e => setedit({...edit, username: e.target.value})}/>
                                    </div>
                                    <div className="my-2">
                                    <Form.Control type="text" placeholder="Cell" value={edit.cell} onChange={ e => setedit({...edit, cell: e.target.value})}/>
                                    </div>
                                </Col>
                                <Col className='6'>
                                <div className="my-2">
                                    <Form.Control type="text" placeholder="Facebook link" value={edit.facebook} onChange={ e => setedit({...edit, facebook: e.target.value})}/>
                                    </div>
                                    <div className="my-2">
                                    <Form.Control type="text" placeholder="Twitter link" value={edit.twitter} onChange={ e => setedit({...edit, twitter: e.target.value})}/>
                                    </div>
                                    <div className="my-2">
                                    <Form.Control type="text" placeholder="Linkedin link" value={edit.linkedin} onChange={ e => setedit({...edit, linkedin: e.target.value})}/>
                                    </div>
                                    <div className="my-2">
                                    <Form.Control type="text" placeholder="Instagram link" value={edit.instagram} onChange={ e => setedit({...edit, instagram: e.target.value})}/>
                                    </div>
                                    <div className="my-2">
                                    <Form.Control type="text" placeholder="photo link" value={edit.photo} onChange={ e => setedit({...edit, photo: e.target.value})}/>
                                    </div>
                                    <div className="my-2">
                                    <Form.Control type="text" placeholder="Id" value={edit.id}/>
                                    </div>
                                </Col>
                            </Row>
                            <div className="my-2">
                                <Button type='submit' className="btn btn-primary w-100">Submit</Button>

                            </div>
                        </Form>
                        </Col>
                    </Row>
                    </div>
                    <Card.Footer>
                        <Link to={`/Profile/${edit.id}`} className='btn btn-primary'>Back to profile page</Link>
                    </Card.Footer>
                 </Card>

                </Col>
            </Row>
        </Container>
    )
}
export default EditProfile;