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
  start: {
    justifyContent: 'flex-start',
  },
  end: {
    justifyContent: 'flex-end',
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    maxWidth: 250,
  },
  refetchBtn: {
    padding: 10,
  },
  buttonViewTest: {},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userTitle: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#2196F3',
    fontSize: 30,
  },
  flatListStyle: {
    marginBottom: 40,
  },
});
export default styles;
