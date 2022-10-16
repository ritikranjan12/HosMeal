import { StyleSheet, View, FlatList } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { CATEGORIES, MEALS } from "../data/data"
import MealItem from '../components/MealItem'


const MealsOverviewScreen = ({ route,navigation }) => {
    const catid = route.params.categoryid
    
    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catid) >= 0;
    })
    

    function renderMeal(itemData) {
        return <MealItem id={itemData.item.id} affordability={itemData.item.affordability} complexity={itemData.item.complexity}  duration={itemData.item.duration} imgUrl={itemData.item.imageUrl} title={itemData.item.title} />
    }
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catid).title
        navigation.setOptions({
            title: categoryTitle,
        })
    },[catid,navigation])
    return (
        <View style={styles.container}>
            <FlatList
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMeal}
            />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }

});
