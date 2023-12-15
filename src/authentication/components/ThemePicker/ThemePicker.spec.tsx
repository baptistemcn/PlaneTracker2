import { fireEvent, render } from "@testing-library/react-native";

import { ReThemeProvider } from "@theme";

import { ThemePicker } from "./ThemePicker";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("ThemePicker component", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <ThemePicker />
      </ReThemeProvider>,
    );
  });

  it("should render at least one button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ThemePicker />
      </ReThemeProvider>,
    );

    const button = getByTestId("themepicker0");

    expect(button).toBeTruthy();
    expect(button).toBeOnTheScreen();

    expect(button.props.children.props.name).toEqual("sun");
    expect(button.props.children.props.label).toEqual("common.theme.light");
  });

  it("should render a different button when click", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ThemePicker />
      </ReThemeProvider>,
    );

    const element = getByTestId("picker1");

    expect(element).toBeTruthy();
    expect(element).toBeOnTheScreen();

    expect(element.props.style.backgroundColor).toEqual("#333533");

    fireEvent.press(element);

    expect(element.props.style.backgroundColor).toEqual("#FFFFFF");
  });
});
