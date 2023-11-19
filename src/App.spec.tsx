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

  it("should render a text", () => {
    const { getByText } = render(
      <ReThemeProvider>
        <PlaneTracker />
      </ReThemeProvider>,
    );

    const textElement = getByText(
      "Open up App.tsx to start working on your app!",
    );

    expect(textElement.props.children).toEqual(
      "Open up App.tsx to start working on your app!",
    );
  });
});
