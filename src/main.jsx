import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
// テーマを作成
const theme = createTheme({
  typography: {
    fontFamily:
      '"Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "メイリオ", sans-serif',
    fontWeightLight: 100, // ここがポイント！
    fontWeightRegular: 100,
    fontWeightMedium: 100,
    color: "white", // 全体の文字色を白に設定
    h1: { fontWeight: 100, color: "white" },
    h2: { fontWeight: 100, color: "white" },
    h3: { fontWeight: 100, color: "white" },
    h4: { fontWeight: 100, color: "white" },
    h5: { fontWeight: 100, color: "white" },
    h6: { fontWeight: 100, color: "white" },
    body2: { fontWeight: 100, color: "white" },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
