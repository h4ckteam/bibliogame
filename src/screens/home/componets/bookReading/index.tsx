import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Platform, TouchableNativeFeedback} from 'react-native';

const Button = Platform.OS == "android" ? TouchableOpacity : TouchableNativeFeedback;
const BookReading = () => {
    
    return(
        <View style={styles.containerBookReading}>
            <View style={styles.bookBookReading}>
                <Image source={require('./../../../../assets/AdmiravelMundoNovo.png')}/>
            </View>
            <View style={styles.description}>
                <View>
                    <Text style={styles.title}>NOME DO LIVRO</Text>
                </View>
                <View style={styles.porcentagem}>
                    <Text style={styles.resume}>Leitura</Text>
                    <Text style={styles.resume}>78%</Text>
                </View>
                <View>
                    <Button style={styles.button} onPress={()=> console.log("cliquei")}>
                        <Text style={styles.textButton}>
                            Continuar lendo
                        </Text>
                        
                    </Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
containerBookReading:{
    flexDirection: 'row',
},
title:{
    color: '#835525',
    fontSize: 16,
},
porcentagem: {
    flexDirection: "row",
    justifyContent: "space-between",
    
},
button: {
    backgroundColor: "#FF6347",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginTop: 40,
},
textButton:{
    fontSize: 14,
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
},
description: {
    marginLeft: 14,
},
resume: {
    color: '#835525',
    fontSize: 14,
},
});
export default BookReading;