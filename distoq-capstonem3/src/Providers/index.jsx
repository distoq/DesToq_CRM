import {TokenProvider} from "./Token";
import { SearchHomeProvider } from "./SearchHome";
import { DashboardPageControllerProvider } from "./DashboardPageController";
import { IsLoggedProvider } from "./isLogged";
import { ShowcaseProvider } from "./showcase";
import { CartProvider } from "./cart";
import { ProvidersListProvider } from "./ProvidersList";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <DashboardPageControllerProvider>
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
      </DashboardPageControllerProvider>
    </TokenProvider>
  );
};
export default Providers;

