import { View, Text, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';

const RenderScholarShip = ({data}) => {
  return (
   <View>
      <Markdown>{data}</Markdown>
    </View>
  )
}

export default RenderScholarShip