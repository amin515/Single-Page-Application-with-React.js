import {Container, Row, Col} from 'react-bootstrap'
import './Footer.css'
const Footer = () => {
    return(
        <>
        <section className='footer-section'>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col className='col-md-6'>
                        <div className="content">
                            <h1>Welcome</h1>
                        <p>&copy; 2022 All Right resurved by Nur Amin</p>
                        </div>
                     
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default Footer;