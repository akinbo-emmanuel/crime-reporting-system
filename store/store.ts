import { create } from 'zustand';

export const generalStore = create((set) => ({
  loading: false,
  reportId: null,
  reportStatus: null,
  updateState: (newState: Partial<{ loading: boolean; reportId: string | null; reportStatus: string | null }>) =>
    set(newState),
}));
