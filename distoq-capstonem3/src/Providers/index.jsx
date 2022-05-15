import {TokenProvider} from "./Token";
import { SearchHomeProvider } from "./SearchHome";
import { DashboardPageControllerProvider } from "./DashboardPageController";
import { IsLoggedProvider } from "./isLogged";
import { ShowcaseProvider } from "./showcase";
import { CartProvider } from "./cart";
import { ProvidersListProvider } from "./ProvidersList";
import { StockProvider } from "./Stock";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <DashboardPageControllerProvider>
        <StockProvider>
        <ProvidersListProvider>
        <ShowcaseProvider>
          <IsLoggedProvider>
            <CartProvider>
              <SearchHomeProvider>
                {children}
              </SearchHomeProvider>
            </CartProvider>
          </IsLoggedProvider>
        </ShowcaseProvider>
        </ProvidersListProvider>
        </StockProvider>
      </DashboardPageControllerProvider>
    </TokenProvider>
  );
};
export default Providers;

