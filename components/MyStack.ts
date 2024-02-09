import { styled, YStack } from "tamagui";
import { slate } from "../utils/colors";

export const MyStack = styled(YStack, {
  name: "MyStack",
  backgroundColor: slate[700],
  flex: 1,
  justifyContent: "space-between",
  padding: "$100",
  space: "$10"
});
