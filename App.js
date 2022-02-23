import React from 'react';
import { SafeAreaView, View, StatusBar, Platform, StyleSheet, Dimensions, ScrollView } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry, List, ListItem } from '@ui-kitten/components';
import { TopNavigationImageTitleShowcase } from './src/components/menu/index';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { TabBarAccessoriesShowcase } from './src/components/tabBar/index';
import { LineChartExample, ProcessRingExample } from './src/components/charts/index'
import { DrawerGroupsShowcase } from './src/components/drawer/index'
import { ViewPagerSimpleUsageShowcase } from './src/components/viewpaper/index'
import { ToggleStatusShowcase } from './src/components/toogle'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10
  }
});

export default () => (
  <SafeAreaView style={{flex: 1}}>
   
    <View style={styles.container}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>        
      <TopNavigationImageTitleShowcase />
      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ProcessRingExample/>
        <LineChartExample/>
        <DrawerGroupsShowcase/>
        <ViewPagerSimpleUsageShowcase/>
        <TabBarAccessoriesShowcase/>
        <ToggleStatusShowcase/>
        </ScrollView>
    </ApplicationProvider>
    
    </View>
  
    
  </SafeAreaView>
  
);