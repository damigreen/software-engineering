import React from 'react'
import Constants from 'expo-constants';
import { Text as Txt, StyleSheet, View } from 'react-native'
import FancyText from './FancyText';
import Text from './Text';
import FlexBoxExample from './FlexBoxExample';
import BigBlueText from './BigBlueText';
import TestComponent from './TestComponent';
import BodyMassIndexCalculator from './BodyMassIndexCalculator';
import { Route, Switch, Redirect } from 'react-router-native';
import AsyncShoppingCart from './AsyncShoppingCart';




const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'purple',
    color: '#fff'
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
      <Txt>Rate Repository Application</Txt>
      {/* <RepositoryList /> */}

      <FancyText>Simple text</FancyText>
      <FancyText isBlue>Blue text</FancyText>
      <FancyText isBig>Big text</FancyText>
      <FancyText isBig isBlue>Big Blue Text</FancyText>

      <Text>Simple text</Text>
      <Text style={{ paddingBottom: 10 } } backgroundColor="orangeBG">Text with custom style</Text>
      <Text backgroundColor="orangeBG" fontWeight='bold' fontSize="subHeading">Bold subheading</Text>
      <Text color="textSecondary">Text with secondary color</Text>

      <FlexBoxExample />

      {/* <BigBlueText /> */}
      <Switch>
        <Route path="/" exact>
          <TestComponent />
        </Route>
        <Redirect to="/" />
      </Switch>

      <BodyMassIndexCalculator />
      <AsyncShoppingCart />
    </View>
  )
}

export default Main;