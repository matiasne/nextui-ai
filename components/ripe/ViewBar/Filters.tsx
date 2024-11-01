// components/ripe/SearchBar/RoomPickerModal.tsx

import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Calendar, SlidersHorizontal, UsersRound } from "lucide-react";
import React, { useState } from "react";

export default function FiltersModalButton() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);
  const [visible, setVisible] = useState(false);

  const handleAddRoom = () => {
    setRooms([...rooms, { adults: 2, children: 0 }]);
  };

  const handleUpdateResults = () => {
    // Logic to update results based on selected guests and rooms
    console.log("Updating results with:", rooms);
    setVisible(false); // Close modal after updating
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        isIconOnly
        variant="light"
        aria-label="Sort By"
        className="bg-primary text-white"
        onPress={() => {
          onOpen();
        }}
      >
        <SlidersHorizontal />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <div className="flex flex-col align-middle justify-center gap-2">
              <ModalHeader className="flex flex-row items-center justify-between">
                <h4>Filter By</h4>
              </ModalHeader>
              <div className="p-4"></div>

              <Button
                className="w-full bg-destructive bg-primary rounded-none text-background hover:bg-destructive/90  h-[60px]"
                onClick={() => onClose()}
              >
                Update Results
              </Button>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
