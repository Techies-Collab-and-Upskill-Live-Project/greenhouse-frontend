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
const useGetCategories = create((set) => ({
  categoryDropDown: false,

  // Open dropdown
  // openCategoryDropDown: () => set({ categoryDropDown: true }),

  // // Close dropdown
  // closeCategoryDropDown: () => set({ categoryDropDown: false }),

  // Toggle dropdown
  toggleCategoryDropDown: () =>
    set((state) => ({ categoryDropDown: !state.categoryDropDown })),

  // Categories list and setter
  categories: [],
  setCategories: (data) => set({ categories: data }),

  // Selected category and setter
  category: {},
  setCategory: (data) => set({ category: data }),
}));

const useCart = create((set) => ({
  cartItemsLength: 0,
  setCartItemsLength: (data) => set({ cartItemsLength: data }),

  cartItems: [],
  setCartItems: (data) => set({ cartItems: data }),
}));

export {
  useCustomerSidebarStore,
  useGetUserStore,
  useGetProducts,
  useConfirmAccountModal,
  useConfirmRegisterModals,
  useDoneAccountModal,
  useGetProduct,
  useCart,
  useGetCategories,
};
