import { fireEvent, render } from "@testing-library/react-native";
import { LanguagePicker } from "./LanguagePicker";
import { ReThemeProvider } from "@theme";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("LanguagePicker component", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );
  });

  it("should render at least two button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const buttons = getByTestId("button-box");

    expect(buttons).toBeTruthy();
    expect(buttons).toBeOnTheScreen();
    expect(buttons.props.children).toHaveLength(buttons.props.children.length);
  });

  it("should render a flag in each button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const buttons = getByTestId("button-box");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    buttons.props.children.map((button: any) => {
      const source = button.props.children.props.children.props.source;
      expect(source).toEqual(1);
    });
  });

  it("should change button color when selected", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const buttonElement = getByTestId("button0");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    expect(buttonElement.props.style.backgroundColor).toEqual("#FFFFFF");

    fireEvent.press(buttonElement);

    expect(buttonElement.props.style.backgroundColor).toEqual("#20A39E");
  });

  it("should render a label", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const label = getByTestId("text");

    expect(label).toBeTruthy();
    expect(label).toBeOnTheScreen();

    expect(label.props.children).toEqual("onboarding.message.language");
  });
});
