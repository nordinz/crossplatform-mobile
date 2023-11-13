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
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  postsTitle: {
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    color: '#2196F3',
    fontSize: 30,
  },
});
export default styles;
