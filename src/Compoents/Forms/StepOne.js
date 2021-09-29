import React from 'react';

const StepOne = ({ data, setData }) => {
    return (
        <div className="mb-4">
            <h3 className="mb-4 text-center">Personal Information</h3>
            <input 
            type="text" 
            aria-label="name"
            name="name"
            placeholder="Your Name"
            required
            onChange={(e)=>{setData({...data, name: e.target.value})}}
            className="form-control mb-3" />

            <input 
            type="email" 
            aria-label="email"
            name="email"
            placeholder="Your Email"
            required 
            onChange={(e)=>{setData({...data, email: e.target.value})}}
            className="form-control mb-3" />

            <input 
            type="text" 
            aria-label="username"
            name="username"
            placeholder="Username"
            required 
            onChange={(e)=>{setData({...data, username: e.target.value})}}
            className="form-control mb-3" />

            <input 
            type="text"
            name="address" 
            aria-label="address"
            placeholder="Your Address"
            required 
            onChange={(e)=>{setData({...data, address: e.target.value})}}
            className="form-control mb-3" />

            <textarea 
            type="text"
            name="about" 
            aria-label="about"
            placeholder="About"
            required 
            onChange={(e)=>{setData({...data, about: e.target.value})}}
            className="form-control mb-3"></textarea>
        </div>
    );
};

export default StepOne;