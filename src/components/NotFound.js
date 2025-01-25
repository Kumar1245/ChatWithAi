import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="section">
    <div className="container mt-5">
      <div className="page-error">
        <div className="page-inner">
          <h1>404</h1>
          <div className="page-description">
            The page you were looking for could not be found.
          </div>
          <div className="page-search">
            <div className="mt-3">
              <Link to="/">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
);

export default NotFound;
