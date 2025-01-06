import React from "react";
import MainView from "./views/Login";
import { I18nextProvider } from "react-i18next";
import i18nDefault from "./common/i18n";
import { DisplayUiModeProvider } from "./common/hooks/useDisplayUiMode";
import { CustomThemeProvider } from "./common/themes";

function App() {
  return (
    <I18nextProvider i18n={i18nDefault}>
      <DisplayUiModeProvider>
        <CustomThemeProvider>
          <MainView />
        </CustomThemeProvider>
      </DisplayUiModeProvider>
    </I18nextProvider>
  );
}

export default App;
