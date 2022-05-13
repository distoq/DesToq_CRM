import TokenProvider from "./Token";
import { SearchHomeProvider } from "./SearchHome";
import { DashboardPageControllerProvider } from "./DashboardPageController";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <DashboardPageControllerProvider>
        <SearchHomeProvider>
          {children}
        </SearchHomeProvider>
      </DashboardPageControllerProvider>
    </TokenProvider>
  );
};
export default Providers;

