
import { extendTheme } from "@chakra-ui/react";

export const thema= extendTheme({

    fonts: {
        heading: "Itim",
        body: "Nunito",
      },
      colors: {
        primary: "#101010",
        secondary: "#ffff",
        error: "#d90429",
      },
      components: {
        Heading: {
          variants: {
            primary: { fontSize: "32px", fontWeight: "500", color: "#000000" },
            secondary: { fontSize: "32px", fontWeight: "500", color: "#000000" },
          },
        },
        Text: {
          variants: {
            primary: { fontSize: "15px", fontWeight: "600px", color: "#000000" },
            secondary: { fontSize: "15px", fontWeight: "600px", color: "#FFFFFF" },
            price: { fontSize: "15px", fontWeight: "600px", color: "#000000" },
          },
        },
        Button: {
          variants: {
            primary: {
                background:"#101010",
                color:"white",
                margin:"10px",
                width:"300px",
                height:"43",
              _hover: {
                background: "#F4BF39",
                color:"#101010",
              },
            },
            dashboard: {
                background:"#434343",
                color:"white",
                margin:"10px",
                width:"122px",
                height:"75px",
              _hover: {
                background: "#F4BF39",
              },
            },
          },
        },
     
        
      },
       styles: {
    global: {
      body: {
       
      },
    },
  },
})