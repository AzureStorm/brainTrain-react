import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
const QueryResult = () => {
  const [term, setTerm] = useState(localStorage.getItem("query"));
  const [results, setResults] = useState(["Search Results"]);

  useEffect(() => {
    axios
      .post(`/api/query`, {
        term: term,
      })
      .then((res) => {
        const info = res.data;
        setResults(info);
        console.log("results: ");
        console.log(results);
        localStorage.removeItem("query");
      });
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("He!! devy" + term);
    axios
      .post(`/api/query`, {
        term: term,
      })
      .then((res) => {
        const info = res.data;
        setResults(info);
        console.log("results: ");
        console.log(results);
      });
  };

  const onTextChange = (event) => {
    setTerm(event);
    console.log("State is: " + event);
  };

  const renderedResults = results.map((item, index) => {
    return (
      <tr>
        <td>
          <div class="d-flex px-2 py-1">
            <p class="text-xs font-weight-bold mb-0">
              &nbsp;&nbsp;&nbsp;{index + 1}
            </p>
          </div>
        </td>
        <td>
          <p class="text-xs font-weight-bold mb-0">{item.topic}</p>
        </td>
        <td>
          <div class="align-middle text-center">
            <p class="text-xs text-secondary mb-0">{item.description}</p>
          </div>
        </td>
        <td class="align-middle">
          <button
            class="btn btn-link text-secondary mb-0"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <a href={item.href + ".html"}>
              <i class="fa fa-eye text-xs" aria-hidden="true"></i>
            </a>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div class="container-fluid py-4 tab-content">
        <Form
          onSubmit={(e) => {
            onFormSubmit(e);
          }}
        >
          <Form.Group className="mb-3" controlId="formQuery">
            <Form.Label>Search</Form.Label>
            <Form.Control
              onChange={(event) => onTextChange(event.target.value)}
              type="text"
              placeholder="Enter lesson description"
              value={term}
            />
            <Form.Text></Form.Text>
          </Form.Group>
        </Form>
        <div id="reading" class="tab-pane fade in show active">
          <div class="card">
            <div class="table-responsive">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      No.
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                      Topic
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Description
                    </th>
                    <th class="text-secondary opacity-7"></th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>

                <tbody>{renderedResults}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryResult;
