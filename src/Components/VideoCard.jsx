import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addtoHistory, deleteAVideo } from '../services/allAPI';

function VedioCard({displayData,setDeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow =async () =>{ setShow(true);
  
  
    let today =new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today);
  const {caption,embbedlink}= displayData
  
  const videoHistory={
    caption,embbedlink,timeStamp
  }
  await addtoHistory(videoHistory)
  }



const removeVideo = async (id)=>{
  const response = await deleteAVideo(id)
  setDeleteVideoStatus(true)
}
const dragStarted =(e,id)=>{
  console.log("Drag Started...");
  e.dataTransfer.setData("cardId",id)
}

  return (
    <>
    {displayData &&
    <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
    <Card.Img onClick={handleShow} variant="top" src={displayData?.url} style={{width:'100%',height:'180px'}} />
    <Card.Body>
      <Card.Title className='d-flex justify-content-between'>
        <h5>{displayData?.caption}</h5>
{ insideCategory?"":       <Button onClick={()=>removeVideo(displayData?.id)} className='btn text-danger'><i className='fa-solid fa-trash fs-5'></i></Button>}        </Card.Title>
      
    </Card.Body>
  </Card>}
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400px"} src={`${displayData?.embbedlink}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>
  </>
  )
}

export default VedioCard