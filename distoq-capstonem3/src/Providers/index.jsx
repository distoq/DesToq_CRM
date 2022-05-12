import TokenProvider from "./Token"


const Provider = ({children}) => {

    return(
        <TokenProvider>
            {children}
        </TokenProvider>
    )
}
export default Provider