import React, { useEffect, useState } from "react";
import { requests } from "../../api/requests";
import FeatherIcon from "feather-icons-react";
import "./shop.css";

export default function Shop({ history }) {
  const [items, setItems] = useState([]);
  let effect = async () => {
    try {
      let res = await requests.products.getRestaurants();
      setItems(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    effect();
  }, []);
  function onEditClick(item) {
    history.push({pathname:"/restaurant-edit", state:{item}});
  }
  function onadd(){
    history.push("/add-restaurant")
  }
  return (
    <div className="item-container">
      <div className="add-container">
      <button className="add" onClick={onadd}>Add Restaurant</button>
      </div>
      {items.map((e, i) => {
        return (
          
          <div className="item" key={i}>
            <img src={e.photo_url} />
            <div className="foodsname">
              <div className="names">
                <h1>{e.name}</h1>
                {e.description}
              </div>
              <div className="button">
                <button>
                  {" "}
                  <FeatherIcon icon={"trash-2"} />
                  <p>Dalete</p>
                </button>
                <button>
                  {" "}
                  <FeatherIcon icon={"edit"} />
                  <p onClick={()=>onEditClick(e)}>Edit</p>{" "}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
