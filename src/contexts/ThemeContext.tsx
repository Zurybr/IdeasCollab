// Optional: Keep the ThemeProvider for compatibility, but it's no longer needed
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <>{children}</>;
};
