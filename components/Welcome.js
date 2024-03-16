import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Image } from 'react-native';

export default function Welcome( { navigation } ) {

  const loadScene = () => {
    navigation.navigate('Registrate')
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <Image 
      style={styles.Shape}
        source={
          require('../assets/images/shape.png')
        }
      />
      <View style={styles.Main}>
        <Image
          source={
            require('../assets/images/welcome.png')
          }
        />
        <View style={styles.Info}>
          <Text style={styles.Title}>
            Get things done with ToDo
          </Text>
          <Text style={styles.SubTitle}>
            welcome to todo where you do you daily task and earn moeny 
          </Text>
        </View>
        <TouchableOpacity
            style={styles.BtnBG}
            onPress={loadScene}
            >
            <Text style={styles.BtnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5'
  },
  Main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Shape: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  Info: {
    width: '70%'
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 30
  },
  SubTitle: {
    fontSize: 13
  },
  BtnText: {
      fontSize: 27,
      fontWeight: '600',
      color: "#fff",
  },
  BtnBG: {
  backgroundColor: "#1DB2AD",
  width: '90%',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  marginBottom: 50,
  paddingVertical: 5,
  borderRadius: 5
  }
});
