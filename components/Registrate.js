import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Image, TextInput } from 'react-native';

export default function Welcome( { navigation } ) {

  const loadScene = () => {
    navigation.navigate('Login')
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
        <View style={styles.Info}>
          <Text style={styles.Title}>
            Welcome On Board
          </Text>
          <Text style={styles.SubTitle}>
            Lets hope you meet your task
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Enter your full name'
          />
          <TextInput
            style={styles.input}
            placeholder='Enter your email'
          />
          <TextInput
            style={styles.input}
            placeholder='Enter your password'
          />
          <TextInput
            style={styles.input}
            placeholder='Confirm password'
          />
        </View>
        <TouchableOpacity
            style={styles.BtnBG}
            >
            <Text style={styles.BtnText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.account}>Already have an account? <Text style={styles.accountReset} onPress={loadScene}>Sign in</Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  account: {
    top: 60
  },
  accountReset: {
    color: '#1DB2AD',
    fontWeight: 'bold'
  },
  form: {
    width: '100%',
    marginTop: 20
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 250,
    height: 50,
    marginTop: 10,
    paddingLeft: 20,
    color: '#000'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5'
  },
  Main: {
    flex: 1,
    alignItems: 'center',
    top: 200,
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
  width: 250,
  top: 50,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 5,
  borderRadius: 5
  }
});
