import "./Carts.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FiTrash } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import Loader from "../../../Loader/Loader";
import Edit from "../Edit/Edit";
function Carts() {
  const [openedit, setopenedit] = useState(false);
  const [userdata, setuserdata] = useState({});
  const [userID, setuserID] = useState("");

  const values = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  function getGradient() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.trunc(Math.random() * values.length);
      color += values[randomNumber];
    }
    return color;
  }

  let Api = "http://localhost:5500/product/allproducts";
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get(Api)
      .then((res) => {
        setUser(res.data.innerData);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, []);

  function deleteAdmin(id) {
    let state = window.confirm("ushbu malumotni o'chirmoqchimsiz?");
    if (state) {
      axios
        .delete(`http://localhost:5500/product/delete/${id}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
    }
  }
  function openEdit(item, id) {
    setopenedit(true);
    setuserdata(item);
    setuserID(id);
  }
  return loader ? (
    <Loader />
  ) : (
    <div className="Allproducts">
      {openedit && (
        <Edit
          Api={Api}
          userID={userID}
          userdata={userdata}
          setopenedit={setopenedit}
        />
      )}
      {user?.map((item, index) => (
        <div key={index} className="cart__pro">
          <div style={{ background: getGradient() }} className="name">
            <button onClick={() => deleteAdmin(item._id)} className="delete">
              <FiTrash />
            </button>
            <MdEdit
              className="editor"
              onClick={() => openEdit(item, item._id)}
            />
            <span>{item.title}</span>
            <div style={{ background: getGradient() }} className="circle">
              {item.quantity}
            </div>
          </div>
          <h4>
            <p>{item.brand}</p>
            <p>{item.price}</p>
          </h4>
          <ul>
            <li>
              <b>Job:</b> {item.description}
            </li>
            <li>
              <b>Age:</b> {item.details[0]}
            </li>
            <li>
              <b>Address: </b>
              {item.images[0]}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Carts;
