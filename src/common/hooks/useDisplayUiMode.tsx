import React, { createContext, ReactNode, useContext } from "react";
import { DisplayUiModeType } from "../objects/object-types";

const DisplayUiModeContext = createContext<{
  displayUiMode: DisplayUiModeType;
}>({
  displayUiMode: DisplayUiModeType.Light,
});

interface DisplayUiModeProviderProps {
  children: ReactNode;
}

export const useDisplayUiMode = () => {
  const context = useContext(DisplayUiModeContext);
  return context.displayUiMode;
};

export const DisplayUiModeProvider = ({
  children,
}: DisplayUiModeProviderProps) => {
  const queryParams = new URLSearchParams(window.location.search);
  const displayUiMode = queryParams.get("uiMode") as DisplayUiModeType;

  return (
    <DisplayUiModeContext.Provider value={{ displayUiMode }}>
      {children}
    </DisplayUiModeContext.Provider>
  );
};
