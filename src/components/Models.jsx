import React from "react";
import {Link} from 'react-router-dom';
export default function Models() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div class="card">
              <img src="compositor.jpg" class="card-img-top" alt="car1" />
              <div class="card-body">
                <h3 class="card-title">Model S</h3>
                <p class="card-text">
                  Model S Dual Motor All-Wheel Drive Pearl White Multi-Coat
                  Paint 19" Tempest Wheels All Black Premium Interior with Ebony
                  Décor Steering Wheel
                </p>
                <Link to="/model" class="btn btn-primary">
                  More Product
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card">
              <img src="compositor1.jpg" class="card-img-top" alt="car2" />
              <div class="card-body">
                <h3 class="card-title">Model 3</h3>
                <p class="card-text">
                  Model 3 Rear-Wheel Drive Midnight Silver Metallic Paint 18’’
                  Aero Wheels All Black Partial Premium Interior Autopilot
                </p>
                <Link to="/model" class="btn btn-primary">
                  More Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
