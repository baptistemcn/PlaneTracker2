import { fireEvent, render } from "@testing-library/react-native";

import { ReThemeProvider } from "@theme";
import { assertTextIsUppercase } from "@utils";

import { Onboarding } from "./Onboarding";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("Onboarding Screen", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <Onboarding />
      </ReThemeProvider>,
    );
  });

  it("should render a title with the app name", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Onboarding />
      </ReThemeProvider>,
    );

    const titleElement = getByTestId("title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement.props.children).toEqual("name".toUpperCase());
  });

  it("should render a title in uppercase", async () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Onboarding />
      </ReThemeProvider>,
    );

    await assertTextIsUppercase(getByTestId, "title");
  });

  it("should render welcome message", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Onboarding />
      </ReThemeProvider>,
    );

    const msgElement = getByTestId("message");

    expect(msgElement).toBeTruthy();
    expect(msgElement).toBeOnTheScreen();

    expect(msgElement.props.children).toEqual("onboarding.message.welcome");
  });

  it("should render a start message", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Onboarding />
      </ReThemeProvider>,
    );

    const msgElement = getByTestId("start");

    expect(msgElement).toBeTruthy();
    expect(msgElement).toBeOnTheScreen();

    expect(msgElement.props.children).toEqual("onboarding.message.start");
  });

  it("should render a button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Onboarding />
      </ReThemeProvider>,
    );

    const btnElement = getByTestId("button");

    expect(btnElement).toBeTruthy();
    expect(btnElement).toBeOnTheScreen();
  });

  it("should render a label in the button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Onboarding />
      </ReThemeProvider>,
    );

    const btnElement = getByTestId("button");

    expect(btnElement).toBeTruthy();
    expect(btnElement).toBeOnTheScreen();

    expect(btnElement.props.children[1].props.children).toEqual(
      "common.button.start".toUpperCase(),
    );
  });

  it("should change to next screen when click on validation button", () => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    const { getByTestId } = render(
      <ReThemeProvider>
        <Onboarding navigation={navigationMock} />
      </ReThemeProvider>,
    );

    const btnElement = getByTestId("button");

    expect(btnElement).toBeTruthy();
    expect(btnElement).toBeOnTheScreen();

    fireEvent.press(btnElement);

    expect(navigationMock.navigate).toHaveBeenCalledWith("Theming");
  });
});
