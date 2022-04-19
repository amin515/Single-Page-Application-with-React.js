

import {Col, Container, Row, Form, Card, CloseButton,Button} from 'react-bootstrap'
import './Admin.css'
import { useState } from 'react'
import  Axios  from 'axios'
import  {Link}  from 'react-router-dom'
const AddDevs = () => {
     // set data by useState
     const [input, setInput] = useState({
        name : '',
        email : '',
        age : '',
        cell : '',
        gender : '',
        photo : '',
        facebook : '',
        twitter : '',
        linkedin : '',
        instagram : ''
        
    });
    // data structure
    const { name, email, age, cell, gender, photo, facebook, twitter, instagram, linkedin,username,skill} = input;
   
    // Alert management
    const [alert, setAlert] = useState({
       msg : 'All fields are required !',
       type : 'danger',
       status : false
    })
    // Alert close Mangement
    const handleCloseAlert = () =>{
        setAlert({
            msg : '',
            type : 'danger',
            status : false
        })
    }
    // Submit form to json-server
    const handleSubmitForm = (e) => {
        e.preventDefault();

        if( name === '' || email === '' || cell === '' || age === '' || photo === ''){
            setAlert({
                msg : 'All fields are required ! 🙄',
                type : 'danger',
                status : true
            });
            
        }else{

            Axios.post('http://localhost:5500/item' , input).then(res =>{


                setAlert({
                    msg : 'Data sent successfully ❤',
                    type : 'success',
                    status : true
                })
                setTimeout(() => {
                    setAlert({
                    msg : 'Data sent successfully ❤',
                    type : 'success',
                    status : false
                })
                }, 2000);;
                setInput({
                    name : '',
                    email : '',
                    age : '',
                    cell : '',
                    gender : '',
                    skill : '',
                    username : '',
                    photo : '',
                    facebook : '',
                    twitter : '',
                    linkedin : '',
                    instagram : ''
                })
            }
            ).catch( error => {
                console.log(error)
            })
            
        }
    }
    return(
        <>
        <section className='form-design'>
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col md={ 10 }>
                    <div className="form-magement">
                        <div className="form-design-mid">
                            <Row className='d-flex justify-content-center my-5'>
                                <Col md={ 6 }>
                                    <Card>
                                        <Card.Header>
                                            <h1>Add new Devs</h1>
                                        </Card.Header>
                                        <Card.Body>
                             <Form onSubmit={ handleSubmitForm }>
                               {
                                   alert.status && <p className={ `d-flex justify-content-between alert alert-${alert.type}` }>{ alert.msg } <CloseButton onClick={ handleCloseAlert }/></p>
                               }
                                 
                                 
                                 <div className="my-2">
                                    <Form.Control type='text' placeholder='Name' value={ name } onChange={ e => setInput({ ...input, name : e.target.value})}/>
                                </div>
                                 <div className="my-2">
                                    <Form.Control type='text' placeholder='Email' value={ email } onChange={ e => setInput({ ...input, email : e.target.value})}/>
                                </div>
                                 <div className="my-2">
                                    <Form.Control type='text' placeholder='cell' value={ cell } onChange={ e => setInput({ ...input, cell : e.target.value})}/>
                                </div>
                                 <div className="my-2">
                                    <Form.Control type='text' placeholder='Age' value={ age } onChange={ e => setInput({ ...input, age : e.target.value})}/>
                                </div>
                                 <div className="my-2">
                                    <Form.Control type='text' placeholder='Photo link' value={ photo } onChange={ e => setInput({ ...input, photo : e.target.value})}/>
                                </div>
                                 <div className="my-2">
                                    <Form.Control type='text' placeholder='username' value={ username } onChange={ e => setInput({ ...input, username : e.target.value})}/>
                                </div>
                                 <div className="my-2">
                                    <Form.Control type='text' placeholder='Skills' value={ skill } onChange={ e => setInput({ ...input, skill : e.target.value})}/>
                                </div>
                                 <div className="my-2">
                                    <Form.Control type='text' placeholder='facebook link' value={ facebook } onChange={ e => setInput({ ...input, facebook : e.target.value})}/>
                                </div>
                                 <div className="my-2">
                                    <Form.Control type='text' placeholder='twitter link' value={ twitter } onChange={ e => setInput({ ...input, twitter : e.target.value})}/>
                                </div>
                                 <div className="my-2">
                                    <Form.Control type='text' placeholder='linkedin link' value={ linkedin } onChange={ e => setInput({ ...input, linkedin : e.target.value})}/>
                                </div>
                                 <div className="my-2">
                                    <Form.Control type='text' placeholder='instagram link' value={ instagram } onChange={ e => setInput({ ...input, instagram : e.target.value})}/>
                                </div>
                                <hr />
                                <div className="my-2">
                                    <Form.Check type='radio' value='Male' name='gender' inline onChange={ e => setInput({ ...input, gender : e.target.value})}/>Male
                                    <Form.Check type='radio' value='Female' name='gender' inline onChange={ e => setInput({ ...input, gender : e.target.value})}/>Female
                                </div>
                                <div className="my-2">
                                <Button variant="primary" size="lg" type="submit">Submit</Button>
                                </div>
                            </Form>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to="/" className='btn btn-info'>Back to Home Page</Link>
                                </Card.Footer>
                                </Card>
                               
                                </Col>
                            </Row>
                             
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
        

        </>
    )
}
export default AddDevs;