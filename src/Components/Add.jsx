import React,{useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoSeverResponse}) {
  const [video,setvideo]=useState({
    id:"",caption:"",url:"",embbedlink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const extractLink=(e)=>{
  const {value}=e.target
  if(value){
    const embbed =`https://www.youtube.com/embed/${value.slice(-11)}`
    setvideo({...video,embbedlink:embbed})
  }
  else{
    setvideo({...video,embbedlink:""})

  }
  


 }

 const handleUpload = async ()=>{
  const {id,caption,url,embbedlink}=video
  if(!id || !caption || !url || !embbedlink){
    toast.warning("Please fill the form completely")
  }
  else{
    const response = await uploadVideo(video)
    if(response.status>=200 && response.status<300){ 

      setvideo({
        id:"",caption:"",url:"",embbedlink:""
      })
      setUploadVideoSeverResponse(response.data)
      handleClose()
    
    toast.success(`${response.data.caption} is uploaded successfully`)
  }else{
    toast.error("uploading error !! please try after sometimes....")
  }
 }
}

console.log(video);

  return (
    <>
    <div className='d-flex align-items-center'>
      <h5>Add New Video</h5>
      <button onClick={handleShow} className='btn'><i className='fa-solid fa-circle-plus fs-3 text-success'></i></button>

    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Viedo</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setvideo({...video,id:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setvideo({...video,caption:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Image URl" onChange={(e)=>setvideo({...video,url:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Youtube Video Link"  onChange={extractLink}/>
      </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload} >Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
position="top-center"
autoClose={3000}
theme="light"
/>
{/* Same as */}
    </>
  )
}

export default Add