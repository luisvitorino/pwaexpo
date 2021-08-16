import React from 'react';
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { colorRed } from './colors';



function topImage() {
  return (
    <View>
      <Image source={ require('./top.jpg')} style={styles.topImage}/>
    </View>
  );
}

function coco(){
  return(
    <View style={styles.container}>
      <View>
        <View style={styles.container}>
          <Text style={styles.coco}>Coco Bambu - Curitiba  
          <MaterialIcons name="star" size={20} color={ colorRed } />
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.frutos}>  Frutos Do Mar - 4,2 km - $$$$$ </Text>
        </View>
      </View>
      <Image source={ require('./coco.jpg')} style={styles.cocoLogo}/>
    </View>
  )
}

function options(){
  return(
    <View style={styles.containerOptions}>
      <View style={styles.options}>
        <TouchableOpacity><Text>Entrega</Text></TouchableOpacity>  
        <MaterialIcons name="keyboard-arrow-down" size={20} color={ colorRed }/>
      </View>

      <View style={styles.viewEspaco}></View>

      <View style={styles.hojeoptions}>
        <TouchableOpacity><Text>Hoje, 60-70 min - R$11,90</Text></TouchableOpacity>   
        <MaterialIcons name="keyboard-arrow-right" size={20} color={ colorRed }/>        
      </View>   
    </View>
  )
}

function avaliacao() {
  return (
    <View style={styles.container}>
      <View style={styles.containerStars}>
        <Text>4,4</Text>
        <Image source={ require('./stars.jpg')} style={styles.stars}/>
      </View>
      <Text style={styles.nine}>999+ avaliações</Text>
    </View>
  );
}

function pedido() {
  return (
    <View style={styles.container}>
      <View style={styles.containerStars}>
        <Text>Pedido mínimo R$ 35,00</Text>
      </View>
      <Image source={ require('./lupa.jpg')} style={styles.lupa}/>
    </View>
  );
}

function linha() {
  return (
    <View style={styles.linha}></View>
  )
}

function clube() {
  return (
    <View style={styles.containerClube}>
      <View style={styles.clube}>
      <TouchableOpacity><Text style={styles.clubeText}>Clube Ifood pra quem ama cupom</Text></TouchableOpacity>   
        <MaterialIcons name="keyboard-arrow-right" size={20} color={ '#468f25' }/>  
      </View>
    </View>  
  )
}

function ofertas() {
  return (
    <Text style={styles.coco}>Ofertas</Text>
  )
}

function imagens() {
  return (
    <View>
      <Image source={ require('./ofertas.jpg')} style={styles.bottomImage}/>
    </View>
  )
}

function lancamentos() {
  return (
    <Text style={styles.coco}>Lançamentos</Text>
  )
}

function fim() {
  return (
    <View style={styles.fim}></View>
  )
}




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View>
      {topImage()}
      {coco()}
      {options()}
      {avaliacao()}
      {pedido()}
      {linha()}
      {clube()}
      {ofertas()}
      {imagens()}
      {linha()}
      {lancamentos()}
      {linha()}
      {fim()}
    </View>
  );
}

const styles = StyleSheet.create({

  topImage: {
    width: 500,
    height: 130,
    justifyContent: 'space-between',
  },

  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    paddingTop: 5
  },

  coco: {
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 25,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',

  },

  cocoLogo: {
    width: 60,
    height: 60,
    justifyContent: 'flex-end',
    paddingRight: 50,
    paddingLeft: 20,
  },

  frutos: {
    fontSize: 13,
    fontWeight: "bold",
    color: '#bbb8b8',
    paddingLeft: 20,
    paddingRight: 50,
  },

  options: {
    paddingLeft: 10,
    paddingRight: 7,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 5,
    borderColor: '#bbb8b8',
    borderWidth: 1,

  },

  containerOptions: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingLeft: 20,
  },
  
  hojeoptions: {
    paddingLeft: 10,
    paddingRight: 7,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 5,
    borderColor: '#bbb8b8',
    borderWidth: 1,

  },

  viewEspaco: {
    width: 10,
    height: 10,
  },  

  stars: {
    width: 100,
    height: 20,
  }, 

  containerStars: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingLeft: 20,
  },

  nine:{
    paddingTop: 10,
    paddingRight: 10,
  },

  lupa: {
    width: 30,
    height: 30,
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 20,
  },

  linha: {
    width: 2,
    height: 2,
    backgroundColor: '#bbb8b8',
  },

  containerClube: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingTop: 30,
    paddingLeft: 20,
    paddingBottom: 30,
  },

  clube: {
    width: 400,
    height: 40,
    backgroundColor: '#d0f5db',
    justifyContent: 'center',
    paddingTop: 10,
    paddingRight: 30,
    paddingLeft: 50,
    paddingBottom: 20,
    borderRadius: 5,
    flexDirection: 'row',
  },

  clubeText:{
    color: '#61c532'
  },

  bottomImage: {
    width: 500,
    height: 300,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 20,
  },

  fim: {
    width: 500,
    height: 300,
    backgroundColor: '#ffffff',
  },

})

//export default Rest;