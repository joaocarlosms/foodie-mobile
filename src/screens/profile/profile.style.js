import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.light_gray,
        paddingTop: 12
    },

    item: {
        flexDirection: "row",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray
    },

    iconEndereco: {
        width: 30,
        height: 30
    },

    texts: {
        flex: 1,
        marginLeft: 10
    },

    containerIcon: {
        justifyContent: "center"
    },

    title: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    },
    
    subtitle: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm
    },

    iconExpandir: {
        width: 20,
        height: 20
    },

    borderTop: {
        borderTopWidth: 1,
        borderTopColor: COLORS.gray
    }
}