import { ShowcaseProvider } from "./showcase";
import { CartProvider } from "./cart";

const Providers = ({ children }) => {
  return (
    <ShowcaseProvider>
      <CartProvider>{children}</CartProvider>
    </ShowcaseProvider>
  );
};
export default Providers;
