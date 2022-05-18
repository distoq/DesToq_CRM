import { TokenProvider } from "./Token";
import { SearchHomeProvider } from "./SearchHome";
import { SelectValuesProvider } from "./SelectValues";
import { DashboardPageControllerProvider } from "./DashboardPageController";
import { IsLoggedProvider } from "./isLogged";
import { ShowcaseProvider } from "./showcase";
import { CartProvider } from "./cart";
import { ProvidersListProvider } from "./ProvidersList";
import { StockProvider } from "./Stock";
import { DashFilterProvider } from "./DashboardFilter";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <DashFilterProvider>
        <DashboardPageControllerProvider>
          <StockProvider>
            <ProvidersListProvider>
              <ShowcaseProvider>
                <IsLoggedProvider>
                  <CartProvider>
                    <SearchHomeProvider>
                      <SelectValuesProvider>{children}</SelectValuesProvider>
                    </SearchHomeProvider>
                  </CartProvider>
                </IsLoggedProvider>
              </ShowcaseProvider>
            </ProvidersListProvider>
          </StockProvider>
        </DashboardPageControllerProvider>
      </DashFilterProvider>
    </TokenProvider>
  );
};
export default Providers;
