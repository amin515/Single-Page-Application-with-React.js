import {Col, Container, Row, Button, Card} from 'react-bootstrap'
import './Profile.css'
import { useState } from 'react'
import  Axios  from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
const Profile = () => {

    const {id} = useParams();

    const [view, setView] = useState({
        name : '',
        email : '',
        photo : '',
        id : '',
        cell : '',
        age : '',
        skill : ''
    });
    
    useEffect(() => {
        Axios.get(`http://localhost:5500/item/${id}`).then(res => {
            setView({
                ...res.data
            })
      }).catch( error =>{
          console.log(error)
      })
    }, [])
    
    

    return(
        <>
        <Container>
            <Row className='d-flex justify-content-center my-5'>
                <Col md={ 6 }>
                    <Card>
                        <Card.Header className='text-center'>
                            <h2>Devs Profile Data</h2>
                        </Card.Header>
                        <Card.Body className='text-center'>
                           <div className="profile-image">
                             <img className='shadow w-50' src={ view.photo } alt="" />
                           </div>
                           <div className="profile-content">
                                 <h1>Name : { view.name }</h1>
                                 <p>Skill : { view.skill } Developer</p>
                                 <p>Age : { view.age } Years Old</p>
                                 <p>Cell : { view.cell }</p>
                           </div>
                           <div className="social-icon">
                               <ul>
                                   {
                                       view.facebook && <li><a href="#"><i class='bx bxl-facebook'></i></a></li>
                                   }
                                   {
                                       view.twitter && <li><a href="#"><i class='bx bxl-twitter'></i></a></li>
                                   }
                                   {
                                       view.linkedin && <li><a href="#"><i class='bx bxl-linkedin'></i></a></li>
                                   }
                                   {
                                       view.instagram && <li><a href="#"><i class='bx bxl-instagram'></i></a></li>
                                   }
                                            
                               </ul>
                           </div>
                           
                        </Card.Body>
                        <Card.Footer className='d-flex justify-content-between'>
                        <Link to={ `/` } className='btn btn-primary'>Back to Home page</Link>
                        <Link to={ `/EditProfile/${view.id}` } className='btn btn-info'>Edit Profile</Link>

                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>

        </>
    )
}
export default Profile;