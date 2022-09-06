import React from "react";
import { Header, ModalToast } from "./components/";
import { GlobalStyles } from "./global/Styles";
import { useTheme } from "./hooks";
import { AppRoutes } from "./routes";
import "animate.css/animate.min.css";

export default function App() {
  const { isDark } = useTheme();

  const [isToastOpen, setIsToastOpen] = React.useState<boolean>(true);

  function closeModalToast() {
    setIsToastOpen(false);
  }

  return (
    <React.Fragment>
      <GlobalStyles isDark={isDark} />
      <Header />
      <AppRoutes />
      <ModalToast open={isToastOpen} onClose={closeModalToast} />
    </React.Fragment>
  );
}
