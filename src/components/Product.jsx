import { Button } from "keep-react";
import Image from "next/image";

const Product = ({ product }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center  gap-12 mx-4 my-12">
        <div className="flex gap-3 justify-end">
          <div className="flex flex-col gap-3 mt-4">
            <div className="p-[2px] border-2 border-black bg-white">
              <Image
                className=""
                src={"/product.png"}
                height={100}
                width={70}
                alt="product_image"
              />
            </div>
            <div className="p-[2px] border-2 border-black bg-white">
              <Image
                className=""
                src={"/product.png"}
                height={100}
                width={70}
                alt="product_image"
              />
            </div>
            <div className="p-[2px] border-2 border-black bg-white">
              <Image
                className=""
                src={"/product.png"}
                height={100}
                width={70}
                alt="product_image"
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={"/product.png"}
              height={700}
              width={550}
              alt="product_image"
            />
          </div>
        </div>
        <div>
          <p className="bg-[#F0F2F2] w-fit p-1">STYLUM</p>
          {/* product details  */}
          <div>
            <h2 className=" text-4xl font-serif my-4">
              Stellar Dainty Diamond Hoop E Stellar Dainty Diamond
            </h2>
            <h4 className="mx-6 text-xl font-semibold my-3">DESCRIPTION</h4>
            <div className="h-[1.5px] bg-gray-700 mb-4"></div>
            <div>
              <p className="font-semibold mx-6">ABOUT PRODUCT</p>
              <p className="text-gray-600 mx-6 text-sm">
                {product?.description}
              </p>
              <hr className="my-2" />
            </div>
            <div>
              <p className="font-semibold mx-6">ITEM:</p>
              <small className="text-gray-600 mx-6">{product?.item}</small>
              <hr className="my-2" />
            </div>
            <div>
              <div className="flex justify-between gap-2 items-center">
                <div className="ml-6">
                  <p className="font-semibold">Category:</p>
                  <small className="text-gray-600">{product?.category}</small>
                </div>
                <div className="mr-6">
                  <p className="font-semibold">Carat:</p>
                  <small className="text-gray-600">
                    {product?.carat} carat
                  </small>
                </div>
              </div>
              <hr className="my-2" />
            </div>
            <div>
              <p className="font-semibold mx-6">Made In:</p>
              <small className="text-gray-600 mx-6">{product?.origin}</small>
              <hr className="my-2" />
            </div>
            <div>
              <p className="font-semibold mx-6">PRICE TOTAL:</p>
              <h4 className="text-xl font-semibold mx-6">₹ {product?.price}</h4>
              <hr className="my-2" />
            </div>
          </div>
          {/* action buttons */}
          <div className="mt-12 flex gap-4 mx-6">
            <Button className="cursor-pointer w-full py-2 text-white text-sm rounded-full uppercase bg-green-700">
              Call
            </Button>
            <Button className="cursor-pointer w-full py-2 text-white text-sm rounded-full uppercase bg-indigo-900">
              Chat
            </Button>
            <Button className="cursor-pointer w-full py-2 text-white text-sm rounded-full uppercase bg-gray-800">
              share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
