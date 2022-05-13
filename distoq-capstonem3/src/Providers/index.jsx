import TokenProvider from "./Token";
import { SearchHomeProvider } from "./SearchHome";
import { DashboardPageControllerProvider } from "./DashboardPageController";
import { IsLoggedProvider } from "./isLogged";
import { ShowcaseProvider } from "./showcase";
import { CartProvider } from "./cart";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <DashboardPageControllerProvider>
        <ShowcaseProvider>
          <IsLoggedProvider>
            <CartProvider>
              <SearchHomeProvider>
                {children}
              </SearchHomeProvider>
            </CartProvider>
          </IsLoggedProvider>
        </ShowcaseProvider>
      </DashboardPageControllerProvider>
    </TokenProvider>
  );
};
export default Providers;

