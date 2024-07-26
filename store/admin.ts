// import { create } from 'zustand';

// import { onAuthStateChanged } from 'firebase/auth';

// export const useAuthStore = create((set) => ({
//   user: null,
//   loading: true,
//   setUser: (user: any) => set({ user }),
//   setLoading: (loading: any) => set({ loading }),
// }));

// // Listen for authentication state changes
// onAuthStateChanged(auth, (user) => {
//   const { setUser, setLoading } = useAuthStore.getState();
//   setUser(user);
//   setLoading(false);
// });
