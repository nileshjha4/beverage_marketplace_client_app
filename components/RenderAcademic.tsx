import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

 const RenderAcademic = ({data}) => {
    return (
    <View>
      <Markdown>{data}</Markdown>
    </View>
    );
}

export default RenderAcademic