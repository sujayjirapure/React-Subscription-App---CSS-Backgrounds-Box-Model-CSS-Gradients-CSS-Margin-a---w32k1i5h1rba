import React from "react";
import "../styles/App.css";
const App = () => {
  return (
     <div className="container">
      <div className="community box">
        <h2>Community</h2>
        <p>Free</p>
      </div>
      <div className="card box">
        <h2>Starter</h2>
        <p>$9.99/month</p>
      </div>
      <div className="why-us box">
        <h2>Pro</h2>
        <p>$19.99/month</p>
        <p>Unlock all features, including:</p>
        <ul>
          <li>Unlimited access to all courses</li>
          <li>Expert support from our team</li>
          <li>Advanced analytics and reporting</li>
        </ul>
        <button>Subscribe now</button>
      </div>
    </div>
  );
};

export default App;
