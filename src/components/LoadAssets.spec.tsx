import { render } from "@testing-library/react-native";
import { LoadAssets } from "./LoadAssets";
import { Text } from "react-native";

jest.mock("expo-font", () => ({
  useFonts: jest.fn(() => [true]),
}));

const mockLoadAssets = {
  children: "PlaneTracker",
};

describe("LoadAssets component", () => {
  it("should render", () => {
    render(
      <LoadAssets>
        <Text>{mockLoadAssets.children}</Text>
      </LoadAssets>,
    );
  });

  it("should render children when fonts are loaded", () => {
    const { getByTestId } = render(
      <LoadAssets>
        <Text testID="element">{mockLoadAssets.children}</Text>
      </LoadAssets>,
    );

    expect(getByTestId("element")).toBeTruthy();
    expect(getByTestId("element")).toBeOnTheScreen();
    expect(getByTestId("element")).toHaveTextContent(mockLoadAssets.children);
  });
});
