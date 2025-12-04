import React from "react";
function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 m-5">
        <hr />
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="fs-2 fw-lighter">
                  Account Opening
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <ul class="list-group list-group-flush py-3 fw-light">
                    <li className="list-group-item ">
                      <a
                        href="https://github.com/aaribanwar/StockTrading"
                        className="link-underline link-underline-opacity-0"
                      >
                        Residential Individual
                      </a>
                    </li>
                    <li className="list-group-item ">
                      <a
                        href="https://github.com/aaribanwar/StockTrading"
                        className="link-underline link-underline-opacity-0"
                      >
                        Minor
                      </a>
                    </li>
                    <li className="list-group-item ">
                      <a
                        href="https://github.com/aaribanwar/StockTrading"
                        className="link-underline link-underline-opacity-0"
                      >
                        Non Resident Indian (NRI)
                      </a>
                    </li>
                    <li className="list-group-item ">
                      <a
                        href="https://github.com/aaribanwar/StockTrading"
                        className="link-underline link-underline-opacity-0"
                      >
                        Company, Partnership, HUF, and LLP
                      </a>
                    </li>
                    <li className="list-group-item ">
                      <a
                        href="https://github.com/aaribanwar/StockTrading"
                        className="link-underline link-underline-opacity-0"
                      >
                        Glossary
                      </a>
                    </li>
                  </ul>
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-4">
          <div className="container m-3 p-3" id="ticketWarning">
            <p className="text-secondary">
              Some of our clients are facing issues connecting with our support
              team over call due to an issue with our vendors. Please create a
              ticket on our Support Portal for any queries in the meantime. We
              are working on having the issues resolved at the earliest. We
              regret the inconvenience caused.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
