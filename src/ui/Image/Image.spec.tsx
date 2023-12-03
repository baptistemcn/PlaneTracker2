import { render } from "@testing-library/react-native";
import { ReImage } from "./Image";
import { DUMMYIMG, FRENCH_FLAG } from "@assets";

describe("ReImage component", () => {
  it("should render", () => {
    render(<ReImage />);
  });

  it("should render an image", () => {
    const { getByTestId } = render(<ReImage />);

    const imgElement = getByTestId("image");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();
  });

  it("should render an image if there is no source set", () => {
    const { getByTestId } = render(<ReImage />);

    const imgElement = getByTestId("image");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement.props.source).toEqual(DUMMYIMG);
  });

  it("should render an image when source is defined", () => {
    const { getByTestId } = render(<ReImage source={FRENCH_FLAG} />);

    const imgElement = getByTestId("image");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement.props.source).toEqual(FRENCH_FLAG);
  });

  it("should render an image with default style", () => {
    const { getByTestId } = render(<ReImage />);

    const imgElement = getByTestId("image");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement.props.style).toEqual({ height: 64, width: 64 });
  });

  it("should render an imlage with defined style", () => {
    const { getByTestId } = render(
      <ReImage styles={{ height: 128, width: 128 }} />,
    );

    const imgElement = getByTestId("image");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement.props.style).toEqual({ height: 128, width: 128 });
  });

  it("should render an image with resizeMode by default", () => {
    const { getByTestId } = render(<ReImage />);

    const imgElement = getByTestId("image");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement.props.resizeMode).toEqual("contain");
  });

  it("should render an image with a defined resizeMode", () => {
    const { getByTestId } = render(<ReImage resizeMode="cover" />);

    const imgElement = getByTestId("image");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement.props.resizeMode).toEqual("cover");
  });
});
