import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, {paddingTop: Platform.OS === 'android' && 40}]}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
