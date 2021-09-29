import React from "react";

const StepThree = ({ data, setData }) => {
  return (
      <div className="mb-4">
        <h3 className="mb-4 text-center">Give Review</h3>
        <div className="d-flex">
          <label for="customRange3" className="form-label">Ratting</label>
          <input 
          type="range"
          name="rating" 
          className="form-range" 
          min="0" max="5" 
          step="1"
          required 
          onChange={(e)=>{setData({...data, rating: e.target.value})}} 
          id="customRange3" />
        </div>

        <textarea 
        type="text"
        name="review" 
        aria-label="review"
        placeholder="Please Give a Review"
        required 
        onChange={(e)=>{setData({...data, review: e.target.value})}}
        className="form-control mb-3"></textarea>

        <input 
        type="text" 
        aria-label="schoolname"
        name="schoolname"
        placeholder="Your School Name"
        required
        onChange={(e)=>{setData({...data, schoolname: e.target.value})}}
        className="form-control mb-3" />

        <input 
        type="number" 
        aria-label="classroll"
        name="classroll"
        min="1" 
        max="50"
        placeholder="Your Class Roll"
        required
        onChange={(e)=>{setData({...data, classroll: e.target.value})}}
        className="form-control mb-3" />

        <div className="form-check mb-3">
          <input 
          className="form-check-input"
          name="checked"
          type="checkbox"
          value="1"
          required
          onChange={(e)=>{setData({...data, checked: e.target.value})}} 
          id="flexCheckDefault" />
          <label className="form-check-label" for="flexCheckDefault">I agree all the agreement.</label>
        </div>
      </div>
  )
};

export default StepThree;
