import { render } from "@testing-library/react-native";

import { ReThemeProvider } from "@theme";

import { ReTextInput } from "./TextInput";

describe("Text Input component", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <ReTextInput />
      </ReThemeProvider>,
    );
  });

  it("should render a text input", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReTextInput />
      </ReThemeProvider>,
    );

    const input = getByTestId("input");

    expect(input).toBeTruthy();
    expect(input).toBeOnTheScreen();

    expect(input.type).toEqual("TextInput");
  });

  it("should render a text input with default props", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReTextInput />
      </ReThemeProvider>,
    );

    const input = getByTestId("input");

    expect(input).toBeTruthy();
    expect(input).toBeOnTheScreen();

    expect(input.props.autoCapitalize).toEqual("none");
    expect(input.props.keyboardType).toEqual("default");
    expect(input.props.placeholder).toEqual("Text");
    expect(input.props.secureTextEntry).toEqual(false);
  });

  it("should render a text input input with default style", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReTextInput />
      </ReThemeProvider>,
    );

    const input = getByTestId("input");

    expect(input).toBeTruthy();
    expect(input).toBeOnTheScreen();

    expect(input.props.style).toEqual({
      width: "100%",
      textAlign: "left",
      padding: 12,
      borderWidth: 2,
      borderRadius: 5,
    });
  });

  it("should render a keyboardtype when defined", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReTextInput keyboardType={"phone-pad"} />
      </ReThemeProvider>,
    );

    const input = getByTestId("input");

    expect(input).toBeTruthy();
    expect(input).toBeOnTheScreen();

    expect(input.props.keyboardType).toBeDefined();
    expect(input.props.keyboardType).toEqual("phone-pad");
  });

  it("should render a placeholder when defined", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReTextInput placeholder="E-mail" />
      </ReThemeProvider>,
    );

    const input = getByTestId("input");

    expect(input).toBeTruthy();
    expect(input).toBeOnTheScreen();

    expect(input.props.placeholder).toBeDefined();
    expect(input.props.placeholder).toEqual("E-mail");
  });

  it("should render autocapitalize when defined", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReTextInput autoCapitalize={"words"} />
      </ReThemeProvider>,
    );

    const input = getByTestId("input");

    expect(input).toBeTruthy();
    expect(input).toBeDefined();

    expect(input.props.autoCapitalize).toBeDefined();
    expect(input.props.autoCapitalize).toEqual("words");
  });

  it("should render with secureTextEntry at true", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReTextInput secureTextEntry={true} />
      </ReThemeProvider>,
    );

    const input = getByTestId("input");

    expect(input).toBeTruthy();
    expect(input).toBeOnTheScreen();

    expect(input.props.secureTextEntry).toBeDefined();
    expect(input.props.secureTextEntry).toEqual(true);
  });

  it("should render an error when defined", async () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReTextInput error="Unable to process" />
      </ReThemeProvider>,
    );

    const input = getByTestId("input");
    const error = getByTestId("error");

    expect(input).toBeTruthy();
    expect(input).toBeOnTheScreen();

    expect(error).toBeTruthy();
    expect(error).toBeOnTheScreen();

    expect(error.props.children).toBeDefined();
    expect(error.props.children).toEqual("Unable to process");
  });
});
