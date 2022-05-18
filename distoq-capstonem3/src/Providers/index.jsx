import {TokenProvider} from "./Token";
import { SearchHomeProvider } from "./SearchHome";
import { SelectValuesProvider } from "./SelectValues";
import { DashboardPageControllerProvider } from "./DashboardPageController";
import { IsLoggedProvider } from "./isLogged";
import { ShowcaseProvider } from "./showcase";
import { CartProvider } from "./cart";
import { ProvidersListProvider } from "./ProvidersList";
import { StockProvider } from "./Stock";
import { UserProvider } from "./Users";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <UserProvider>
      <DashboardPageControllerProvider>
        <StockProvider>
        <ProvidersListProvider>
        <ShowcaseProvider>
          <IsLoggedProvider>
            <CartProvider>
              <SearchHomeProvider>
                <SelectValuesProvider>
                  {children}
                </SelectValuesProvider>
              </SearchHomeProvider>
            </CartProvider>
          </IsLoggedProvider>
        </ShowcaseProvider>
        </ProvidersListProvider>
        </StockProvider>
      </DashboardPageControllerProvider>
      </UserProvider>
    </TokenProvider>
  );
};
export default Providers;
