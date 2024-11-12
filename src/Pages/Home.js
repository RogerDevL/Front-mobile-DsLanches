import React from "react";
import {
  Button,
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.containerOne}>
       <ScrollView>
    
    <View style={styles.contentContainer}>
      <View style={styles.container}>

        <View style={styles.header}>
         
          <Text style={styles.title}>Bem-vindo DS'Lanches!</Text>
        
        </View> 

       
        <View style={styles.searchContainer}>
          <FontAwesome
            name="search"
            size={20}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#666"
          />
        </View>

  
        <View style={styles.categoriesContainer}>
          <CategoryIcon name="fastfood" />
          <CategoryIcon name="local-pizza" />
          <CategoryIcon name="local-dining" />
          <CategoryIcon name="restaurant" />
        </View>
      </View>

      <View style={styles.produtoContainer}>
        <Image
          source={require("../../assets/chicken-pizza-with-tomatoes-ranch-sauce.jpg")} 
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>Pizza de frango-93</Text>
          <Text style={styles.description}>
            Ingredientes:Lorem, ipsum, dolor, sed, reprehenderit asperiores
            eos sapiente...
          </Text>
          <Text style={styles.price}>R$ 30,90</Text>
        </View>
      </View>

      <View style={styles.produtoContainer}>
        <Image
          source={require("../../assets/delicious-hot-dog-with-sauce.jpg")} 
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>Hot Dog Master-147</Text>
          <Text style={styles.description}>
            Ingredientes:Lorem, ipsum, dolor, sed, reprehenderit asperiores
            eos sapiente...
          </Text>
          <Text style={styles.price}>R$ 15,90</Text>
        </View>
      </View>

      <View style={styles.produtoContainer}>
        <Image
          source={require("../../assets/still-life-delicious-american-hamburger22.jpg")} 
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>PODRAO-130</Text>
          <Text style={styles.description}>
            Ingredientes:Lorem, ipsum, dolor, sed, reprehenderit asperiores
            eos sapiente...
          </Text>
          <Text style={styles.price}>R$ 15,90</Text>
        </View>
      </View>

      <View style={styles.produtoContainer}>
        <Image
          source={require("../../assets/taco-ingredients-unwrapped-tortilla.jpg")}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>TAQUITO-125</Text>
          <Text style={styles.description}>
            Ingredientes:Lorem, ipsum, dolor, sed, reprehenderit asperiores
            eos sapiente...
          </Text>
          <Text style={styles.price}>R$ 21,90</Text>
        </View>
      </View>
      <View style={styles.produtoContainer}>
        <Image
          source={require("../../assets/pizza-pizza-filled-with-tomatoes-salami-olives.jpg")} 
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>SALAME CREMOSO-117</Text>
          <Text style={styles.description}>
            Ingredientes:Lorem, ipsum, dolor, sed, reprehenderit asperiores
            eos sapiente...
          </Text>
          <Text style={styles.price}>R$ 32,90</Text>
        </View>
      </View>

      <View style={styles.produtoContainer}>
        <View style={styles.info}>
          <Text style={styles.titleAdm}>Para editar ou excluir pedidos</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Apenas ADM</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
</ScrollView>

<Footer />
    </View>
   
  );
}

function CategoryIcon({ name, label }) {
  return (
<View style={styles.category}>
<MaterialIcons name={name} size={30} color="black" />
<Text style={styles.categoryLabel}>{label}</Text>
</View>
  );
}

const styles = StyleSheet.create({
  titleAdm:{
    marginBottom:10,
    fontWeight:'bold',
    display:'flex',
    justifyContent:'center',
    textAlign:'center'
  },
  button: {
    backgroundColor: 'orange', 
    padding: 9, 
    borderRadius: 5, 
    left: '50%', 
    transform: [{ translateX: -75 }],
    width:150
  },
  buttonText: {
    display:'flex',
    justifyContent:'center',
    color: 'white', 
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerOne:{
    flex:1
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
},
header: {
    flexDirection: 'row',
    display:'flex',
    marginBottom: 20,
    textAlign:'center',
    justifyContent:'center'
},
title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    display:'flex',
    justifyContent:'center'
},
searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 20,
},
searchIcon: {
    marginRight: 10,
},
searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
},
categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 20,
},
category: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE5CC',
    width: 70,  
    height: 70, 
    borderRadius: 35, 
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10, 
},
categoryLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
},
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    zIndex: 1, 
  },
  tituloContato: {
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white", 
  },
  tituloInfo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  
  icon: {
    position: "absolute",
    left: 10, 
    top: "50%", 
    transform: [{ translateY: -12 }], 
    width: 24, 
    height: 24,
  },
  produtoContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    width: 300,
    margin: 10,
    backgroundColor: "#FFF3E5",
    borderWidth: 2, 
    borderColor: "orange",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "orange",
  },
});
