import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import List from "./src/screens/List";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreen2 from "./src/screens/SquareScreen2";
import CounterScreen2 from "./src/screens/CounterScreen2";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import threeBox from "./src/screens/threeBox";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: List,
    Image: ImageScreen,
    Counter: CounterScreen,
    Counter2: CounterScreen2,
    Color: ColorScreen,
    Square: SquareScreen,
    Square2: SquareScreen2,
    Text: TextScreen,
    Box: BoxScreen,
    Boxes: threeBox,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
