import { render } from "@testing-library/react-native";

import { ReThemeProvider } from "@theme";

import { ReIcon } from "./Icon";

describe("Icon component", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <ReIcon />
      </ReThemeProvider>,
    );
  });

  it("should render an icon", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReIcon />
      </ReThemeProvider>,
    );

    const icon = getByTestId("icon");

    expect(icon).toBeTruthy();
    expect(icon).toBeOnTheScreen();
  });

  it("should render an icon on default props", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReIcon />
      </ReThemeProvider>,
    );

    const icon = getByTestId("icon");

    expect(icon).toBeTruthy();
    expect(icon).toBeOnTheScreen();

    expect(icon.props.children[0]).toEqual("");

    expect(icon.props.style[0].fontSize).toEqual(18);

    expect(icon.props.style[0].color).toEqual("#FFFFFF");
  });

  it("should render an icon on default props", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReIcon />
      </ReThemeProvider>,
    );

    const icon = getByTestId("icon");

    expect(icon).toBeTruthy();
    expect(icon).toBeOnTheScreen();

    expect(icon.props.children[0]).toEqual("");
  });

  it("should render an icon with defined props", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReIcon name="moon" />
      </ReThemeProvider>,
    );

    const icon = getByTestId("icon");

    expect(icon).toBeTruthy();
    expect(icon).toBeOnTheScreen();

    expect(icon.props.children[0]).toEqual("");
  });

  it("should render an icon with default size", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReIcon />
      </ReThemeProvider>,
    );

    const icon = getByTestId("icon");

    expect(icon).toBeTruthy();
    expect(icon).toBeOnTheScreen();

    expect(icon.props.style[0].fontSize).toEqual(18);
  });

  it("should render an icon with defined size", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReIcon size={32} />
      </ReThemeProvider>,
    );

    const icon = getByTestId("icon");

    expect(icon).toBeTruthy();
    expect(icon).toBeOnTheScreen();

    expect(icon.props.style[0].fontSize).toEqual(32);
  });
});
