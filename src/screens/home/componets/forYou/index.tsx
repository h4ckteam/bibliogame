import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const books = [
  {
    title: "A cabana",
    image:  <Image source={require('./../../../../assets/cabana.png')}/>,
    time: 10,
    id: 1,
  },
  {
    title: "Admirável mundo novo",
    image:  <Image source={require('./../../../../assets/AdmiravelMundoNovo.png')}/>,
    time: 10,
    id: 2,
  }, 
  {
    title: "livro3",
    image:  <Image source={require('./../../../../assets/cabana.png')}/>,
    time:10,
    id: 3,
  },        
];
interface ItemProps {
  title: string;
  image: string;
  id: number;
  time: number;
}
const Item = (item: ItemProps) => {

  return (
    <View style={styles.item}>
      {item.image}
      {/* <Image source={require(`./../../../../assets/${image}`)}/> */}
      <Text style={StyleSheet.flatten([styles.title, {fontWeight: 900}])}>{item.title}</Text>
      <Text>{item.time + "min"}</Text>
    </View>
  );
}

const ForYou = () => {
    console.log(<Icon name="chevron-left" size={72} color="#835525" />)
  return (
    <View style={styles.containerForYou}>
      <View style={styles.headerForYou}>
        <View>
          <Text
            style={StyleSheet.flatten([{color: '#835525', fontWeight: 900}])}>
            Para você
          </Text>
        </View>
        <View style={styles.buttonsLeftRight}>
          <View>
            <TouchableOpacity style={styles.spacebutton}>
                <Icon name="chevron-left" size={24} color="#835525" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
            <Icon name="chevron-right" size={24} color="#835525"  />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.booksForYou}>
        <View style={styles.book}>
          <View>
            <FlatList style={styles.flat}
            data={books}
            renderItem={({item}) =>  <Item {...item}  /> }
            keyExtractor={item => item.id}
            horizontal
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerForYou: {
    marginTop: 40,
  },
  buttonsLeftRight: {
    flexDirection: 'row',
  },
  headerForYou: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22
  },
  spacebutton: {
    marginHorizontal: 10,
  },
  item: {
      marginRight: 24, 
      alignItems: 'center',
      justifyContent:'center'
      
  },
  title: {
    color: "#835525",
  },
  
});
export default ForYou;
