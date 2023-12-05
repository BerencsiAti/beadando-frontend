import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [pizzas, setPizza] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadPizzas();
  }, []);

  const loadPizzas = async () => {
    const result = await axios.get("http://localhost:8080/pizzas");
    setPizza(result.data);
  };

  const deletePizza = async (id) => {
    await axios.delete(`http://localhost:8080/pizza/${id}`);
    loadPizzas();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Név</th>
              <th scope="col">Íz</th>
              <th scope="col">Ár</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map((pizza, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{pizza.name}</td>
                <td>{pizza.flavor}</td>
                <td>{pizza.price}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewpizza/${pizza.id}`}
                  >
                    Megtekintés
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editpizza/${pizza.id}`}
                  >
                    Szerkesztés
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePizza(pizza.id)}
                  >
                    Törlés
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
