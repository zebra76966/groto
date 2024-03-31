import React, { useState, useEffect } from "react";

const FilterCard = ({ setFilters, setIsloading }) => {
  function convertToIndianNumberingSystem(price) {
    if (price >= 10000000) {
      return (price / 10000000).toFixed(1) + " Cr";
    } else if (price >= 100000) {
      return (price / 100000).toFixed(1) + " Lac";
    } else if (price >= 1000) {
      return (price / 1000).toFixed(1) + " K";
    } else {
      return price.toString();
    }
  }

  const [udata, setUdata] = useState({
    budgetFrom: 100000,
    budgetTo: 95000000,
    searchTerm: "",
    selectedRating: "",
  });

  const handleApplyFilters = () => {
    // This is just to create a simulation==>
    // In real app this will be sent to an endpoint and the data will be fethced from the server for better optimization

    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      setFilters({
        search: udata.searchTerm,
        price: { min: udata.budgetFrom, max: udata.budgetTo },
        avg_ratings: udata.selectedRating,
      });
    }, 3000);
  };

  useEffect(() => {
    const sliderEl = document.getElementById("customRange4");
    const sliderEl2 = document.getElementById("customRange5");

    const rangeDistance = 95000000 - 0;
    const fromPosition = udata.budgetFrom - 0;
    const toPosition = udata.budgetTo - 0;

    sliderEl.style.background = `linear-gradient(
        to left,
        #ccc 0%,
        #ccc ${(fromPosition / rangeDistance) * 95000000}%,
        #533fdb ${(fromPosition / rangeDistance) * 100}%,
        #533fdb ${(toPosition / rangeDistance) * 100}%, 
        #ccc ${(toPosition / rangeDistance) * 100}%, 
        #ccc 100%)`;

    sliderEl2.style.background = `linear-gradient(
            to right,
            #ccc 0%,
            #ccc ${(fromPosition / rangeDistance) * 100}%,
            #533fdb ${(fromPosition / rangeDistance) * 100}%,
            #533fdb ${(toPosition / rangeDistance) * 100}%, 
            #ccc ${(toPosition / rangeDistance) * 100}%, 
            #ccc 100%)`;
  }, [udata.budgetFrom, udata.budgetTo]);

  return (
    <div className="card w-100 border-0 shadow-sm">
      <div className="card-body ">
        <div className="w-100 d-flex align-items-center justify-content-between">
          <div className="d-flex pt-2 my-3">
            <img src="./icons/filter.svg" className="me-2" />
            <h5 className="card-title  py-0 my-0">Filters</h5>
          </div>
          <button
            className="text-primary btn bg-white border-0 "
            onClick={() => {
              setFilters({
                search: "",
                price: { min: 0, max: Infinity },
                avg_ratings: 0,
              });
              setUdata({
                budgetFrom: 100000,
                budgetTo: 95000000,
                searchTerm: "",
                selectedRating: "",
              });
            }}
          >
            Clear All
          </button>
        </div>

        <form className="form">
          <div className="form-search">
            <img src="./icons/search.svg" className="search" />
            <input
              type="text"
              className="form-control form-input bg-light border-0"
              placeholder='Search by "Developer" '
              value={udata.searchTerm}
              onChange={(e) => setUdata({ ...udata, searchTerm: e.target.value })}
            />
          </div>
          <hr className="my-4" style={{ opacity: "0.1" }} />
          <div className="d-flex pt-2 my-3">
            <img src="./icons/moneys.svg" className="me-2" />
            <h5 className="card-title  py-0 my-0">Price</h5>
          </div>
          <div className="w-100 position-relative mt-4">
            <div className="durange">
              <input
                type="range"
                className="custom-range"
                id="customRange4"
                min={1}
                max={95000000 - 1}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  const newBudgetFrom = newValue <= udata.budgetTo - 1 ? newValue : udata.budgetFrom;
                  setUdata({ ...udata, budgetFrom: newBudgetFrom });
                }}
                value={udata.budgetFrom}
              />

              <input
                type="range"
                className="custom-range custom-2"
                id="customRange5"
                min={2}
                max={95000000}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  const newBudgetTo = newValue > udata.budgetFrom + 1 ? newValue : udata.budgetTo;
                  setUdata({ ...udata, budgetTo: newBudgetTo });
                }}
                value={udata.budgetTo}
              />
            </div>
            <label className="form-label fs-6 w-100 pt-4" htmlFor="customRange4">
              <p className="text-secondary">
                €{convertToIndianNumberingSystem(udata.budgetFrom)} - €{convertToIndianNumberingSystem(udata.budgetTo)}
              </p>
            </label>
          </div>
          <hr className="my-4" style={{ opacity: "0.1" }} />
          <div className="d-flex pt-2 my-3">
            <img src="./icons/Vector.svg" className="me-2" />
            <h5 className="card-title  py-0 my-0">Ratings</h5>
          </div>
          <div className="ratings">
            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={4.5} onChange={(e) => setUdata({ ...udata, selectedRating: e.target.value })} />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                4.5+
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={4} onChange={(e) => setUdata({ ...udata, selectedRating: e.target.value })} />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                4+
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value={3.5} onChange={(e) => setUdata({ ...udata, selectedRating: e.target.value })} />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                3.5+
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" value={3} onChange={(e) => setUdata({ ...udata, selectedRating: e.target.value })} />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                3+
              </label>
            </div>
          </div>
        </form>

        <button className="btn btn-lg btn-primary w-100 mt-4" type="button" onClick={handleApplyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
