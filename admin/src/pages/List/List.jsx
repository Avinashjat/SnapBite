import  { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = () => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${backendUrl}/api/food/list`);
    // console.log(response.data)
    if (response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${backendUrl}/api/food/remove`, {id:foodId});
    await fetchList();
    if (response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchList()
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Remove</b>
        </div>
        {list.map((item, index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${backendUrl}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'> X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List