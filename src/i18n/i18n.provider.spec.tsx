import { render } from "@testing-library/react-native";
import { ReI18nProvider } from "./i18n.provider";
import { Text } from "react-native";

describe("i18n provider", () => {
  it("should render", () => {
    render(
      <ReI18nProvider>
        <Text>PlaneTracker</Text>
      </ReI18nProvider>,
    );
  });
});
