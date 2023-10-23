import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Addcontact() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate();
    const handleAddContact = async (e) => {
        e.preventDefault();
        const userData = {
          name: name,
          mobile: mobile,
          email: email,
        };
    
        try {
          const response = await fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
    
          if (response.ok) {
            // Registration was successful
            alert('User registered successfully.');
            navigate('/');
            // You can perform other actions like redirecting to a login page.
          } else {
            // Registration failed, handle the error
            const data = await response.json();
            alert('Registration failed:', data.error);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">Add Contact</h2>
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
        onClick={handleAddContact}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Contact
      </button>
    </div>
  )
}
