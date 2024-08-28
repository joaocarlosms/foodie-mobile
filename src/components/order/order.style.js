import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    order: {
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10
    },
    
    logotipo: {
        width: 80,
        height: 80,
        borderRadius: 6
    },

    texts: {
        flex: 1,
        padding: 8
    },

    containerDataPrice: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    value: {
        color:COLORS.medium_gray,
        fontSize: FONT_SIZE.sm,
    },

    status: {
        color: COLORS.green
    }
}