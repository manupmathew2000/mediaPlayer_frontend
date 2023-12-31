import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row ,Col} from "react-bootstrap";
import {addCategory,deleteCategory,getAVideo,getAllCategory,updateCategory,} from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VedioCard from "./VideoCard";



function Category() {
  const [categories, setCategories] = useState([]);
  const [categeoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const insertCategory = async () => {
    if (categeoryName) {
      //make api call
      let body = {
        categeoryName,allVideos:[]
      };
      const response = await addCategory(body);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        //reset state
        setCategoryName("");
        handleClose();

        getCategories();
      } else {
        toast.warning("uploading error!! please try after sometimes..");
      }
    } else {
      toast.info("please fill the form completely");
    }
  };

  const getCategories = async () => {
    const { data } = await getAllCategory();
    console.log(`cat ${data}`);
    setCategories(data);
  };

  const removeCategory = async (id) => {
    await deleteCategory(id);
    getCategories();
  };



  useEffect(() => {
    getCategories();
  }, []);

  const dragOverCategory=(e)=>{
    // console.log("Dragging over Category");
    e.preventDefault()
  }

  const videoDrop = async (e,categoryId)=>{
    console.log("Inside drop function");
    // console.log("Category Id:"+categoryId);
    const videoCardId= e.dataTransfer.getData("cardId")
    // console.log("Video card Id:"+videoCardId);
    //get video 
    const {data}= await getAVideo(videoCardId)
    let selectedCategory = categories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
  await updateCategory (categoryId,selectedCategory)
  getCategories()
  }


  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-info" >
          Add Category
        </button>
      </div>
      {categories ? (
        categories.map((item) => (
          <div className="border p-3 rounded mt-3 mb-3" droppable 
          onDragOver={(e)=>dragOverCategory(e)}
          onDrop={(e)=>videoDrop(e,item?.id)}>
            <div className="d-flex justify-content-between">
              <h5>{item?.categeoryName}</h5>
              <button
                onClick={() => removeCategory(item?.id)}
                className="btn btn-info"
              >
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>
            <Row>
              {
                item?.allVideos&&item?.allVideos.map(card=>(
                  <Col sm={12} className="p-1 mb-2">
            <VedioCard displayData={card} insideCategory={true}/>
                  </Col>
                ))
              }
            </Row>
          </div>
        ))
      ) : (
        <p className="fw- bolder  text-danger mt-3">
          sorrry Nothing to display!!
        </p>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="border p--3 rounded border-secondary">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={insertCategory} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={3000} theme="light" />
    </>
  );
}

export default Category;
