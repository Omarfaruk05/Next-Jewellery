"use client";

import {
  Button,
  Input,
  Label,
  Spinner,
  Textarea,
  Tooltip,
  Typography,
  Upload,
} from "keep-react";
import Image from "next/image";
import { Info, CloudArrowUp } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";

const CreateProductPage = () => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    const data = new FormData();
    data.append("image", acceptedFiles[0]);

    fetch(
      "https://api.imgbb.com/1/upload?key=d93b2967fa5ed86d686b286dab147db4",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => setImages(data.data.url));
  }, []);

  useEffect(() => {
    if (images) {
      setFiles([]);
    }
  }, [images]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const item = e.target.item.value;
    const carat = e.target.carat.value;
    const origin = e.target.origin.value;
    const price = Number(e.target.price.value);
    const description = e.target.description.value;
    const data = {
      name,
      category,
      item,
      carat,
      origin,
      price,
      description,
      images: [images],
    };

    const stringifiedData = JSON.stringify(data);
    console.log(stringifiedData);

    fetch("https://next-jewellery.vercel.app/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringifiedData,
    })
      .then((res) => {
        if (res.headers.get("content-type")?.includes("application/json")) {
          return res.json();
        }
        throw new Error("Response is not in JSON format");
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Fetch error:", error));
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="my-3 text-5xl font-semibold ">Upload Info</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <h4 className="text-xl font-semibold my-2">Product Details</h4>
            <div className="md:flex gap-4 justify-center items-center w-full">
              <div className="md:w-1/2">
                <fieldset className="max-w-md space-y-1">
                  <Label>Enter Product Name</Label>
                  <Input
                    name="name"
                    id="name"
                    placeholder="Enter Product Name"
                    type="text"
                    required
                  />
                </fieldset>
                <fieldset className="max-w-md space-y-1">
                  <Label>Enter Category</Label>
                  <Input
                    name="category"
                    id="category"
                    placeholder="Enter Category"
                    type="text"
                    required
                  />
                </fieldset>
                <fieldset className="max-w-md space-y-1">
                  <Label>Enter Item</Label>
                  <Input
                    name="item"
                    id="item"
                    placeholder="Enter Item"
                    type="text"
                    required
                  />
                </fieldset>
                <fieldset className="max-w-md space-y-1">
                  <Label>Enter Carat</Label>
                  <Input
                    name="carat"
                    id="carat"
                    placeholder="Enter Carat"
                    type="text"
                    required
                  />
                </fieldset>
                <fieldset className="max-w-md space-y-1">
                  <Label>Enter Origin</Label>
                  <Input
                    name="origin"
                    id="origin"
                    placeholder="Enter Origin"
                    type="text"
                    required
                  />
                </fieldset>
                <fieldset className="max-w-md space-y-1">
                  <Label>Enter Price</Label>
                  <Input
                    name="price"
                    id="price"
                    placeholder="Enter Price"
                    type="number"
                    required
                  />
                </fieldset>
                <fieldset className="max-w-md space-y-1">
                  <Label>Enter Description</Label>
                  <Textarea
                    name="description"
                    id="description"
                    placeholder="Enter Description"
                    type="text"
                    required
                  />
                </fieldset>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <Upload options={{ onDrop }}>
                  {!images ? (
                    <Upload.Body className="border-2 border-dashed m-4 border-slate-800">
                      <CloudArrowUp size={150} />

                      <Upload.Text>
                        <Typography
                          variant="p"
                          className="text-body-3 font-medium text-metal-600"
                        >
                          Upload a Image or drag it here
                        </Typography>
                      </Upload.Text>
                    </Upload.Body>
                  ) : (
                    <div className="">
                      <Image
                        className="rounded-md mx-auto"
                        width={200}
                        height={200}
                        src={images}
                        alt="uploaded_image"
                      />
                    </div>
                  )}

                  <Upload.Footer isFileExists={files.length > 0}>
                    <Typography
                      variant="p"
                      className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600"
                    >
                      <Info size={16} />
                      Uploaded Files
                    </Typography>
                    <Typography variant="ul" className="space-y-1 mx-auto">
                      <div className="text-center mt-2">
                        <Spinner className="" color="info" size="md" />
                      </div>
                    </Typography>
                  </Upload.Footer>
                </Upload>
                <div className="flex justify-center">
                  {images ? (
                    <Button
                      className="text-center mt-12 py-1 px-8 rounded-full bg-[#0C2B63] text-white"
                      type="submit"
                    >
                      ADD
                    </Button>
                  ) : (
                    <Tooltip
                      content="Please select photo"
                      trigger="hover"
                      placement="top"
                      animation="duration-300"
                      style="dark"
                    >
                      <Button
                        className="text-center mt-12 py-1 px-8 rounded-full bg-[#0C2B63] text-white"
                        disabled
                      >
                        ADD
                      </Button>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductPage;
