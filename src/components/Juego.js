import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import StyledText from "./StyledText";

const Juego=({route,props})=>{
  const {Modo}=route.params;
    function generateRandomNumber(Modo) {
      //Genera un numero random, segun el modo seleccionado con repetidos o sin repetidos
      let number = '';
      if (Modo==="2"){
        while (number.length < 4) {
          const digit = Math.floor(Math.random() * 10).toString();
          if (!number.includes(digit)) {
            number += digit;
          }
        }
      }
      if (Modo==="1"){
        while (number.length < 4) {
          const digit = Math.floor(Math.random() * 10).toString();
          number += digit;
        }
      }
      return number;
    }

    let randomNumber='';
    randomNumber = generateRandomNumber(Modo);

    let intentos=[];
    const [numeroFinal, setNumeroFinal] = useState('');
const FourDigitInput = () => {
    const [numero, setText] = useState('');


    //Compara el input con el numero en 3 funciones. Una para bien, otra para regular y la ultima para mal
    function Bien(randomNumber,userInput){
      let wellPositioned = 0;
      const randomDigits = randomNumber.split('');
      const userDigits = userInput.split('');
      for (let i = 0; i < 4; i++) {
        if (userDigits[i] === randomDigits[i]) {
          wellPositioned++;
          randomDigits[i] = null;
          userDigits[i] = null;
        }
      }
      return wellPositioned;
    }

    function Regular(randomNumber,userInput){
      let regularPositioned = 0;
      const randomDigits = randomNumber.split('');
      const userDigits = userInput.split('');
      let posicionesBien=[];
      for (let e = 0; e < 4; e++) {
        if (userDigits[e] === randomDigits[e]) {
          posicionesBien.push(e);
          randomDigits[e] = null; // Remove the digit to avoid counting it again
          userDigits[e] = null;
        }
      }
      for (let i = 0; i < 4; i++) {
        if (userDigits[i] !== null && randomDigits.includes(userDigits[i])) {
          if(posicionesBien.includes(i)){

          }else{
            regularPositioned++;
            randomDigits[randomDigits.indexOf(userDigits[i])] = null; // Remove the digit to avoid counting it again
          }
        }
      }
      return regularPositioned;
    }

    notInNumber = 4 - (Bien(randomNumber,numero) + Regular(randomNumber,numero));
    const handleChangeText = (input) => {
      // Limita el input a 4 caracteres
      if (input.length <= 4) {
        setText(input);
        input
        // Si el input tiene exactamente 4 caracteres, guardarlo (puedes agregar la lógica de guardado aquí)
        if (input.length === 4) {
          // Aquí puedes realizar alguna acción, como guardar el número
          console.log('Número guardado:', input);
          intentos.push(input);
          for (let t = 0; t < intentos.length; t++){
            if(t==9 && bien!=4){
              setNumeroFinal(randomNumber);
              setIsVisiblePerdiste(!isVisiblePerdiste);
              console.log('Numero:',randomNumber);
            }
          }
        }
      }
    };
    let bien=0;
    let regular=0;
    let mal=0;
    if (numero.length===4){
      bien=Bien(randomNumber,numero);
      regular=Regular(randomNumber,numero);
      mal=notInNumber
      if(bien===4){
        setNumeroFinal(randomNumber);
        setIsVisible(true);
        console.log('Numero:',randomNumber);
      }
    }

    return (
      <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={4} // Esto asegura que el usuario no pueda ingresar más de 4 caracteres
          value={numero}
          onChangeText={handleChangeText}
          placeholder=""
        />
        <StyledText>{bien}</StyledText>
        <StyledText>{regular}</StyledText>
        <StyledText>{mal}</StyledText>
      </View>
      </View>
    );
  };

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
      justifyContent:'space-around'
    },
    input: {
      height: 15,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      width: '80%',
    },
    visible:{
      display:'flex'
    },
    hidden:{
      display:'none'
    }
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isVisiblePerdiste, setIsVisiblePerdiste] = useState(false);

    return(
        <View>
            <View>
              <StyledText>{numeroFinal}</StyledText>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View>
                <StyledText bold>Intento</StyledText>
                <StyledText textAlingCenter>1</StyledText>
                <StyledText textAlingCenter>2</StyledText>
                <StyledText textAlingCenter>3</StyledText>
                <StyledText textAlingCenter>4</StyledText>
                <StyledText textAlingCenter>5</StyledText>
                <StyledText textAlingCenter>6</StyledText>
                <StyledText textAlingCenter>7</StyledText>
                <StyledText textAlingCenter>8</StyledText>
                <StyledText textAlingCenter>9</StyledText>
                <StyledText textAlingCenter>10</StyledText>
            </View>
            <View>
                <StyledText bold>Numero</StyledText>
                <FourDigitInput/>
                <FourDigitInput/>
                <FourDigitInput/>
                <FourDigitInput/>
                <FourDigitInput/>
                <FourDigitInput/>
                <FourDigitInput/>
                <FourDigitInput/>
                <FourDigitInput/>
                <FourDigitInput/>
            </View>
            <View>
                <StyledText bold>B</StyledText>
            </View>
            <View>
                <StyledText bold>R</StyledText> 
            </View>
            <View>
                <StyledText bold>M</StyledText>
            </View>
        </View>
        <View>
        <View style={isVisible ? styles.visible : styles.hidden}>
              <StyledText>Ganaste Numero: {numeroFinal}</StyledText> 
          </View>
        <View style={isVisiblePerdiste ? styles.visible : styles.hidden}>
            <StyledText>Perdiste Numero: {numeroFinal}</StyledText> 
        </View>
        </View>
        <View>
          <Button
            title="Jugar otra vez"
            onPress={()=>{navigation.navigate('Juego',{Modo})}}
            Jugar otra vez
          />
          <Button
            title="Volver"
            onPress={()=>{navigation.navigate('Seleccion')}}
            Volver
          />
        </View>
        </View>
    )
}

export default Juego