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

const useConfirmRegisterModals = create((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));
const useDoneAccountModal = create((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const useGetUserStore = create((set) => ({
  user: {},
  setUser: (data) => set({ user: data }),
}));

const useGetProducts = create((set) => ({
  products: null,
  setProducts: (data) => set({ products: data }),

  // Search term
  searchTerm: "",
  setSearchTerm: (data) => set({ searchTerm: data }),
}));

const useGetProduct = create((set) => ({
  products: {},
  setProduct: (data) => set({ product: data }),
}));
const useCart = create((set) => ({
  cartItems: 0,
  setCartItems: (data) => set({ cartItems: data }),
}));

export {
  useCustomerSidebarStore,
  useGetUserStore,
  useGetProducts,
  useConfirmAccountModal,
  useConfirmRegisterModals,
  useDoneAccountModal,
  useGetProduct, useCart
};
