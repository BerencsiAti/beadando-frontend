import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewPizza() {
  const [pizza, setPizza] = useState({
    name: "",
    flavor: "",
    price: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadPizza();
  }, []);

  const loadPizza = async () => {
    const result = await axios.get(`http://localhost:8080/pizza/${id}`);
    setPizza(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Pizza részletek:</h2>

          <div className="card">
            <div className="card-header">
              id : {pizza.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Név: </b>
                  {pizza.name}
                </li>
                <li className="list-group-item">
                  <b>Íz: </b>
                  {pizza.flavor}
                </li>
                <li className="list-group-item">
                  <b>Ár: </b>
                  {pizza.price}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}