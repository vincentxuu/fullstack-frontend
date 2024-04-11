import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async() =>{
    const url = "https://fullstack-backend-89ho.onrender.com//user";
    const result = await axios.get(url);
    setUsers(result.data);  
  }

  const deleteUser = async(id) =>{
    await axios.delete(`https://fullstack-backend-89ho.onrender.com//user/${id}`);
    loadUsers();
  }
  
  return (
    <div className='container'>
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index) =>(
                <tr key={index}> 
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className='btn btn-secondary mx-2' to={`/viewuser/${user.id}`}>View</Link>
                    <Link className='btn btn-outline-secondary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                    <button className='btn btn-dark mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home