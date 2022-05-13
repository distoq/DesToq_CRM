import TokenProvider from "./Token";
import { DashboardPageControllerProvider } from "./DashboardPageController";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <DashboardPageControllerProvider>
        {children}
      </DashboardPageControllerProvider>
    </TokenProvider>
  );
};
export default Providers;
