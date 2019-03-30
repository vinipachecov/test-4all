import { createStackNavigator, createAppContainer } from 'react-navigation';
import TelaInicial from '../screens/TelaInicial';
import TelaPrincipal from '../screens/TelaPrincipal';
import TelaServicos from '../screens/TelaServicos';

const baseStack = createStackNavigator({
  TelaInicial: {
    screen: TelaInicial,
  },
  TelaPrincipal: {
    screen: TelaPrincipal,
  },
  TelaServicos: {
    screen: TelaServicos,
  },
}, {
  headerMode: 'none',
});


export default createAppContainer(baseStack);
