import { View, Text } from "react-native"

const Dummy=({form})=>{
    return(
        <View>
            <Text>{form.degree}</Text>
            <Text>{form.program}</Text>
            <Text>{form.specialization}</Text>
        </View>
    )
}
export default Dummy