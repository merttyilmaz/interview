import { ThemeProvider } from "./ThemeProvider";

// this will be used to wrap the app in the providers
const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
