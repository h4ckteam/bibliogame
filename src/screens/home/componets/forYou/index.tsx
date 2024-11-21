import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Avatar from './../../../../assets/avatar.png';

const books = [
  {
    title: "livro1",
    image:  <Image source={require('./../../../../assets/avatar.png')}/>,
    id: 1,
  },
  {
    title: "livro2",
    image:  <Image source={require('./../../../../assets/avatar.png')}/>,
    id: 2,
  },         
];
interface ItemProps {
  title: string;
  image: string;
  id: number;
}
const Item = (item: ItemProps) => {
  console.log("kasokdso",item)
  return (
    <View style={styles.item}>
      {item.image}
      {/* <Image source={require(`./../../../../assets/${image}`)}/> */}
      <Text style={styles.title}>{item.title}</Text>
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
          <FlatList
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
  },
  spacebutton: {
    marginHorizontal: 10,
  },
});
export default ForYou;
