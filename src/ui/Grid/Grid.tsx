import { ReactElement } from "react";
import { FlatList, View } from "react-native";

import { GridProps, GridDataProps } from "@types";

import { useStyles } from "./Grid.styles";

export const Grid = ({
  columns = 2,
  data,
  gridStyles,
  testID = "grid",
}: GridProps) => {
  const styles = useStyles();

  const renderItem = ({ item }: { item: GridDataProps }) =>
    item.children as ReactElement;

  return (
    <View style={[styles.grid, gridStyles]} {...{ testID }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id!}
        numColumns={columns}
      />
    </View>
  );
};
