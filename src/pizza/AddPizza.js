import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddPizza() {
  let navigate = useNavigate();

  const [pizza, setPizza] = useState({
    name: "",
    flavor: "",
    price: ""
  });

  const { name, flavor, price } = pizza;

  const onInputChange = (e) => {
    setPizza({ ...pizza, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/pizza", pizza);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Pizza hozzáadása</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Név
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Nevezze el a pizzát"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Íz" className="form-label">
                Íz
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Adja meg a pizza ízesítését"
                name="flavor"
                value={flavor}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Price" className="form-label">
                Ár
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Adja meg az árát"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Kész
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Kilépés
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
