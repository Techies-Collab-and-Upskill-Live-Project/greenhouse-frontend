import { create } from "zustand";

const useCustomerSidebarStore = create((set) => ({
  isOpen: false, // Initial state for navbar
  openNavbar: () => set({ isOpen: true }), // Function to open navbar
  closeNavbar: () => set({ isOpen: false }), // Function to close navbar
  toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })), // Function to toggle navbar
}));

const useGetUserStore = create((set) => ({
  user: {},
  setUser: (data) => set({ user: data }),
}));

const useGetProducts = create((set) => ({
  products: [],
  setProducts: (data) => set({ products: data }),


  // Search term
  searchTerm: "",
  setSearchTerm: (data) => set({ searchTerm: data }),
}));

export { useCustomerSidebarStore, useGetUserStore, useGetProducts };
