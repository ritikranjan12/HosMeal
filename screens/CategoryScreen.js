import { FlatList} from 'react-native'
import CategoryGrid from '../components/CategoryGrid'
import { CATEGORIES } from "../data/data"


const CategoryScreen = ({navigation}) => {
    
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <CategoryGrid onPress={() => (navigation.navigate('MealsOverview',{
                    categoryid: itemData.item.id,
                }))} title={itemData.item.title} color={itemData.item.color} />
            )}
            numColumns={2}
        />
    )
}

export default CategoryScreen
