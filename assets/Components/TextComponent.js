import { Text } from "react-native";
import {styles} from "../style/StyleSheet"
//Eportando o o texto 
export default function TextComponent({texto}) {
    return (
<Text style={styles.text}>{texto}</Text>

    );
}