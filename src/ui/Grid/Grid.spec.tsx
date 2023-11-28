import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import { Grid } from "./Grid";

const mockData = [
  { id: "1", children: <Text key="1">Item 1</Text> },
  { id: "2", children: <Text key="2">Item 2</Text> },
  { id: "3", children: <Text key="3">Item 3</Text> },
];

describe("Grid component", () => {
  it("should render", () => {
    render(<Grid />);
  });

  it("should render the grid correctly", () => {
    const { getByText } = render(<Grid data={mockData} />);

    const Item1 = getByText("Item 1");
    const Item2 = getByText("Item 2");

    expect(Item1).toBeTruthy();
    expect(Item1).toBeDefined();
    expect(Item1).toBeOnTheScreen();

    expect(Item2).toBeTruthy();
    expect(Item2).toBeDefined();
    expect(Item2).toBeOnTheScreen();
  });

  it("should render the grid with default number of column", () => {
    const { getAllByText } = render(<Grid data={mockData} columns={3} />);
    const items = getAllByText(/Item/);
    expect(items).toHaveLength(mockData.length);

    items.forEach((item, index) => {
      const expectedText = `Item ${index + 1}`;
      expect(item.props.children).toEqual(expectedText);
    });
  });

  it("should render the grid with default style", () => {
    const { getByTestId } = render(<Grid data={mockData} />);

    const gridElement = getByTestId("grid");

    expect(gridElement.props.style[0]).toBeTruthy();
    expect(gridElement.props.style[0]).toBeDefined();
    expect(gridElement.props.style[0]).toStrictEqual({
      flex: 1,
      margin: 5,
      maxHeight: "30%",
    });
  });

  it("should render the grid with defined style", () => {
    const { getByTestId } = render(
      <Grid data={mockData} gridStyles={{ backgroundColor: "red" }} />,
    );

    const gridElement = getByTestId("grid");

    expect(gridElement.props.style[1]).toBeTruthy();
    expect(gridElement.props.style[1]).toBeDefined();
    expect(gridElement.props.style[1]).toStrictEqual({
      backgroundColor: "red",
    });
  });
});
