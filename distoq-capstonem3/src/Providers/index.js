import { IsLoggedProvider } from "./isLogged";
import { SearchHomeProvider } from "./SearchHome";
import TokenProvider from "./Token";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
        <IsLoggedProvider>
        <SearchHomeProvider>{children}</SearchHomeProvider>
    </IsLoggedProvider>
      </TokenProvider>
  );
};
export default Providers;
