import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Updatecontact() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const params = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    getcontactdetails();
  },[])
  const getcontactdetails = async ()=>{
    let result = await fetch(`http://localhost:5000/contact/${params.id}`);
    result = await result.json();
    setName(result.name)
    setMobile(result.mobile)
    setEmail(result.email)
  }
  const updateContact = async () => {
    try {
      let result = await fetch(`http://localhost:5000/edit/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ name, mobile, email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!result.ok) {
        throw new Error('Network response was not ok');
      }
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='bg-white p-4 shadow-md rounded-lg'>
      <h2 className="text-xl font-bold mb-2">Edit Contact</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full p-2 border rounded"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        onClick={updateContact}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Update Contact
      </button>
    </div>
  )
}
