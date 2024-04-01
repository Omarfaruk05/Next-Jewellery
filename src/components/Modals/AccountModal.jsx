"use client";

import { Button, Divider, Input, Modal } from "keep-react";
import Image from "next/image";
import { FacebookLogo, GooglePhotosLogo } from "phosphor-react";
import React, { useEffect, useState } from "react";

const AccountModal = ({ openCondition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(openCondition);
  }, [openCondition]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="space-y-3 py-6 px-8 md:w-[500px] bg-[#F9F2E6]">
          <Modal.Content>
            <h1 className="text-center">
              <span className="text-2xl font-semibold">Login</span>{" "}
              <span>Or</span>{" "}
              <span className="text-2xl font-semibold">Signup</span>
            </h1>
            <div className="my-4 flex flex-col gap-3">
              <Button
                className="rounded-full py-2 bg-[#F9F2E6] relative "
                color="primary"
                variant="outline"
              >
                <Image
                  className="absolute left-4"
                  width={14}
                  height={14}
                  src={"/facebookLogo.png"}
                  alt="facebookLogo"
                />
                Sign in with Facebook
              </Button>
              <Button
                className="rounded-full py-2 bg-[#F9F2E6] relative"
                color="error"
                variant="outline"
              >
                <Image
                  className="absolute left-3"
                  width={26}
                  height={26}
                  src={"/googleLogo.png"}
                  alt="facebookLogo"
                />
                Sign in with Google+
              </Button>
            </div>
            <Divider className="mx-12 my-5 text-lg " variant="center">
              Or
            </Divider>
            <div>
              <form>
                <Input
                  className="my-2"
                  type="email"
                  name="email"
                  placeholder="Enter Mobile Number / Email*"
                />
                <Input
                  className="my-2"
                  type="password"
                  name="password"
                  placeholder="Enter Password*"
                />
                <p className="my-2">
                  <span className="text-gray-500">
                    By Continuing, I agree to the
                  </span>{" "}
                  <a
                    href="#"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Terms fo Use
                  </a>{" "}
                  <span>&</span>{" "}
                  <a
                    href="#"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Privacy Policy
                  </a>
                </p>
                <div className="my-4">
                  <Button className="rounded-full w-full uppercase bg-indigo-900 text-white">
                    Continue
                  </Button>
                </div>
              </form>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <p className="mx-auto">
              <span>Having trouble logging in?</span>{" "}
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                Get help
              </a>
            </p>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AccountModal;
