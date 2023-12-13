import { render } from "@testing-library/react-native";

import { ReThemeProvider } from "@theme";

import { Theming } from "./Theming";
import { assertTextIsUppercase } from "@utils";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("Theming screen", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <Theming />
      </ReThemeProvider>,
    );
  });

  it("should render a title", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Theming />
      </ReThemeProvider>,
    );

    const title = getByTestId("title");

    expect(title).toBeTruthy();
    expect(title).toBeOnTheScreen();

    expect(title.props.children).toEqual("theming.message.title".toUpperCase());
  });

  it("should render a title in uppercase", async () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Theming />
      </ReThemeProvider>,
    );

    const title = getByTestId("title");

    expect(title).toBeTruthy();
    expect(title).toBeOnTheScreen();

    await assertTextIsUppercase(getByTestId, "title");
  });

  it("should render a presentation text", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Theming />
      </ReThemeProvider>,
    );

    const text = getByTestId("favorite");

    expect(text).toBeTruthy();
    expect(text).toBeOnTheScreen();

    expect(text.props.children).toEqual("theming.message.favorite");
  });

  it("should render two theme button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Theming />
      </ReThemeProvider>,
    );

    const buttons = getByTestId("picker");

    expect(buttons).toBeTruthy();
    expect(buttons).toBeOnTheScreen();
  });

  it("should render a helping message", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Theming />
      </ReThemeProvider>,
    );

    const text = getByTestId("help");

    expect(text).toBeTruthy();
    expect(text).toBeOnTheScreen();

    expect(text.props.children).toEqual("theming.message.start");
  });

  it("should render a button to continue", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <Theming />
      </ReThemeProvider>,
    );

    const button = getByTestId("button");

    expect(button).toBeTruthy();
    expect(button).toBeOnTheScreen();
  });
});
