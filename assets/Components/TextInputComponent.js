
import {TextInput} from 'react-native';
import {styles } from "../style/StyleSheet";
//definindo a caixa de texto onde vou colocar os valores para realizar o calculo
export default function TextInputComponent({Input , valores , onChangeText}){
return (
<TextInput style={styles.Input} placeholder={Input} value={valores} onChangeText={onChangeText}/>

);
}




