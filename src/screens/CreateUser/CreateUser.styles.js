import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: 'red',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 5,
  },
  buttonView: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 20,
    maxWidth: 250,
  },
  refetchBtn: {
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
export default styles;
