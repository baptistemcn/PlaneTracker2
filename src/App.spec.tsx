import { render } from "@testing-library/react-native";
import { PlaneTracker } from "./App";
import { ReThemeProvider } from "./theme/Theme.provider";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("PlaneTracker", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <PlaneTracker />
      </ReThemeProvider>,
    );
  });
});
