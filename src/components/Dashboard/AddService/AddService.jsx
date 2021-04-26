import React, { useState } from "react";

const AddService = () => {
  const [file, setFile] = useState(null);

  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("categories", info.categories);
    formData.append("productPrice", info.productPrice);
    formData.append("discount", info.discount);
    formData.append("productsOff", info.productsOff);
    formData.append("tags", info.tags);
    formData.append("description", info.description);
    formData.append("subdescription", info.subdescription);

    fetch("https://peaceful-caverns-55095.herokuapp.com/addProducts", {
      method: "POST",
      // headers: {'content-Type':'application/json'},
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Service Added Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  return (
    <div className="pt-5">
      <div className="container mt-5 mb-5">
        <div className="row ">
          <form className="form-group col-sm-8" onSubmit={handleSubmit}>
            <input
              className="form-control my-3"
              placeholder="Product Name"
              onBlur={handleBlur}
              name="name"
            />
            <input
              className="form-control my-3"
              placeholder="Categories"
              onBlur={handleBlur}
              name="categories"
            />
            <input
              className="form-control my-3"
              placeholder="Tags"
              onBlur={handleBlur}
              name="tags"
            />

            <input
              className="form-control my-3"
              onBlur={handleBlur}
              placeholder="Product Price"
              name="productPrice"
            />

            <input
              className="form-control my-3"
              placeholder="product discount "
              onBlur={handleBlur}
              name="discount"
            />

            <input
              className="form-control my-3"
              onBlur={handleBlur}
              placeholder="Product Discount On/Off "
              name="productsOff"
            />
            <input
              className="form-control my-3"
              onBlur={handleBlur}
              placeholder="star ratings "
              name="starRatings"
            />

            <input
              type="file"
              className="form-control my-3"
              onChange={handleFileChange}
            />

            <textarea
              className="form-control my-3"
              placeholder="Description"
              onBlur={handleBlur}
              name="description"
            ></textarea>
            <textarea
              className="form-control my-3"
              placeholder="Sub Description"
              onBlur={handleBlur}
              name="subdescription"
            ></textarea>

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
