import { ThemeProvider } from "@material-ui/core";
import Contenedor from "./components/Contenedor";
import theme from "./css/temaConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor />
    </ThemeProvider>
  );
}

export default App;
