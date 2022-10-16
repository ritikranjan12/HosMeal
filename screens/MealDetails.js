import {StyleSheet, ScrollView, View, Text,Image,TouchableOpacity} from 'react-native'
import React, {useLayoutEffect} from 'react'
import { MEALS } from '../data/data'


const MealDetails = ({route}) => {
    const mealid = route.params.mealid
    const meals = MEALS.find((meal) => meal.id===mealid)
    // useLayoutEffect(() => {
    //     const categoryTitle = CATEGORIES.find((category) => category.id === catid).title
    //     navigation.setOptions({
    //         title: categoryTitle,
    //     })
    // },[catid,navigation])
  return (
    <ScrollView style={styles.rootcontainer}>
       <Image style={styles.imgWidth} source={{uri : meals.imageUrl}} />
       <Text style={styles.title}>{meals.title}</Text>
       <View style={styles.details}>
                    <Text style={styles.detailItem}>{meals.duration}m</Text>
                    <Text style={styles.detailItem}>{meals.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem} >{meals.affordability.toUpperCase()}</Text>

        </View>

        <View style={styles.subtitlecontainer}>

       <Text style={styles.subtitle}>Ingredients</Text>
        </View>

       
       {meals.ingredients.map((item) => {
        return <TouchableOpacity  key={item} style={styles.detaillist}>

            <Text style={styles.detailItem}>{item}</Text>

        </TouchableOpacity>
        
       })}

        <View style={styles.subtitlecontainer}>

       <Text style={styles.subtitle}>Steps</Text>
        </View>
        {meals.steps.map((item) => {
        return <TouchableOpacity  key={item} style={styles.detaillist1}>

            <Text style={styles.detailItem}>{item}</Text>

        </TouchableOpacity>
        
       })}
       
    </ScrollView>
  )
}

export default MealDetails


const styles = StyleSheet.create({
    rootcontainer: {
        marginBottom: 12,
    },
    imgWidth: {
        width: '100%',
        height: 350,
    },
    title: {
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        color:"white",
        marginHorizontal: 4,
        fontSize: 18,
    },
    subtitle: {
        color:"#ec7d7d",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',         
    },
    subtitlecontainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#9d6767',
        borderBottomWidth: 2
    },
    detaillist: {
        marginHorizontal: 24,
        marginVertical: 4,
        borderColor: '#9d6767',
        borderWidth: 2,
        backgroundColor: '#b68383',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 8,
        padding: 4,
    },
    detaillist1: {
        marginHorizontal: 24,
        marginVertical: 4,
        borderColor: '#9d6767',
        borderWidth: 2,
        backgroundColor: 'teal',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 8,
    }

});