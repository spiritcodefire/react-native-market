import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native';
import * as Font from 'expo-font';
import BookScreen from './screens/BookScreen';

const App = () => {
  const [loading, setLoading] = useState(true) ;

  const loadFont = async () => {
    try{
      Font.loadAsync({
        'Gilroy-Bold' :               require('./assets/fonts/Gilroy-Bold.ttf'), 
        "GT-Sectra-Fine-Regular" :    require('./assets/fonts/GT-Sectra-Fine-Regular.ttf'), 
        'Montserrat-Black' :          require('./assets/fonts/Montserrat-Black.ttf'), 
        "Montserrat-Medium":          require('./assets/fonts/Montserrat-Medium.ttf'),
        "Montserrat-SemiBold":        require('./assets/fonts/Montserrat-SemiBold.ttf'),
      })
      setLoading(false);
    }catch(e){
      console.error("erreur", e)
    }
  }

  useEffect(() => {
    loadFont(); 
    console.log("platform : ",  Platform.OS);
  }, []);

  if (loading) {
    return(
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <BookScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }

});


export default App
