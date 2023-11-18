import { render } from "@testing-library/react-native";
import { PlaneTracker } from "./App";

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
    render(<PlaneTracker />);
  });

  it("should render a text", () => {
    const { getByText } = render(<PlaneTracker />);

    const textElement = getByText(
      "Open up App.tsx to start working on your app!",
    );

    expect(textElement.props.children).toEqual(
      "Open up App.tsx to start working on your app!",
    );
  });
});
