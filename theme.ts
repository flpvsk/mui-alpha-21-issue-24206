import { createMuiTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, Helvetica, sans-serif"
  },
  palette: {
    primary: {
      main: "#01579b"
    },
    secondary: {
      main: "#ffeb3b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#ffffff"
    }
  }
})

export default theme

