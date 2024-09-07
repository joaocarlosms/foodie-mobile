import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.light_gray,
        paddingLeft: 12,
        paddingRight: 12
    },

    containerList: {
        flexGrow: 1
    },

    empty: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 80
    },

    emptyText: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm
    }
}