import { Button, Modal, Typography } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
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
        <Modal.Body className="space-y-3">
          <Modal.Content></Modal.Content>
          <Modal.Footer></Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AccountModal;
