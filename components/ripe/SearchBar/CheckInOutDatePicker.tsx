"use client";

import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Calendar, Users } from "lucide-react";

export default function CheckInOutDatePicker() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="bg-transparent w-[220px] text-wrap"
        onPress={() => {
          onOpen();
        }}
      >
        <Calendar className="text-foreground-50 opacity-40 text-2xl w-[70px]" />
        <span className="text-primary font-light text-left">
          Select check in and check out dates
        </span>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row items-center justify-between">
                <h4>Select check in and check out dates</h4>
              </ModalHeader>
              <div className="flex flex-row  gap-2 py-2 w-full p-4 g-4">
                <DatePicker label="CheckIn" className="max-w-[284px]" />
                <DatePicker label="CheckOut" className="max-w-[284px]" />
              </div>

              <div className="flex flex-row justify-center h-[76px] items-center gap-2 pt-4 ">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground ">2 Adults</span>
              </div>
              <Button
                className="w-full bg-destructive bg-primary rounded-none text-background hover:bg-destructive/90 h-[60px]"
                onClick={() => onClose()}
              >
                Update Results
              </Button>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
