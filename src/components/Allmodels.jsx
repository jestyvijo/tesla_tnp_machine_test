import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { data } from "../API/data";
import ReactPaginate from 'react-paginate';

export default function Allmodels({ itemsPerPage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.projects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.projects.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.projects.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div class="container py-5">
          <div className="row">
            <div className="col-md-2" style={{marginTop:"120px"}}>
              <h2>Models</h2>
              <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={""} onChange={(event) => {
                      setSearchTerm(event.target.value)}}/>
                        <label class="form-check-label" for="exampleRadios1">
                          All
                        </label>
                    </div>
              {
                data.projects.map((ke) => (
                  <>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={ke.title} onChange={(event) => {
                      setSearchTerm(event.target.value)}}/>
                        <label class="form-check-label" for="exampleRadios1">
                          {ke.title}
                        </label>
                    </div>

                  </>
                ))
              }
            </div>
            <div className="col-md-10">
              <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <div class="box">
                    <i class="fa fa-search" style={{ color: "black" }}></i>
                    <input type="text" name="" placeholder="search here...." onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }} />
                  </div>
                </div>
                <div class="col-md-2"></div>
              </div>

              <div class="row">
                {currentItems.filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                  }
                }).map((i) => (
                  <>
                    <div class="col-md-4 col-lg-4 mb-4 mb-lg- mt-4">
                      <div class="card">
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0">{i.title}</p>
                          <div
                            class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                            style={{ width: "35px", height: "35px" }}
                          >
                            <p class="text-white mb-0 small fs-2">*</p>
                          </div>
                        </div>
                        <img src={i.image} class="card-img-top" alt="Laptop" />
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small">
                              <a href="#!" class="text-muted">
                                Discount Price
                              </a>
                            </p>
                            <p class="small text-danger">
                              <s>${i.reduceprice}</s>
                            </p>
                          </div>

                          <div class="d-flex justify-content-between mb-3">
                            <h5 class="mb-0">{i.title}</h5>
                            <h5 class="text-dark mb-0">${i.price}</h5>
                          </div>

                          <div class="d-flex justify-content-between mb-2">
                            <p class="text-muted mb-0">
                              Available: <span class="fw-bold">6</span>
                            </p>
                            <div class="ms-auto text-warning">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                          </div>
                          <Link to={`/${i.id}`}>
                            <button
                              style={{
                                backgroundColor: "black",
                                color: "white",
                                boder: "solid black",
                                height: "40px",
                                width: "150px",
                              }}
                            >
                              View details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                  containerClassName={'pagination'}
                  pageLinkClassName={'page-link'}
                  previousLinkClassName={'page-link'}
                  nextLinkClassName={'page-link'}
                  activeLinkClassName={'active'}
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
