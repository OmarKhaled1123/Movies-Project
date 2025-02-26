import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const  NavBar = ({search}) =>  {

  const onSearch = (word) => {
    search (word) 
  }
    
  return (
    <div className='nav-style w-100'>
       <Container>
        <Row className='pt-2'>
            
            
            
            <Col xs='10' lg='11' className=' d-flex align-items-center '>
            <div className='search w-100'>
                <i className='fa fa-searcsh'></i>
                <input onChange={(e) => onSearch(e.target.value)} type='text ' className='form-control' placeholder='search'/>


            </div>
            </Col>
        </Row>
       </Container>
        
    </div>
  )
}

export default NavBar