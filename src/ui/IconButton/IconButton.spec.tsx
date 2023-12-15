import { render } from "@testing-library/react-native";

import { ReThemeProvider } from "@theme";
import { assertTextIsUppercase } from "@utils";

import { IconButton } from "./IconButton";

describe("IconButton component", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <IconButton />
      </ReThemeProvider>,
    );
  });

  it("should render a button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <IconButton />
      </ReThemeProvider>,
    );

    const button = getByTestId("icon-button");

    expect(button).toBeTruthy();
    expect(button).toBeOnTheScreen();
  });

  it("should render a button with style", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <IconButton />
      </ReThemeProvider>,
    );

    const button = getByTestId("icon-button");

    expect(button).toBeTruthy();
    expect(button).toBeOnTheScreen();

    expect(button.props.style).toEqual({
      width: 128,
      height: 48,
      borderRadius: 25,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000",
    });
  });

  it("should render a default icon in a button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <IconButton />
      </ReThemeProvider>,
    );

    const icon = getByTestId("icon-container");

    expect(icon.props.children).toBeTruthy();
    expect(icon.props.children).toBeDefined();

    expect(icon.props.children.props.name).toEqual("sun");
  });

  it("should render a defined icon in the button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <IconButton name="cloud-sun" />
      </ReThemeProvider>,
    );

    const icon = getByTestId("icon-container");

    expect(icon.props.children).toBeTruthy();
    expect(icon.props.children).toBeDefined();

    expect(icon.props.children.props.name).toEqual("cloud-sun");
  });

  it("should render a default label in the button", async () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <IconButton />
      </ReThemeProvider>,
    );

    const label = getByTestId("label");

    expect(label).toBeTruthy();
    expect(label).toBeOnTheScreen();

    await assertTextIsUppercase(getByTestId, "label");
  });

  it("should rneder a defined label in the button", async () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <IconButton label="PlaneTracker" />
      </ReThemeProvider>,
    );

    const label = getByTestId("label");

    expect(label).toBeTruthy();
    expect(label).toBeOnTheScreen();

    await assertTextIsUppercase(getByTestId, "label");
  });
});
