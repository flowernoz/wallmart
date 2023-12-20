import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateData.css";
import { useState } from "react";

function CreateData() {
  let Api = "http://localhost:5500/product/create";
  const [images, setImages] = useState("");
  const [details, setDetails] = useState("");
  let sendData = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    data.images = images.split(" ");
    data.details = details.split("\n");
    data.quantity = 0;
    axios
      .post(Api, data)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          toast.success(res.statusText, {
            autoClose: 1500,
            position: "top-center",
            hideProgressBar: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="CreateData">
      <h1 className="text-center">Create Data</h1>
      <ToastContainer />
      <form className="FormData" onSubmit={sendData}>
        <div className="inputs">
          <input placeholder="Title" required name="title" type="text" />
          <input placeholder="Price" required type="number" name="price" />
          <input placeholder="Brand" required name="brand" type="text" />
          <input
            placeholder="Description"
            required
            type="text"
            name="description"
          />
          <select name="category">
            <option value="fashion">Fashion</option>
            <option value="tires">Tires</option>
            <option value="toys">Toys</option>
          </select>
          <input
            placeholder="Images"
            required
            type="text"
            onChange={(e) => setImages(e.target.value)}
            value={images}
          />
          <textarea
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            placeholder="Details"
            cols="35"
            rows="4"
          ></textarea>
        </div>

        <div className="text-center">
          <button className="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateData;
