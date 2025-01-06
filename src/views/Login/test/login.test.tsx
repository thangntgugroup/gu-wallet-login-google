import * as React from "react";
import * as renderer from "react-test-renderer";
import View from "../index";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../common/i18n";
import { DisplayUiModeProvider } from "../../../common/hooks/useDisplayUiMode";
import { CustomThemeProvider } from "../../../common/themes";

it("Login - renders correctly in English", () => {
  i18n.changeLanguage("en");
  const tree = renderer
    .create(
      <I18nextProvider i18n={i18n}>
        <DisplayUiModeProvider>
          <CustomThemeProvider>
            <View />
          </CustomThemeProvider>
        </DisplayUiModeProvider>
      </I18nextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("Login - renders correctly in Japanese", () => {
  i18n.changeLanguage("ja");
  const tree = renderer
    .create(
      <I18nextProvider i18n={i18n}>
        <DisplayUiModeProvider>
          <CustomThemeProvider>
            <View />
          </CustomThemeProvider>
        </DisplayUiModeProvider>
      </I18nextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
