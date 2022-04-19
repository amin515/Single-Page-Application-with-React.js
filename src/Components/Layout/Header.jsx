import {Col, Container, Row, Button} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import  Axios  from "axios";
import './Header.css'
const Header = () =>{
    const {id} = useParams()
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
         <section className='top-header'>
              <Container>
                  <Row>
                      <Col md={ 3 }>
                          <div className="header-left">
                          <div className="header-logo">
                              <Link to="/"><img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="" /></Link>
                           </div>
                          </div>
                      </Col>
                      <Col md={ 9 }>
                       <div className="header-right">
                           <div className="main-menu">
                               <ul>
                                   <li><Link to="/">Home</Link></li>
                                   <li><a href="#">About</a></li>
                                   <li><Link to={`/Admin`}>Dashbord</Link></li>
                                   <li><Link to="/AddDevs">Add new Data</Link></li>
                                   <li><a href="#">Video</a></li>
                                   <li><a href="#">Contact-Us</a></li>
                               </ul>
                           </div>
                       </div>

                      </Col>
                  </Row>
             </Container>    
         </section>
        </>
    )
}
export default Header;