import { create } from "zustand";

const useCustomerSidebarStore = create((set) => ({
  isOpen: false, // Initial state for navbar
  openNavbar: () => set({ isOpen: true }), // Function to open navbar
  closeNavbar: () => set({ isOpen: false }), // Function to close navbar
  toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })), // Function to toggle navbar
}));

const useConfirmAccountModal = create((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const useGetUserStore = create((set) => ({
  user: {},
  setUser: (data) => set({ user: data }),
}));

export { useCustomerSidebarStore, useGetUserStore, useConfirmAccountModal };
