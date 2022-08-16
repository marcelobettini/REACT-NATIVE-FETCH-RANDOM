import { useGet } from './hooks/useGet';
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';

export default function App() {
  const randomize = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  const [randomChar, setRandomChar] = useState(randomize(1, 826))
  const [data, isLoading, error] = useGet(randomChar)
  const handlePress = () => {
    console.log("Touched");
    const num = randomize(1, 826)
    setRandomChar(num)

  }
  return (
    <View style={styles.container}>
      {isLoading &&
        <ActivityIndicator size="large" color="black" />}
      {data && !isLoading &&
        <View style={[styles.width, styles.spacer]}>
          <Text style={[styles.name, styles.rounded, styles.width, styles.black]}>{data.name}</Text>
          <Image style={[styles.image, styles.rounded]} source={{ uri: data.image }}
            onLoadEnd={() => console.log("load ended...")}
          ></Image>
          <View style={[styles.spacer]}>
            <TouchableWithoutFeedback
              onPressIn={handlePress}
            >
              <Text style={[styles.name, styles.rounded, styles.width, styles.blue, styles.button]}>RANDOMIZE</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>





      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  name: {
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 10,
    textAlign: 'center',
    padding: 10,
  },
  black: {
    backgroundColor: 'black',
    color: 'white',
  },
  blue: {
    backgroundColor: '#483D8B',
    color: 'white',
  },
  rounded: {
    borderRadius: 15
  },
  width: {
    width: 300,
  },
  button: {
    shadowColor: "white",
    shadowOffset: {
      width: 10,
      height: 5
    },
    shadowOpacity: .5,
    shadowRadius: 3,
    elevation: 5
  },
  spacer: {
    marginTop: 20,
  }
});
