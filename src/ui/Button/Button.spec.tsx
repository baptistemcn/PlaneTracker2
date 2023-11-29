import { render } from "@testing-library/react-native";
import { ReButton } from "./Button";
import { ReThemeProvider } from "@theme";

describe("Button component", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <ReButton />
      </ReThemeProvider>,
    );
  });

  it("should render a button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton />
      </ReThemeProvider>,
    );

    const buttonElement = getByTestId("button");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();
  });

  it("should render a label in a button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton />
      </ReThemeProvider>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();
  });

  it("should render a button with primary variant", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton />
      </ReThemeProvider>,
    );

    const buttonElement = getByTestId("button");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    expect(buttonElement.props.style).toEqual({
      borderRadius: 25,
      height: 50,
      width: 245,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5CB5C",
    });
  });

  it("should render a button with secondary variant", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton variant="secondary" />
      </ReThemeProvider>,
    );

    const buttonElement = getByTestId("button");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    expect(buttonElement.props.style).toEqual({
      borderRadius: 25,
      height: 50,
      width: 245,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#20A39E",
    });
  });

  it("should render a button with defined style", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton style={{ borderRadius: 4, height: 22, width: 42 }} />
      </ReThemeProvider>,
    );

    const buttonElement = getByTestId("button");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    expect(buttonElement.props.style).toEqual({
      borderRadius: 4,
      height: 22,
      width: 42,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5CB5C",
    });
  });

  it("should render a label in a button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton />
      </ReThemeProvider>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.children).toEqual("Click");
  });

  it("should render a defined label in a button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton label="PlaneTracker" />
      </ReThemeProvider>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.children).toEqual("PlaneTracker");
  });

  it("should render a label with a primary design in a button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton variant="primary" />
      </ReThemeProvider>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.style[0][0]).toEqual([
      { fontFamily: "Regular", letterSpacing: 1.5 },
      { color: "#242424" },
    ]);
  });

  it("should render a label with a secondary design in a button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton variant="secondary" />
      </ReThemeProvider>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.style[0][0]).toEqual([
      { fontFamily: "Regular", letterSpacing: 1.5 },
      { color: "#E8EDDF" },
    ]);
  });
});
