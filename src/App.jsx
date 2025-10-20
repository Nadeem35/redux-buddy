import React from "react";

const App = () => {
  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", margin: "20px", textAlign: "center" }}
      >
        <img
          src="https://media.istockphoto.com/id/1463345481/photo/success-inspirational-quote.jpg?s=612x612&w=0&k=20&c=axDUehro7LUi5EqSIYCZLH8-llCrf30pnpKzS5lSikk="
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h1 className="card-title">Counter</h1>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
