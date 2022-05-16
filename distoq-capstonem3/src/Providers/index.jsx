import { TokenProvider } from "./Token";
import { SearchHomeProvider } from "./SearchHome";
import { DashboardPageControllerProvider } from "./DashboardPageController";
import { IsLoggedProvider } from "./isLogged";
import { SelectValuesProvider } from "./SelectValues";
import { ProvidersListProvider } from "./ProvidersList";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <DashboardPageControllerProvider>
        <IsLoggedProvider>
          <SearchHomeProvider>
            <SelectValuesProvider>
              <ProvidersListProvider>{children}</ProvidersListProvider>
            </SelectValuesProvider>
          </SearchHomeProvider>
        </IsLoggedProvider>
      </DashboardPageControllerProvider>
    </TokenProvider>
  );
};
export default Providers;
