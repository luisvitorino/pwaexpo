import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';
import { Feather } from '@expo/vector-icons'
import iconSet from '@expo/vector-icons/build/Fontisto';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity,SafeAreaView, ImageStore,StatusBar, Dimensions} from 'react-native';
import { Container, AddressMenu, Location} from './styles'; 
import { MaterialIcons } from '@expo/vector-icons';
import { colorRed } from './colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const {width} = Dimensions.get('window');

//teste ssss

const Main: React.FC = () => {

  function renderHeader(){
    return(
      <Container>
      <View style={styles.container }>  
      <AddressMenu>
        <Location>R. São Pedro, 261</Location>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={20}
          color={ colorRed } />
      </AddressMenu>
      </View>
    </Container>
    )
  }

  function qrCode(){
    return(
      <TouchableOpacity>
      <MaterialCommunityIcons style={styles.qr}
        name="qrcode-scan"
        color={colorRed}
        size={25}
        height={70}
      />
    </TouchableOpacity>
    )
  }

  function renderMarkets(){
    return(
      <View style={styles.containerMarkets}>
        <View style={styles.padding}>
        <View>
          <TouchableOpacity><Text>Restaurantes</Text></  TouchableOpacity>
          <View style={styles.quadVerm}></View>
        </View>
        <View>
          <TouchableOpacity><Text style={styles.mercados}>Mercados</Text></TouchableOpacity>
          <View></View>
        </View>
        </View>
      </View>    
    )
  }

  function options(){
    return(
      <View style={styles.containerOptions}>
        <View style={styles.options}>
          <TouchableOpacity><Text>Ordenar</Text></TouchableOpacity>  
          <MaterialIcons name="keyboard-arrow-down" size={20} color='#bbb8b8' />
        </View>

        <View style={styles.options}>
          <MaterialIcons name="flag" size={15} color='#bbb8b8'/>
          <TouchableOpacity><Text>Pra retirar</Text></TouchableOpacity>           
        </View>   

        <View style={styles.options}>
          <TouchableOpacity><Text>Entrega Grátis</Text></TouchableOpacity>           
        </View> 

        <View style={styles.options}>
          <TouchableOpacity><Text>Vale Refeição</Text></TouchableOpacity>   
          <MaterialIcons name="keyboard-arrow-down" size={20} color='#bbb8b8'/>        
        </View> 
        
      </View>
    )
  }

  function images(){
    return(
      <View style={styles.containerImages2}>
        <View>
          <Image source={ require('./mercado.png')} style={styles.images}/>
          <Text style={styles.imagesText}>Mercado</Text>
        </View>

        <View style={styles.images1}>
          <Image source={ require('./doces.jpg')} style={styles.images}/>
          <Text style={styles.imagesText}>Doces & Bolos</Text>
        </View>

        <View style={styles.images1}>
          <Image source={ require('./promocoes.jpg')} style={styles.images}/>
          <Text style={styles.imagesText}>Promoções</Text>
        </View>

        <View style={styles.images1}> 
          <Image source={ require('./carnes.jpg')} style={styles.images}/>
          <Text style={styles.imagesText}>Carnes</Text>
        </View>
      </View>  
    )
  }

  function images1(){
    return(
      <View style={styles.containerImages2}>
      <View >
        <Image source={ require('./cupom.jpg')} style={styles.cupom}/>
        <View style={styles.pontos}></View>
      </View>
      </View>
    )
  }

  function ultimas(){
    return(
      <View style={styles.container}>
        <Text style={styles.ultimasText}>Últimas lojas</Text>
        <Text style={styles.verMaisText}>Ver mais</Text>
      </View>
    )
  }

  function images2(){
    return(
      <View style={styles.containerImages2}>
        <View >
          <Image source={ require('./manollo.jpg')} style={styles.images2}/>
          <Text>Padaria</Text>
        </View>

        <View>
          <Image source={ require('./rei.jpg')} style={styles.images2}/>
          <Text>Rei do</Text>
        </View>

        <View>
          <Image source={ require('./banoffi.jpg')} style={styles.images2}/>
          <Text>Benoffi</Text>
        </View>

        <View>
          <Image source={ require('./grill.jpg')} style={styles.images2}/>
          <Text>It`s Grill</Text>
        </View>

      </View>
    )
  }

  function restaurantes(){
    return(
      <View style={styles.containerImages2}>
      <View >
        <Image source={ require('./restaurantes.jpg')} style={styles.restaurantes}/>
      </View>
      </View>
    )
  }

  // ** Return All ** //
  return (
    <><SafeAreaView style={styles.container}>
      {renderHeader()}
      {qrCode()}
    </SafeAreaView><SafeAreaView>
      {renderMarkets()}
      {options()}
      {images()}
      {images1()}
      {ultimas()}
      {images2()}
      {restaurantes()}
      </SafeAreaView></>
  )
}


//Styles

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff'
  },

  qr: {
    paddingRight: 20,
    paddingTop: 5,
  },


  touch: {
    alignItems: 'flex-end',
    marginRight: 0,
    marginLeft: '140%',
    right: 0,
    backgroundColor: '#ffffff'
  },

  containerMarkets: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingBottom: 10
  },
  
  markets: {
    backgroundColor: '#ffffff',
    color: "#333",
    fontSize: 16,
    fontWeight: 'bold'
  },

  quadVerm: {
    backgroundColor: colorRed,
    height: 2,
    width: 80,
  },

  padding: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    fontSize: 16,
    fontWeight: "bold"

  },

  mercados: {
    paddingLeft: 20,
  },

  options: {
    paddingLeft: 10,
    paddingRight: 7,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 20,
    borderColor: '#bbb8b8',
    borderWidth: 1,

  },

  containerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  },

  imagesContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'space-between'
  },

  images: {
    width: 90,
    height: 60,
    borderRadius: 10,
    justifyContent: 'space-between',
  },

  images1: {
    width: 90,
    height: 60,
    borderRadius: 10,
    justifyContent: 'space-between',
  },

  imagesText: {
    fontSize: 12,
    justifyContent: 'space-between',
    paddingLeft: 10,  
  },

  imagesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ultimasText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 25,
    justifyContent: "flex-end",

  },

  verMaisText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colorRed,
    paddingLeft: 20,
    paddingRight: 20,
  },

  images2: {
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: 'space-between',
  },

  containerImages2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },

  cupom: {
    width: 350,
    height: 130,
    borderRadius: 10,
    justifyContent: 'space-between',
  },

  restaurantes: {
    width: 430,
    height: 70,
    borderRadius: 10,
    justifyContent: 'space-between',
  },

  pontos: {
    width: 30,
    height: 12,
    borderRadius: 10,
    justifyContent: 'space-between',
  },

})

export default Main;