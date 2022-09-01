import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import {data} from "./data"
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
//const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState(data);


  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => setTours([])}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }

 
  return (
    <main>
      <Tours tours={data} removeTour = {removeTour}/>
    </main>
  );
}

export default App;
