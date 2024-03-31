"use client";

import Image from "next/image";
import {
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
  InstagramLogo,
} from "phosphor-react";

const Footer = () => {
  return (
    <div>
      <div className="h-[1.5px] bg-gray-700 my-4"></div>
      <div className="max-w-7xl mx-auto px-2">
        <div>
          <div className="md:flex md:gap-11 flex-wrap">
            <div>
              <div>
                <h4 className=" font-semibold font-serif my-4">
                  ONLINE SHOPPING
                </h4>
                <ul className="text-gray-500 text-sm">
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
                  <li>Home & Living</li>
                  <li>Beauty</li>
                  <li>Gift Cards</li>
                </ul>
              </div>
              <div>
                <h4 className=" font-semibold font-serif my-4">USEFUL LINKS</h4>
                <ul className="text-gray-500 text-sm">
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Site Map</li>
                  <li>Corporate Information</li>
                  <li>Whitehat</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className=" font-semibold font-serif my-4">
                ONLINE SHOPPING
              </h4>
              <ul className="text-gray-500 text-sm">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>T&C</li>
                <li>Terms Of Use</li>
                <li>Track Orders</li>
                <li>Shipping</li>
                <li>Cancellation</li>
                <li>Returns</li>
                <li>Privacy Policy</li>
                <li>Grevancy Officer</li>
              </ul>
            </div>
            <div>
              <h4 className=" font-semibold font-serif my-4">
                EXPERIENCE MOBILE APP
              </h4>
              <div className="flex gap-2">
                <Image
                  width={120}
                  height={10}
                  src={"/GooglePlay.png"}
                  alt="google_play"
                />
                <Image
                  width={120}
                  height={10}
                  src={"/AppStore.png"}
                  alt="google_play"
                />
              </div>
              <p className="mt-6 mb-1">KEEP IN TOUCH</p>
              <div className="flex gap-3">
                <FacebookLogo
                  className="cursor-pointer"
                  size={20}
                  color="#444"
                />
                <TwitterLogo
                  className="cursor-pointer"
                  size={20}
                  color="#444"
                />
                <YoutubeLogo
                  className="cursor-pointer"
                  size={20}
                  color="#444"
                />
                <InstagramLogo
                  className="cursor-pointer"
                  size={20}
                  color="#444"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <div>
                  <Image
                    width={36}
                    height={36}
                    src={"/Original.png"}
                    alt="original_logo"
                  />
                </div>
                <div>
                  <h5 className="font-semibold">100% ORIGINAL GUARNTEE</h5>
                  <p className="text-sm text-gray-500">For All Products</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <Image
                    width={36}
                    height={36}
                    src={"/icon.png"}
                    alt="original_logo"
                  />
                </div>
                <div>
                  <h5 className="font-semibold">RETURN WITHIN 30 DAYS</h5>
                  <p className="text-sm text-gray-500">Return within 30 days</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className=" font-semibold font-serif my-4">JOIN US</h4>
              <div>
                <small className="text-gray-500 uppercase">
                  Subscribe to our newsletters
                </small>
                <form className="flex flex-col gap-2">
                  <input
                    className="rounded-full bg-[#F9F2E6] my-1 -ml-1 border-[2px]  p-2 border-[#000000]"
                    placeholder="Email Address"
                    type="email"
                  />
                  <input
                    className="bg-[#0C2B63] p-2 rounded-full text-white"
                    type="submit"
                    value="SUBSCRIBE"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="my-12">
            <h4 className="font-semibold font-serif mb-4">POPULAR SEARCHES</h4>
            <small className=" text-gray-500">
              Makeup | Dresses For Girls | T-Shirts | Sandals Headphones |
              Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags |
              Sport Shoes | Reebok Shoes | Puma Shoes | Boxers Wallets Tops |
              Earrings | FastTrack | Watches Kurtis | Nike Smart Watches | Titan
              Watches | Designer Blouse | Gowns Rings | Cricket Shoes | Forever
              21 Eye Makeup | Photo Frames Punjabi Suits | Show Lipstick | Saree
              Watches | Dresses Lehenga | Nike Shoes Goggles | Bras Suit Chinos
              | Shoes Adidas Shoes | Woodland Shoes | Jewellery Designers Sarees
            </small>
          </div>
          <hr />
          <div className="my-4 flex gap-2 justify-between text-gray-500">
            <p>In case of any concern, Contact Us</p>
            <p>© 2023All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
