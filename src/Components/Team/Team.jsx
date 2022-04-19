import {Col, Container, Row, Card} from 'react-bootstrap'
import './Team.css'
import { Link } from 'react-router-dom'
import  Axios  from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const Team = () => {

    const [data, setData] = useState([]);
         
    useEffect(() => {
       Axios.get('http://localhost:5500/item').then( res => {
         setData(res.data)
          
           
       }).catch(error =>{
           console.log(error)
       })
    }, [data])


     return(
        <>
        <section className='team-section'>
        <Container>
             <Row>
                 {
                     data.map( data1 => 
                        
                        <Col md={3} className='my-3'>
                        <Card>
                           <img style={{height: '250px'}} src={ data1.photo } alt="" />
                           
                            <Card.Body>
                                <Card.Title>
                                   <h2>{data1.name}</h2>
                                </Card.Title>
                                <p>{data1.cell}</p>
                                <Link to={`/Profile/${data1.id}`} className='btn btn-primary'>View Profile</Link>
                            </Card.Body>
                        </Card>
                       </Col> 
                    )
                 }
                    
                 
             </Row>
         </Container>
        </section>
         
        </>
    )
}
export default Team;
