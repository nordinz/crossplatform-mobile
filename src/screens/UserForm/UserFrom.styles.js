import { StyleSheet, StatusBar } from 'react-native';
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 36,
    // border: 1px solid black
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 16,
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userTitle: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#2196F3',
    fontSize: 30,
  },
});
export default styles;
