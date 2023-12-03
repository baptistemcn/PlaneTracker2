import { render } from "@testing-library/react-native";
import { RoundedButton } from "./RoundedButton";
import { ReThemeProvider } from "@theme";

describe("RoundedButton component", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <RoundedButton>PlaneTracker</RoundedButton>
      </ReThemeProvider>,
    );
  });

  it("should render a button with children", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <RoundedButton>PlaneTracker</RoundedButton>
      </ReThemeProvider>,
    );

    const buttonElement = getByTestId("rounded");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    expect(buttonElement.props.children[1]).toEqual("PlaneTracker");
  });

  it("should render a button with default style", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <RoundedButton>PlaneTracker</RoundedButton>
      </ReThemeProvider>,
    );

    const buttonElement = getByTestId("rounded");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    expect(buttonElement.props.style).toEqual({
      borderRadius: 15,
      height: 96,
      width: 96,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderWidth: 6,
      borderColor: "#000000",
    });
  });

  it("should render a button with defined style", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <RoundedButton
          style={{
            borderCurve: "circular",
          }}
        >
          PlaneTracker
        </RoundedButton>
      </ReThemeProvider>,
    );

    const buttonElement = getByTestId("rounded");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    expect(buttonElement.props.style).toEqual({
      borderCurve: "circular",
    });
  });
});
