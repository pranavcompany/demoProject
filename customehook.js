import {useEffect} from 'react';
import {BackHandler} from 'react-native';

function useBackAction(navigation, closeAction) {
  useEffect(() => {
    const backAction = () => {
      var key = navigation.state.routeName;
      switch (key) {
        case 'SearchResults':
        case 'TripSummary':
        case 'SeatSelection':
        case 'ShoppingCartScreen':
          closeAction();
          break;

        default:
          navigation.pop();
          break;
      }
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
export default useBackAction;
