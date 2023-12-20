const { Router } = require("express");
const { pro } = require("../model/products");
const { productValidation } = require("../validation/productvalidation");
const product = Router();

// get product
product.get("/allproducts", async (req, res) => {
  let pros = await pro.find();
  if (!pros.length) {
    return res.send({ msg: "products are not found", innerData: pros });
  }
  res.send({ msg: "products are found ", innerData: pros });
});

// create product
product.post("/create", [productValidation], async (req, res) => {
  let newpro = req.body;
  let product = await pro.create(newpro);
  let savedpro = await product.save();
  res.status(201).json({ msg: "product is created", innerData: savedpro });
});
// delete product
product.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  let deletedpro = await pro.findByIdAndDelete(id);
  if (!deletedpro) {
    return res.send({ msg: "product is not found", innerData: deletedpro });
  }
  res.send({ msg: "product is deleted", innerData: deletedpro });
});

// update product
product.put("/update/:id", async (req, res) => {
  let { id } = req.params;
  let updatedpro = req.body;
  let updatePro = await pro.findByIdAndUpdate(id, updatedpro);
  if (!updatePro) {
    return res.send({ msg: "product is not found", innerData: updatePro });
  }
  res.send({ msg: "product is updated ", innerData: updatePro });
});

// send searchdata

product.get("/search", async (req, res) => {
  let { productName } = req.query;
  let products = await pro.find();
  let response = products.filter((p) =>
    p.title.toLowerCase().includes(productName.toLowerCase())
  );
  if (!response.length) {
    return res.send({ msg: "products are not exist", innerData: null });
  }
  res.send({ msg: "products are found", innerData: response });
});

// singlepage
product.get("/single-page/:id", async (req, res) => {
  let { id } = req.params;
  let products = await pro.findById(id);
  res.send({ msg: "products are found", innerData: products });
});

module.exports = { product };
