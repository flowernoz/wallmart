import "./Edit.css";
import "../CreateData/CreateData.css";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Edit({ setopenedit, userdata, userID, Api }) {
  const [editData, setEditData] = useState(userdata);
  document.body.setAttribute("style", "overflow:hidden");

  //* SEND DATA FUNCTION //////////////////
  function senddata(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    data.quantity = 0;
    data.images = editData.images;
    data.details = editData.details;
    axios
      .put(`http://localhost:5500/product/update/${editData._id}`, data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
        }
        // toast.success(res.statusText, {
        //   autoClose: 1500,
        //   position: "top-center",
        //   hideProgressBar: true,
        // });
        // closeFunc()
        // setopenedit(false)
        // window.location.reload();
      })
      .catch((err) => console.log(err));
  }
  console.log(editData.details);
  //*CLOSE FUNCTION /////////////////////
  function closeFunc() {
    document.body.setAttribute("style", "overflow:scroll");
    setopenedit(false);
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeFunc();
    }
  });

  return (
    <div className="Edit">
      <div className="container">
        <div onClick={closeFunc} className="closeButton">
          <MdClose className="closeEdit" />
        </div>
        <h1 className="text-center">Edit User</h1>
        <form onSubmit={senddata} className="registration-form ">
          <label>
            <span className="label-text">Title</span>
            <input
              value={editData.title}
              required
              name="title"
              type="text"
              onChange={(e) => setEditData(e.target.value)}
            />
          </label>
          <label>
            <span className="label-text">Brand</span>
            <input
              value={editData.brand}
              required
              name="brand"
              type="text"
              onChange={(e) => setEditData(e.target.value)}
            />
          </label>
          <label>
            <span className="label-text">Price</span>
            <input
              value={editData.price}
              required
              type="text"
              name="price"
              onChange={(e) => setEditData(e.target.value)}
            />
          </label>
          <label>
            <span className="label-text">Description</span>
            <input
              value={editData.description}
              required
              name="description"
              type="text"
              onChange={(e) => setEditData(e.target.value)}
            />
          </label>
          <label>
            <span className="label-text">Details</span>
            <textarea
              value={editData.details}
              onChange={(e) => setEditData(e.target.value)}
              required
            >
              {editData.details}
            </textarea>
            {/* <input
              value={editData.details}
              onChange={(e) => setEditData(e.target.value)}
              required
              type="text"
            /> */}
          </label>
          <label>
            <span className="label-text">Images</span>
            <input
              value={editData.images}
              onChange={(e) => setEditData(e.target.value)}
              required
              type="text"
              className="edit_image"
            />
          </label>
          <label>
            <span className="label-text">Category</span>
            <select name="category">
              <option value="fashion">Fashion</option>
              <option value="tires">Tires</option>
            </select>
          </label>

          <div className="text-center">
            <button className="submit">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
