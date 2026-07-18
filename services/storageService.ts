import AsyncStorage from '@react-native-async-storage/async-storage'

const THEME_KEY = '@app_theme';

export type ThemeType = "light" | "dark";

export const storageService = {
  async saveTheme(theme: ThemeType): Promise<void> {
    try {
      await AsyncStorage.setItem(THEME_KEY, theme);
    } catch (err) {
      console.error('Error saving theme to storage', err);
    }
  },

  async getTheme(): Promise<ThemeType | null> {
    try {
      const theme = await AsyncStorage.getItem(THEME_KEY);
      return theme as ThemeType | null;
    } catch (err) {
      console.error('Error fetching theme from storage', err);
      return null;
    }
  }
}