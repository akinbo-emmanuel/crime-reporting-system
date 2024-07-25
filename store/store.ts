import { create } from 'zustand'

export const generalStore = create((set) => ({
  loading: false,
  updateLoading: (loading: any) => set({ bears: loading }),
}))