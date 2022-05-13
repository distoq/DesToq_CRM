import TokenProvider from "./Token";
import { SearchHomeProvider } from "./SearchHome";
import { DashboardPageControllerProvider } from "./DashboardPageController";
import { IsLoggedProvider } from "./isLogged";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <DashboardPageControllerProvider>
      <IsLoggedProvider>
        <SearchHomeProvider>
          {children}
        </SearchHomeProvider>
      </IsLoggedProvider>
      </DashboardPageControllerProvider>
    </TokenProvider>
  );
};
export default Providers;

