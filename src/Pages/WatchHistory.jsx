import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/allAPI'

function WatchHistory() {
  
  const [history,setHistory]=useState([])
  const getWatchHistory = async ()=>{

    //Make api call
    const {data}= await getHistory()
    setHistory(data);
  }
  useEffect(()=>{
    getWatchHistory()
  },[])
 
  const handleDeleteHistory =async (id)=>{
    await  deleteHistory(id)
    getWatchHistory()
  }
  return (
<>
<div className="d-flex justify-content-between align-items-center">
  <h3>Watch History</h3>
  <Link to={'/home'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-arrow-left"></i> Back To Home</Link>
</div>
<div className=''>
  <table className='table rounded shadow'> 
  <thead>
    <tr>
      <th>#</th>
      <th>Caption</th>
      <th>Url</th>
      <th>Timestamp</th>
      <th>*</th>
    </tr>
  </thead>
  <tbody>
    
   { 
  history.length>0?
  history.map((item,index)=>(
    <tr>
      <td>{index+1}</td>
      <td>{item?.caption}</td>
      <td><a href={item?.embbedLink} target='_blank'>{item?.embbedLink}</a></td>
      <td>{item?.timeStamp}</td>
      <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
    </tr>
  )
  )
  : <p className='fw-bolder fs-5 text-danger mt-3'>Sorry Nothing to display!!!</p>
   }
  </tbody>
  </table>
</div>


</>  )
}

export default WatchHistory