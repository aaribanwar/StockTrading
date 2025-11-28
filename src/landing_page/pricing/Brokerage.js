import React from "react";

function Brokerage() {
  return (
    <div className="container text-center">
      <div className="row p-5">
        <table className="table table-striped m-2">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Currency futures</th>
              <th scope="col">Currency options</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">Brokerage</th>
              <td>0.03% or ₹ 20/executed order whichever is lower</td>
              <td>₹ 20/executed order</td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">STT/CTT</th>
              <td>No STT</td>
              <td>No STT</td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">Transaction charges</th>
              <td>
                NSE: 0.00035% <br />
                BSE: 0.00045%
              </td>
              <td>
                NSE: 0.0311% <br />
                BSE: 0.001%
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row p-5">
        <h1 className="fs-3">
          Calculate your costs upfront using our brokerage calculator
        </h1>
      </div>

      <div className="row">
        <h1 className="fs-3 p-5">
          Charges for Account Opening
        </h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Type of Account</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Online Account</th>
              <td>Free</td>
            </tr>
            <tr>
              <th scope="row">Offline Account</th>
              <td>Free</td>
            </tr>
            <tr>
              <th scope="row">NRI Account (offline only)</th>
              <td>₹ 500</td>
            </tr>
            <tr>
              <th scope="row">Partnership, LLP, HUF, or Corporate accounts (offline only)</th>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
