import { Text, View } from 'react-native';
import {styles}  from "../style/StyleSheet";
import TextComponent from '../Components/TextComponent';
import { useState } from 'react';
import TextInputComponent from '../Components/TextInputComponent';
import { TouchableOpacity } from 'react-native';
//Definindo constantes para o calculo
export default function Home() {
const [fahrenheit,setFahrenheit] = useState("");
const [celsos,setCelsos]=useState("");
const [result,setResult]=useState("");

console.log("Result: ", result);
//Definindo a conta do calculo

  
const cal = () => {
  if(celsos != "" ){
 const result = (celsos *9)  /5 + 32;
 setFahrenheit (result);
 setCelsos ("");
} else {
  alert("Coloca a temperatura ai!")
}
};



//Fazendo o botão e como o resultado do calculo vai aparecer na tela
  return (
    <View style={styles.container}> 
<TextComponent texto={"Calculadora Celso"}/> 
<TextInputComponent Input="Digite a temperatura" valores={celsos} onChangeText={setCelsos}/>
<TouchableOpacity style={styles.botao} onPress={cal}>
<Text>Calcular</Text>
</TouchableOpacity>
<Text>{fahrenheit}</Text>
    </View>

 );
}