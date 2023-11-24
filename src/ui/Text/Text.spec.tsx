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
});
