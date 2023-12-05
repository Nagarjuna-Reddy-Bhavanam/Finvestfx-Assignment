import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
function Menu() {
      const [menu, setMenu] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => setMenu(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8000/menu/' + id)
            window.location.reload()
        } catch (err) {
            console.log(err);
    }
    }

    return (
        <div className='d-flex vh-200 bg-info justify-content-center align-items-center'>
            <div className='w-50 rounded p-3'>
                <h1>LIST OF FOOD ITEMS</h1>
                <table className=' table'>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Label</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.pname}</td>
                                    <td>{data.image}</td>
                                    <td>{data.category}</td>
                                    <td>{data.label}</td>
                                    <td>{data.price}</td>
                                    <td>{data.description}</td>
                                    <td>
                                        <Link to={`update/${data.id}`} className='btn btn-primary'>Update</Link>
                                         <button className='btn btn-danger ms-2' onClick={ e => handleDelete(data.id)}>Delete</button>
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

export default Menu