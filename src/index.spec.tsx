import { render, waitFor } from "@testing-library/react-native";
import { Entry } from "./index";

describe("Entry component", () => {
  it("should render", async () => {
    await waitFor(() => {
      render(<Entry />);
    });
  });
});
