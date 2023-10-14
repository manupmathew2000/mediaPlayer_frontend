import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import {getAllVideos} from '../services/allAPI'

function View({uploadVideoServerResponse}) {
  const[allVideos,setallVideos]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]= useState(false)
  const getAllUloadedVideos = async()=>{
    const {data} = await getAllVideos()
    setallVideos(data);
  }
  useEffect(()=>{
    setDeleteVideoStatus(false)
    getAllUloadedVideos(false)
  },[uploadVideoServerResponse,deleteVideoStatus])
  // console.log(allVideos);
  return (
    <>
    <Row>
      {allVideos.length>0 ?
      allVideos.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3}>

        <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
  
        </Col>

      ))
      : <p className='fw-bolder fs-5 text-danger mt-3'>Oops!!! nothing to display</p>
       
    }
      
      
      
      
    </Row>
    </>
  )
}

export default View