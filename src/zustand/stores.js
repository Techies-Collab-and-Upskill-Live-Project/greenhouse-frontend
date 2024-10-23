import { create } from "zustand";

const useCustomerSidebarStore = create((set) => ({
  isOpen: false, // Initial state for navbar
  openNavbar: () => set({ isOpen: true }), // Function to open navbar
  closeNavbar: () => set({ isOpen: false }), // Function to close navbar
  toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })), // Function to toggle navbar
}));

const useConfirmAccountModal = create((set) => ({
  isOpen: false,
  activeModal: "Modal",
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  // switchModal: (modalName) => set({ activeModal: modalName }),
}));

const useGetUserStore = create((set) => ({
  user: {},
  setUser: (data) => set({ user: data }),
}));

const useConfirmRegisterModals = create((set) => ({
  isOpen: false,
  activeModal: "Modal",
  closeModal: () => set({ isOpen: false }),
  openModal: () => set({ isOpen: true }),
  switchModal: (modalName) => set({ activeModal: modalName }),
}));

const useDoneAccountModal = create((set) => ({
  isOpen: true,
  openModal: () => set({ isOpen: true }),
}));

export {
  useCustomerSidebarStore,
  useConfirmRegisterModals,
  useGetUserStore,
  useConfirmAccountModal,
  useDoneAccountModal,
};
