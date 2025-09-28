import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Función para obtener el tema inicial basado en las preferencias del sistema
const getInitialTheme = (): Theme => {
  // Si está en el servidor, devuelve 'light' por defecto
  if (typeof window === 'undefined') return 'light';
  
  // Verificar localStorage primero (el persist middleware se encargará de esto después)
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme) return savedTheme;

  // Usar preferencia del sistema
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: getInitialTheme(),
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.setAttribute('data-theme', theme);
      },
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', newTheme);
          return { theme: newTheme };
        });
      },
    }),
    {
      name: 'theme-storage',
      // Solo almacenamos el tema actual
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);