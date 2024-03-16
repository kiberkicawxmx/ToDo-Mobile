import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem( { el, deleteHandler } ) {

  return (
    <TouchableOpacity onPress={() => deleteHandler(el.key)}>
        <Text style={styles.title}>
            {el.text}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    title: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#fafafa',
        width: '60%',
        margin: 20,
        borderWidth: 1
    }
});
