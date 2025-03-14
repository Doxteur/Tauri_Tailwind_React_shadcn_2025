import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiState, Notification } from './types';
import { v4 as uuidv4 } from 'uuid';

const initialState: UiState = {
  darkMode: false,
  sidebarCollapsed: false,
  notifications: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id' | 'read' | 'createdAt'>>) => {
      state.notifications.push({
        id: uuidv4(),
        read: false,
        createdAt: new Date().toISOString(),
        ...action.payload,
      });
    },
    markNotificationAsRead: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find(n => n.id === action.payload);
      if (notification) {
        notification.read = true;
      }
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const {
  toggleDarkMode,
  toggleSidebar,
  addNotification,
  markNotificationAsRead,
  clearAllNotifications
} = uiSlice.actions;
export default uiSlice.reducer;
