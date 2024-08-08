"use client";

import { create } from "zustand";

type ModalTypes = {
  view: React.ReactNode | null;
  isOpen: boolean;
  customSize?: string;
};

type ModalState = ModalTypes & {
  openModal: (props: { view: React.ReactNode; customSize?: string }) => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  view: null,
  isOpen: false,
  customSize: "320px",

  openModal: ({ view, customSize }) =>
    set((state) => ({
      ...state,
      isOpen: true,
      view,
      customSize: customSize || state.customSize,
    })),

  closeModal: () =>
    set((state) => ({
      ...state,
      isOpen: false,
      view: null,
    })),
}));

export function useModal() {
  const { isOpen, view, customSize, openModal, closeModal } = useModalStore();

  return {
    isOpen,
    view,
    customSize,
    openModal,
    closeModal,
  };
}
