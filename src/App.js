import './App.css';
import { useState } from 'react';
import StepOne from './Compoents/Forms/StepOne';
import StepTwo from './Compoents/Forms/StepTwo';
import StepThree from './Compoents/Forms/StepThree';
import StepFour from './Compoents/Forms/StepFour';

function App() {
  const [page, setPage] = useState(25);
  const [data, setData] = useState([

  ]);

  const goNextPage = ()=>{
    if (page === 100) return;
    setPage((page) => page + 25);
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    setPage((page) => page + 25);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {/* the progress bar goes here */}
          <div className="progress mt-3">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: `${page}%`}} aria-valuenow={page} aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          {/* the content goes here */}
          <div className="main_area"> 
            {page === 25 && <StepOne setData={setData} data={data} />}
            {page === 50 && (
              <StepTwo setData={setData} data={data} />
            )}
            {page === 75 && (
              <StepThree setData={setData} data={data} />
            )}
            {page === 100 && <StepFour data={data} />}
                    
            {page < 75 && <button className="btn btn-primary" onClick={goNextPage}>Go Next</button>}
            {page === 75 && (
              <button className="btn btn-primary mb-3" type="submit" onClick={(e)=>handleSubmit(e)}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
