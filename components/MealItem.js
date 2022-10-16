import { StyleSheet, View, Text, Pressable, Image,Platform } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"

const MealItem = ({ id,title, imgUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation();
    
    function handledetails(){
        navigation.navigate('MealDetails', {
            mealid: id,
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable onPress={handledetails} android_ripple={{color: '#ccc'}} style={({pressed}) => (pressed ? styles.buttonPressed: null)}>
                <View style={styles.innerContainer}>

                <View>
                    <Image
                        style={styles.imgWidth}
                        source={{
                            uri: imgUrl
                        }} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}m</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem} >{affordability.toUpperCase()}</Text>

                </View>
                </View>
            </Pressable>

        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : "visible",
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
      buttonPressed:{
        opacity: 0.5,
      },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'

    },
    imgWidth: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    }

});