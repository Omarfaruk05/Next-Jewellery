"use client";

import { Navbar } from "keep-react";
import Link from "next/link";
import { User, Heart, ShoppingBagOpen } from "phosphor-react";

export const NavbarComponent = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar fluid={true} className="bg-[#F9F2E6]">
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Brand>
            <Link href={"/"} className="cursor-pointer">
              <div className="mx-6 -mb-2">
                <p className="h-[2px] bg-[#A95F20]"></p>
                <div className="flex justify-between">
                  <p className="bg-[#A95F20] h-3 w-1"></p>
                  <p className="bg-[#A95F20] h-3 w-1"></p>
                </div>
              </div>
              <h3 className="text-3xl font-semibold font-serif">Jewellery</h3>
            </Link>
          </Navbar.Brand>

          <Navbar.Container className="flex items-center gap-6">
            <Navbar.Container
              tag="ul"
              className="flex items-center justify-between gap-4"
            >
              <div className="hidden md:block">
                <select className="bg-[#F9F2E6]" name="cars" id="cars">
                  <option value="India (INR ₹)">India(INR ₹)</option>
                  <option value="Nepal">Nepal</option>
                </select>
              </div>
              <Navbar.Link
                icon={<User size={20} color="#444" />}
                iconAnimation={false}
              />
              <Navbar.Link
                icon={<Heart size={20} color="#444" />}
                iconAnimation={false}
              />
              <div className="relative h-7 w-7 flex items-center">
                <Navbar.Link
                  icon={<ShoppingBagOpen size={20} color="#444" />}
                  iconAnimation={false}
                />
                <p className="text-xs text-center absolute top-0 -right-[4px] bg-black w-4 rounded-full text-white">
                  0
                </p>
              </div>
            </Navbar.Container>
            <Navbar.Toggle className="block" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col">
              <Navbar.Link
                linkName="Brands"
                className="p-2 rounded-md hover:bg-[#F9F2E6]"
              />
              <Navbar.Link
                linkName="The Edits"
                className="p-2 rounded-md hover:bg-[#F9F2E6]"
              />
              <Navbar.Link
                linkName="Earring"
                className="p-2 rounded-md hover:bg-[#F9F2E6]"
              />
              <Navbar.Link
                linkName="Necklaces"
                className="p-2 rounded-md hover:bg-[#F9F2E6]"
              />
              <Navbar.Link
                linkName="Rings"
                className="p-2 rounded-md hover:bg-[#F9F2E6]"
              />
              <Navbar.Link
                linkName="Bracelets"
                className="p-2 rounded-md hover:bg-[#F9F2E6]"
              />
              <Navbar.Link
                linkName="Gifts"
                className="p-2 rounded-md hover:bg-[#F9F2E6]"
              />
              <Navbar.Link
                linkName="Personalized"
                className="p-2 rounded-md hover:bg-[#F9F2E6]"
              />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
      </Navbar>
      <hr />
      <div>
        <ul className="hidden my-2 md:flex gap-5 justify-center text-sm">
          <li className="cursor-pointer">Brands</li>
          <li className="cursor-pointer">The Edits</li>
          <li className="cursor-pointer">Earrings</li>
          <li className="cursor-pointer">Neckleces</li>
          <li className="cursor-pointer">Rings</li>
          <li className="cursor-pointer">Bracelets</li>
          <li className="cursor-pointer">Gifts</li>
          <li className="cursor-pointer">Personalized</li>
        </ul>
      </div>
    </div>
  );
};
