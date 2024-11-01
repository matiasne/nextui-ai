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
import { Calendar, UsersRound } from "lucide-react";
import React, { useState } from "react";

export default function GuestSelection() {
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
        className="bg-transparent"
        onPress={() => {
          onOpen();
        }}
      >
        <UsersRound className="text-foreground-50 opacity-40" />
        <span className="text-primary font-light">2 adults</span>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <div className="flex flex-col align-middle justify-center gap-2">
              <ModalHeader className="flex flex-row items-center justify-between">
                <h4>How many guests?</h4>
              </ModalHeader>
              <div className="p-4">
                {rooms.map((room, index) => (
                  <div key={index} style={{ marginBottom: "1rem" }}>
                    <div className="flex flex-row gap-2 w-full justify-between">
                      <span>Room {index + 1}</span>
                      <span className="text-destructive text-primary text-sm">
                        remove
                      </span>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Input
                        type="number"
                        label="Adults"
                        onChange={(e) => {
                          const newRooms = [...rooms];
                          newRooms[index].adults = Number(e.target.value);
                          setRooms(newRooms);
                        }}
                        min={0}
                      />
                      <Input
                        type="number"
                        label="Children"
                        onChange={(e) => {
                          const newRooms = [...rooms];
                          newRooms[index].children = Number(e.target.value);
                          setRooms(newRooms);
                        }}
                        min={0}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <Button
                  onClick={handleAddRoom}
                  color="primary"
                  className="w-14"
                >
                  Add room
                </Button>
                <Checkbox style={{ marginTop: "1rem" }}>
                  Traveling with pets
                </Checkbox>
              </div>
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
