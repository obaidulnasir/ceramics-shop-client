import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className="bg-dark my-5">
        <div className="container my-5">
          <div className="row w-50 mx-auto text-center py-5">
            <div className="col">
              <h2 className="text-white">Subscribe Our Newsletter</h2>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  * We'll never share your email with anyone else.
                </small>
                <br />
                <button className="text-center btn btn-outline-light mt-3">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Subscribe;