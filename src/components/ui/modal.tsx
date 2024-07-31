"use client";

import { CrossIcon } from "@/assets";
import { useModal } from "@/hooks/use-modal";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "./dialog";

function GlobalModal() {
  const { isOpen, closeModal, view } = useModal();
  const pathname = usePathname();

  useEffect(() => {
    closeModal();
  }, [pathname, closeModal]);

  return (
    <Dialog open={isOpen}>
      <DialogOverlay onClick={closeModal} />
      <DialogContent className="p-0">
        <DialogClose
          onClick={closeModal}
          className="absolute top-8 right-8 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
        >
          <CrossIcon className="size-7" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <DialogTitle hidden>Success message</DialogTitle>
        {view}
      </DialogContent>
    </Dialog>
  );
}

export default GlobalModal;
