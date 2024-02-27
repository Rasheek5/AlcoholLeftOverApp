import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
  passwordFieldTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  passwordFieldText: {
    color: colors.secondary,
    fontWeight: "500",
  },
});

export default styles;
