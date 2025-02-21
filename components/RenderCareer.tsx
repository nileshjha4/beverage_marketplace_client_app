import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';

const RenderCareer = ({ data }) => {
  return (
    <View>
      <Markdown>{data}</Markdown>
    </View>
  );
};

export default RenderCareer;
