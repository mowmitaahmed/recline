import React from "react";

const StepFour = ({ data}) => {
  var stars = [];
  const { name, email, username, address, about, booksname, category, writersname, booktheme, language, rating, review, schoolname, classroll, checked} = data;
  
  for(var i = 0; i < rating; i++) {
    stars.unshift(
      <label>⭐</label>
    );
  }
  for(var j = 0; j < 5-rating; j++) {
    stars.push('★');
  }
  console.log('Stars: ', stars);
  return (
      <div className="row mb-4">
        <h3 className="my-3 text-center">Your Form is submitted successfully!</h3>
        <div className="col-md-6">
          <h5>Name:</h5>
          <p>{name}</p>
        </div>
        <div className="col-md-6">
          <h5>Email:</h5>
          <p>{email}</p>
        </div>
        <div className="col-md-6">
          <h5>Username:</h5>
          <p>{username}</p>
        </div>
        <div className="col-md-6">
          <h5>Address:</h5>
          <p>{address}</p>
        </div>
        <div className="col-md-6">
          <h5>About:</h5>
          <p>{about}</p>
        </div>
        <div className="col-md-6">
          <h5>Book Name:</h5>
          <p>{booksname}</p>
        </div>
        <div className="col-md-6">
          <h5>Category:</h5>
          <p>{category}</p>
        </div>
        <div className="col-md-6">
          <h5>Book Writer Name:</h5>
          <p>{writersname}</p>
        </div>
        <div className="col-md-6">
          <h5>Theme of the book:</h5>
          <p>{booktheme}</p>
        </div>
        <div className="col-md-6">
          <h5>Language of the book:</h5>
          <p>{language}</p>
        </div>
        <div className="col-md-6">
          <h5>Rating:</h5>
          <p>{stars}</p>
        </div>
        <div className="col-md-6">
          <h5>Name:</h5>
          <p>{name}</p>
        </div>
        <div className="col-md-6">
          <h5>Review:</h5>
          <p>{review}</p>
        </div>
        <div className="col-md-6">
          <h5>School Name:</h5>
          <p>{schoolname}</p>
        </div>
        <div className="col-md-6">
          <h5>Your Class Roll:</h5>
          <p>{classroll}</p>
        </div>
        <div className="col-md-6">
          <h5>Agreement:</h5>
          {checked ? <p>Agreement is checked</p> : <p>Agreement isn't checked</p>}
        </div>
      </div>
      )
};

export default StepFour;
