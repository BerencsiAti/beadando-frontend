import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditPizza() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [pizza, setPizza] = useState({
    name: "",
    flavor: "",
    price: "",
  });

  const { name, flavor, price } = pizza;

  const onInputChange = (e) => {
    setPizza({ ...pizza, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPizza();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/pizza/${id}`, pizza);
    navigate("/");
  };

  const loadPizza = async () => {
    const result = await axios.get(`http://localhost:8080/pizza/${id}`);
    setPizza(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Pizza</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Add meg a pizza nevét"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Flavor" className="form-label">
                Íz
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Add meg a típusát a pizzának"
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
                placeholder="Add meg az árát!"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Megerősítés
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
