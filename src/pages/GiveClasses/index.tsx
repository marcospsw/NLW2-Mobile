import React from 'react'
import { View, ImageBackground, Text } from 'react-native'

import giveClaassesBgImg from '../../assets/images/give-classes-background.png'
;
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses (){
  const { goBack } = useNavigation();

  function handleNavigateBack(){
    goBack();
  }

  return (
    <View  style={styles.container}>
      <ImageBackground resizeMode="contain" source={giveClaassesBgImg} style={styles.content}>
        <Text style={styles.title}>
          Quer ser um proffy?
        </Text>
        <Text style={styles.description}>
          Para se cadastrar como professor você precisa acessar nossa pagina web
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText} >Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;