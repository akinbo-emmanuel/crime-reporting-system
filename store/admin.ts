// import { auth } from 'firebase/auth';
import { create } from 'zustand';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase';

export type AuthState = {
  user: any;
  loading: boolean;
  setUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user: any) => set({ user }),
  setLoading: (loading: boolean) => set({ loading }),
}));

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  const { setUser, setLoading } = useAuthStore();
  setUser(user);
  setLoading(false);
  console.log(user);
});