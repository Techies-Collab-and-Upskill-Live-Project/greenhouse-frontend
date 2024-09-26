import { create } from "zustand";

const useCustomerSidebarStore = create((set) => ({
  isOpen: false, // Initial state for navbar
  openNavbar: () => set({ isOpen: true }), // Function to open navbar
  closeNavbar: () => set({ isOpen: false }), // Function to close navbar
  toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })), // Function to toggle navbar
}));

export { useCustomerSidebarStore };
