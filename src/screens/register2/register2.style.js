import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.light_gray
    },

    form: {
        width: "100%",
        marginBottom: 25
    },

    formHorizontal: {
        flexDirection: "row"
    },

    formGroup: {
        width: "100%",
        marginTop: 25,
        marginBottom: 50
    },

    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        marginBottom: 45,
        backgroundColor: COLORS.white
    },

    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    },

    form70: {
        marginBottom: 10,
        width: "70%",
    },


    form30: {
        marginBottom: 10,
        width: "30%",
        paddingLeft: 10
    }
}