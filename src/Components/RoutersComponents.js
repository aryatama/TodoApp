import React from 'react'
import {Text, View, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


export const LogoTitle = (props) => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Icon name="alpha-t-circle-outline" size={30} color="#1488CC" />
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1488CC" }}>TodosApp</Text>
    </View>
  )

export const LogoDrawer = () => {
    const navigation = useNavigation()
    return (
      <TouchableWithoutFeedback onPress={() => { navigation.toggleDrawer() }}>
        <Icon name="menu" size={30} color="#1488CC" style={{ marginLeft: 8 }} />
      </TouchableWithoutFeedback>
    )
  }