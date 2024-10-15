import Start from "./components/Start";
import Chat from "./components/Chat";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "[2024-04-07T20:44:48.130Z]  @firebase/auth: Auth (10.3.1)",
]);

const Stack = createNativeStackNavigator();

const App = () => {
  // The web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD5vCtdIYHxmqv2RTZMFOjSfMfEz2eKA80",
  authDomain: "chat-app-42346.firebaseapp.com",
  projectId: "chat-app-42346",
  storageBucket: "chat-app-42346.appspot.com",
  messagingSenderId: "344701913106",
  appId: "1:344701913106:web:943b686567d5cf28ab30cb"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
   // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    /* Wrap the app with NavigationContainer */
    <NavigationContainer>
      {/* Create a stack navigator with initial route Start  */}
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat {...props} db={db} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;