import { render } from "@testing-library/react-native";
import { Spinner } from "./Spinner";

describe("Spinner component", () => {
  it("should render", () => {
    render(<Spinner />);
  });

  it("should render a spinner", () => {
    const { getByTestId } = render(<Spinner />);

    const spinner = getByTestId("spinner");

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();
    expect(spinner).toBeDefined();
  });

  it("should render a spinner with default color", () => {
    const { getByTestId } = render(<Spinner />);

    const spinner = getByTestId("spinner");

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    expect(spinner.props.color).toEqual("#000000");
  });

  it("should render a spinner with defined color", () => {
    const { getByTestId } = render(<Spinner color={"#FF0000"} />);

    const spinner = getByTestId("spinner");

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    expect(spinner.props.color).toEqual("#FF0000");
  });

  it("should render a spinner with default size", () => {
    const { getByTestId } = render(<Spinner />);

    const spinner = getByTestId("spinner");

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    expect(spinner.props.size).toEqual("small");
  });

  it("should render a spinner with defined size", () => {
    const { getByTestId } = render(<Spinner size={"large"} />);

    const spinner = getByTestId("spinner");

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    expect(spinner.props.size).toEqual("large");
  });
});
