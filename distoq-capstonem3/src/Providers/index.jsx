import { SearchHomeProvider } from "./SearchHome";
import TokenProvider from "./Token";

const Provider = ({ children }) => {
  return (
    <TokenProvider>
    <SearchHomeProvider>
      {children}
    </SearchHomeProvider>
    </TokenProvider>
  );
};
export default Provider;
