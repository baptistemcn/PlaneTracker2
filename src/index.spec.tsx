import { render } from "@testing-library/react-native";
import { Entry } from "./index";

describe("Entry component", () => {
  it("should render", () => {
    render(<Entry />);
  });

  it("should render a text", () => {
    const { getByText } = render(<Entry />);

    const textElement = getByText(
      "Open up App.tsx to start working on your app!",
    );

    expect(textElement.props.children).toEqual(
      "Open up App.tsx to start working on your app!",
    );
  });
});
