import { create } from "zustand";

export type Flavor = "Chocolate" | "Vanilla" | "Strawberry" | "Cookies & Cream";

export interface ProductState {
  selectedFlavor: Flavor;
  quantity: number;
  mrpPrice: number;
  salePrice: number;
  discountPercent: number;
  setFlavor: (flavor: Flavor) => void;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  setQuantity: (qty: number) => void;
}

export const FLAVORS: Flavor[] = [
  "Chocolate",
  "Vanilla",
  "Strawberry",
  "Cookies & Cream",
];

export const useProductStore = create<ProductState>((set) => ({
  selectedFlavor: "Chocolate",
  quantity: 1,
  mrpPrice: 3499,
  salePrice: 2799,
  discountPercent: 20,
  setFlavor: (flavor) => set({ selectedFlavor: flavor }),
  incrementQuantity: () =>
    set((state) => ({ quantity: Math.min(state.quantity + 1, 10) })),
  decrementQuantity: () =>
    set((state) => ({ quantity: Math.max(state.quantity - 1, 1) })),
  setQuantity: (qty) => set({ quantity: Math.max(1, Math.min(qty, 10)) }),
}));
