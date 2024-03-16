import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import ListItem from './ListItem'

export default function Profile( { navigation } ) {

  const [text, setValue] = useState('')

  const onChange = (text) => {
      setValue(text)
  }

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {
          text: text,
          key: Math.random().toString(36).substring(7)
        },
        ...list
      ]
    })
  }

  const [listOfItems, setListOfItems] = useState([
  ])

  const [agree, setAgree] = useState(false);

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.profileTop}>
        <Image 
        style={styles.Shape}
          source={
            require('../assets/images/shape.png')
          }
        />
        <View style={styles.profileInfo}>
          <View>
            <Image 
              style={styles.profileImage}
              source={
                require('../assets/images/profileImage.png')
              }
            />
          </View>  
          <Text style={styles.profileWelcomeTitle}>
            Welcome <Text style={styles.profileName}>
              Ayodamope Bello
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.Main}>
        <View>
          <TextInput style={styles.input} onChangeText={onChange} placeholder='Введите вашу задачу'/>
        </View>
        <View style={styles.dailyTask}>
            <Text>
              Daily Task
            </Text>
            <FlatList data={listOfItems} renderItem={({ item }) => (
              <Text><ListItem el={item} deleteHandler={deleteHandler} /></Text>
            )} />
        </View>
      </View>
      <TouchableOpacity
            style={styles.BtnBG}
            onPress={() => addHandler(text)}
            >
            <Text style={styles.BtnText}>Добавить</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 250,
    height: 50,
    marginTop: 10,
    paddingLeft: 20,
    color: '#000'
  },
  dailyTask: {
    width: '100%',
    backgroundColor: 'rgba(106, 215, 215, 0.3)',
    padding: 10,
    borderRadius: 5,
    top: 20,
    height: 200,
    width: 250
  },
  profileInfo: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 20
  },
  profileImage: {
    width: 70,
    height: 70,
    backgroundColor: 'gray',
    borderRadius: 50,
    marginBottom: 10
  },
  profileTop: {
    width: '100%',
    backgroundColor: '#1DB2AD',
    flex: 1,
    alignItems: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center'
  },
  Main: {
    flex: 1,
    padding: 30
  },
  Shape: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  BtnText: {
    fontSize: 27,
    fontWeight: '600',
    color: "#fff",
  },
  BtnBG: {
    backgroundColor: "#1DB2AD",
    width: 250,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5
  }
});
