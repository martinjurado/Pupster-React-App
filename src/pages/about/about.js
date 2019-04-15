import React from "react";
import Header from "../../components/header/header";
import "./style.css";

function About() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col caption">
            <h4>What is Pupster?</h4>
            <p>
              Ready to meet your next companion? You've come to the right place!
              This web application will serve as your guide to the canine world.
              You can view and like different dogs of your choice. You can also
              search a wide array of breeds.
            </p>
          </div>

          <div className="col caption">
            <h4>Technologies Used</h4>
            <p>
              Ready to meet your next companion? You've come to the right place!
              This web application will serve as your guide to the canine world.
              You can view and like different dogs of your choice. You can also
              search a wide array of breeds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
