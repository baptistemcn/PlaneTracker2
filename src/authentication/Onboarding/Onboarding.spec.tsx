import { render } from "@testing-library/react-native";
import { Onboarding } from "./Onboarding";
import { ReThemeProvider } from "@theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

describe("Onboarding Screen", () => {
  it("should render", () => {
    render(
      <SafeAreaProvider>
        <ReThemeProvider>
          <Onboarding />
        </ReThemeProvider>
      </SafeAreaProvider>,
    );
  });
});
