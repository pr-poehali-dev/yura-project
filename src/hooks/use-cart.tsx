import { create } from 'zustand';
import { ProductType } from '@/types/product';

interface CartStore {
  items: (ProductType & { quantity?: number })[];
  isOpen: boolean;
  addItem: (item: ProductType) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  isOpen: false,
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
          ),
          isOpen: true,
        };
      }
      
      return {
        items: [...state.items, { ...item, quantity: 1 }],
        isOpen: true,
      };
    });
  },
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  increaseQuantity: (id) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      ),
    }));
  },
  decreaseQuantity: (id) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      ),
    }));
  },
  clearCart: () => {
    set({ items: [] });
  },
  toggleCart: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
}));
