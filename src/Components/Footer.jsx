import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-cintent-center' style={{width:'100%',height:'300px'}}>
        <div className="footer d-flex justify-content-evenly w-100">
            <div style={{width:'400px'}} className="website">
                <h4>
                <i className="fa-solid fa-cloud-arrow-up fa-bounce text-dark"></i>
           {' '}
            Media Player
                </h4>
                <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
<h6>Code licensed MIT, docs CC BY 3.0.</h6>
<p>Currently v5.3.2.</p>
            </div>
      <div className="links d-flex flex-column">
        <h4>Links</h4>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}> Landing Page</Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'white'}}> Home</Link>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}> Watch History</Link>

      </div>
      <div className="guides d-flex flex-column">
        <h4>Guides</h4>
        <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}> React</Link>
        <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}> React Bootstrap</Link>
        <Link to={'https://reactrouter.com/en/main'} style={{textDecoration:'none',color:'white'}}> Routing</Link>

      </div>
        </div>
        <p>All rights Reserved © Media Player © 2023</p>
    </div>
  )
}

export default Footer