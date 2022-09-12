import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkgreen,
        padding: 5,
        marginHorizontal: 5,
        marginVertical: 8,
        borderRadius: 10,
        elevation: 8,
        shadowColor: 'black',
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    date: {
        fontSize: 14,
        color: 'white',
        fontStyle: 'italic',
    },
    user: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    dislike_count_container: {
        backgroundColor: colors.darkgreen,
        padding: 3,
        borderRadius: 20,
        marginRight: 3,
    },
    dislike_container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 3,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    dislike_text: {
        color: colors.darkgreen,
        fontWeight: 'bold',
    },
    dislike_count_text: {
        color: 'white',
        fontWeight: 'bold',
    },
    footer: {
        alignItems: 'flex-end',
    },
})