import { create } from 'zustand';
import { Home, Laptop, Shirt, Gem, ShoppingBag, Baby, Zap } from 'lucide-react';

interface CategoryState {
  category: string;
  setCategory: (category: string) => void;
}

//store the current selected category to pass to other route
export const useCategoryStore = create<CategoryState>((set) => ({
  category: 'all',
  setCategory: (category: string) => set({ category }),
}));

export const categoryOptions = [
  { value: 'all', label: 'All', icon: Home },
  { value: 'electronics', label: 'Electronics', icon: Laptop },
  { value: 'clothing', label: 'Clothing', icon: Shirt },
  { value: 'accessories', label: 'Accessories', icon: Gem },
  { value: 'home', label: 'Kitchen', icon: ShoppingBag },
  { value: 'sports', label: 'Sports', icon: Zap },
  { value: 'toys', label: 'Toys', icon: Baby },
];
