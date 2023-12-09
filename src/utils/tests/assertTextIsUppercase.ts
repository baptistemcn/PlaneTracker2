import { waitFor, RenderAPI } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";

export const assertTextIsUppercase = async (
  getByTestId: RenderAPI["getByTestId"],
  elementTestId: string,
) => {
  await waitFor(() => {
    const textElement = getByTestId(elementTestId) as ReactTestInstance;
    expect(textElement).toBeDefined();
    expect(textElement.props.children).toEqual(
      expect.stringMatching(/^[A-Z\s]+$/),
    );
  });
};
