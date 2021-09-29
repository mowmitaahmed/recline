import React from 'react';

const StepTwo = ({ data, setData }) => {
    return (
        <div className="mb-4">
            <h3 className="mb-4 text-center">Books Information</h3>
            <input 
            type="text" 
            aria-label="booksname"
            name="booksname"
            placeholder="Your Favourite Book"
            required
            onChange={(e)=>{setData({...data, booksname: e.target.value})}}
            className="form-control mb-3" />

            <select
            name="category" 
            aria-label="Default select example"
            required
            onChange={(e)=>{setData({...data, category: e.target.value})}} 
            className="form-select mb-3">
                <option selected>Please Select a Category</option>
                <option value="Programming language">Programming language</option>
                <option value="Data Structure and Algorithms">Data Structure and Algorithms</option>
                <option value="Psychology">Psychology</option>
            </select>

            <input 
            type="text" 
            aria-label="writersname"
            name="writersname"
            placeholder="Writer Name"
            onChange={(e)=>{setData({...data, writersname: e.target.value})}} 
            required
            className="form-control mb-3" />

            <input 
            type="text" 
            aria-label="booktheme"
            name="booktheme"
            placeholder="What's the books main theme?"
            onChange={(e)=>{setData({...data, booktheme: e.target.value})}} 
            required
            className="form-control mb-3" />

            <select
            name="language" 
            aria-label="select language"
            required
            onChange={(e)=>{setData({...data, language: e.target.value})}} 
            className="form-select mb-3">
                <option selected>Please Select a Language</option>
                <option value="English">English</option>
                <option value="Bangla">Bangla</option>
                <option value="Spanish">Spanish</option>
            </select>

        </div>
    );
};

export default StepTwo;