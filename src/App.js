import logo from "./logo.svg";
import "./App.css";
import Path from "./routes/path";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { CartContext, GlobalPopUP } from "./Helpers/Context";
import { useEffect, useState } from "react";
import CartIcon from "./components/CartIcon";
import PopUp from "./components/PopUp";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff192e",
    },
    secondary: {
      main: "#fbb30b",
    },
    text: {
      secondary: "#097969",
      primary: "#7A7A7A",
    },
  },
});
function App() {
  const [cart, setCart] = useState([]);
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  useEffect(() => {
    if (cart.length > 0) {
      // document
      //   .getElementsByClassName("cartIconContainner")[0]
      //   .classList.remove("animate");
      document
        .getElementsByClassName("cartIconContainner")[0]
        .classList.add("animate");
      setTimeout(() => {
        document
          .getElementsByClassName("cartIconContainner")[0]
          .classList.remove("animate");
      }, 1000);
    }
  }, [cart]);
  return (
    <GlobalPopUP.Provider
      value={{
        popupVisible,
        setPopupVisible,
        setTitle,
        setContext,
        title,
        context,
      }}
    >
      <ThemeProvider theme={theme}>
        <PopUp
          props={{ popupVisible, setPopupVisible, title, context }}
        ></PopUp>
        <CartContext.Provider value={{ cart, setCart }}>
          <Path></Path>
        </CartContext.Provider>
      </ThemeProvider>
    </GlobalPopUP.Provider>
  );
}

export default App;
