import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Contacts() {
    const [Contacts, setcontacts] = useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        getcontacts();
    }, []);
    const getcontacts = async ()=>{
        let result = await fetch('http://localhost:5000/contacts');
        result = await result.json();
        setcontacts(result);
    }
    const deletecontact = async (id)=>{
        let result = await fetch(`http://localhost:5000/delete/${id}`,{
            method: "Delete"
        });
        result=await result.json()
        if(result){
            alert("Contact Deleted");
            window.location.reload();
        }
    };
  return (
    <div>
        <h1 className="text-3xl font-bold">
      All Contacts
    </h1>
        <table className="min-w-full">
      <thead>
        <tr>
          <th className="text-left px-4 py-2">Name</th>
          <th className="text-left px-4 py-2">Mobile Number</th>
          <th className="text-left px-4 py-2">Email</th>
          <th className="text-left px-4 py-2">Operation</th>
        </tr>
      </thead>
      <tbody>
        {Contacts.map((item, index) => (
          <tr key={index} className='bg-gray-100'>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.mobile}</td>
            <td className="border px-4 py-2">{item.email}</td>
            <td className="border px-4 py-2">
              <Link to={"/update-contact/"+item._id} class="bg-green-500 text-white p-2 rounded hover:bg-green-700">Edit</Link>
              <button onClick={()=>deletecontact(item._id)} class="bg-red-500 text-white p-2 rounded hover:bg-red-700">Delete</button>
</td>

          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
