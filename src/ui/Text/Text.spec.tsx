import { render } from "@testing-library/react-native";
import { ReText } from "./Text";

const mockText = {
  children: "PlaneTracker",
};

describe("ReText component", () => {
  it("should render", () => {
    render(<ReText>{mockText.children}</ReText>);
  });

  it("should render a text", () => {
    const { getByTestId } = render(<ReText>{mockText.children}</ReText>);

    expect(getByTestId("text").props.children).toEqual(mockText.children);
  });

  it("should render a text with default style", () => {
    const { getByTestId } = render(<ReText>{mockText.children}</ReText>);

    const textElement = getByTestId("text");

    expect(textElement.props.style[0][0]).toEqual({
      fontFamily: "Regular",
      fontSize: 16,
      letterSpacing: 1,
    });
  });

  it("should render a text with defined style", () => {
    const { getByTestId } = render(
      <ReText styles={{ color: "#FF0000" }}>{mockText.children}</ReText>,
    );

    const textElement = getByTestId("text");

    expect(textElement.props.style[0][0]).toEqual({
      color: "#FF0000",
    });
  });
});
