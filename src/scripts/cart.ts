/**
 * VI-ELIXIR Cart Store
 * Carrito demostrativo — no procesa pagos reales
 * Estado persistido en localStorage durante la sesión de navegación
 */

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
  presentation: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const STORAGE_KEY = 'vi-elixir-cart';

function getInitialState(): CartState {
  if (typeof window === 'undefined') return { items: [], isOpen: false };
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { items: parsed.items || [], isOpen: false };
    }
  } catch {
    // localStorage not available
  }
  return { items: [], isOpen: false };
}

let state: CartState = getInitialState();
const listeners: Set<(state: CartState) => void> = new Set();

function notify() {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    } catch {
      // localStorage not available
    }
  }
  listeners.forEach(fn => fn(state));
  // Dispatch custom event for components
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: state }));
  }
}

export function subscribe(fn: (state: CartState) => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getCart(): CartState {
  return state;
}

export function addToCart(item: Omit<CartItem, 'quantity'>, quantity = 1): void {
  const existing = state.items.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.items.push({ ...item, quantity });
  }
  state = { ...state, items: [...state.items] };
  notify();
}

export function removeFromCart(id: string): void {
  state = { ...state, items: state.items.filter(i => i.id !== id) };
  notify();
}

export function updateQuantity(id: string, quantity: number): void {
  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }
  state = {
    ...state,
    items: state.items.map(i => i.id === id ? { ...i, quantity } : i),
  };
  notify();
}

export function clearCart(): void {
  state = { ...state, items: [] };
  notify();
}

export function toggleCart(open?: boolean): void {
  state = { ...state, isOpen: open ?? !state.isOpen };
  notify();
}

export function getCartTotal(): number {
  return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartCount(): number {
  return state.items.reduce((sum, item) => sum + item.quantity, 0);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
