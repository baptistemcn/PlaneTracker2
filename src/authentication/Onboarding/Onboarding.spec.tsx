import { render } from "@testing-library/react-native";
import { Onboarding } from "./Onboarding";
import { ReThemeProvider } from "@theme";

describe("Onboarding Screen", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <Onboarding />
      </ReThemeProvider>,
    );
  });
});
