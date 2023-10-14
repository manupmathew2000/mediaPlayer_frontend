import React from 'react'
import { Col, Row,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()

  const navigate=()=>{
    navigateByUrl('/home')
  }
  return (
    <>
      <Row className='mt-3 mb-5 align-items-center'>
        <Col></Col>
        <Col md={4}>
          <h3 className='mb-3'>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit vel, tempora est cupiditate laborum nisi eos quam nostrum expedita tempore non. Ipsa aperiam reiciendis nulla? Cupiditate dolorem ad veniam pariatur.</p>
            <button onClick={navigate} className='btn btn-success fw-bolder'>Get Started</button>
        </Col>
        <Col md={6}>
            <img className='img-fluid w-100' src="https://images.squarespace-cdn.com/content/v1/58bb3e5e59cc68b969605ae7/1607897245260-L7L4K8346KCQTA71C5JW/ezgif.com-video-to-gif.gif?format=2500w" alt="" srcset="" />

        </Col>





      </Row>
      <div className="container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">

      <h3>Features</h3>
      <div className="features mt-5 d-flex justify-content-between w-100">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://lordicon.com/icons/wired/flat/40-gears-settings-double.gif"/>
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://gifdb.com/images/high/youtube-red-icon-78u4fsgfpf41nvsp.gif"/>
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://apcp.es/wp-content/uploads/2021/12/giphy-5.gif"/>
      <Card.Body>
        <Card.Title>Watch History </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='container mt-5 mb-5 d-flex justify-content-between border rounded p-5 border-secondary shadow align-items-center'>
        <div className="content">
          <h4 className='text-warning mb-5'> Simple, Fast And Powerful </h4>
          <h6><span className='fs-5 me-3'>Play Everything</span>: Lorem ipsum dolor sit amet , dignissimos libero aliquam doloribus voluptatibus quidem?</h6>
          <h6><span className='fs-5 me-3'>Categorise Videos</span>: Lorem ipsum dolor sit amet , dignissimos libero aliquam doloribus voluptatibus quidem?</h6>
          <h6><span className='fs-5 me-3'>Managing History</span>: Lorem ipsum dolor sit amet , dignissimos libero aliquam doloribus voluptatibus quidem?</h6>

       
       
       
        </div>
        <div className="video ms-5">
        <iframe width="688" height="387" src="https://www.youtube.com/embed/fC5MKJDW6sc" title="GEAR5 (fifth) &quot;This is my PEAK!&quot; -ANIME DATE REVEALED TEASER REEL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
  
  
        </div>
      </div>
   
    </>
  )
}

export default LandingPage