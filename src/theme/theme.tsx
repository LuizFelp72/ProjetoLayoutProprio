import { createTheme } from "@mui/material";

const themeLight = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#0D9488",
      light: "#2DD4BF",
      dark: "#0F766E",
      contrastText: "#FFFFFF"
    },

    success: {
      main: "#16A34A"
    },

    error: {
      main: "#E11D48"
    },

    warning: {
      main: "#D97706"
    },

    info: {
      main: "#0284C7"
    },

    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF"
    },

    text: {
      primary: "#0F172A",
      secondary: "#475569"
    },

    divider: "#E2E8F0"
  },

  typography: {
    fontFamily: "'Inter', sans-serif",

    h1: { fontSize: "36px", fontWeight: 700 },
    h2: { fontSize: "30px", fontWeight: 600 },
    h3: { fontSize: "24px", fontWeight: 600 },
    h4: { fontSize: "20px", fontWeight: 600 },
    h5: { fontSize: "18px", fontWeight: 500 },
    h6: { fontSize: "16px", fontWeight: 500 },

    body1: { fontSize: "16px" },
    body2: { fontSize: "14px" },
    caption: { fontSize: "12px" }
  },

  spacing: 8,

  shape: {
    borderRadius: 14
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 18px",
          textTransform: "none",
          fontWeight: 600
        }
      }
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "#FFFFFF",
          border: "1px solid #E2E8F0",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
        }
      }
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          color: "#0F172A"
        }
      }
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none"
        }
      }
    }
  }
});



const themeDark = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#14B8A6",
      light: "#2DD4BF",
      dark: "#0F766E",
      contrastText: "#042F2E"
    },

    success: {
      main: "#22C55E"
    },

    error: {
      main: "#F43F5E"
    },

    warning: {
      main: "#F59E0B"
    },

    info: {
      main: "#38BDF8"
    },

    background: {
      default: "#0B1120",
      paper: "#111827"
    },

    text: {
      primary: "#E5E7EB",
      secondary: "#9CA3AF"
    },

    divider: "#1F2937"
  },

  typography: {
    fontFamily: "'Inter', sans-serif",

    h1: { fontSize: "36px", fontWeight: 700 },
    h2: { fontSize: "30px", fontWeight: 600 },
    h3: { fontSize: "24px", fontWeight: 600 },
    h4: { fontSize: "20px", fontWeight: 600 },
    h5: { fontSize: "18px", fontWeight: 500 },
    h6: { fontSize: "16px", fontWeight: 500 },

    body1: { fontSize: "16px" },
    body2: { fontSize: "14px" },
    caption: { fontSize: "12px" }
  },

  spacing: 8,

  shape: {
    borderRadius: 14
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 18px",
          textTransform: "none",
          fontWeight: 600
        }
      }
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "#020617",
          border: "1px solid #1F2937",
          boxShadow: "0 6px 18px rgba(0,0,0,0.35)"
        }
      }
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#020617",
          borderBottom: "1px solid #1F2937"
        }
      }
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none"
        }
      }
    }
  }
});
export {themeDark, themeLight};