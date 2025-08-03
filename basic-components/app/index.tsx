
import { SafeAreaView, Text, View,Button, TouchableOpacity } from "react-native";

export default function Index() {
  return (
   <View>
    <Text>
      
    </Text>
    <TouchableOpacity>
      <Text>Click me</Text>
    </TouchableOpacity>
      <Button title="login" onPress={()=> alert("ini button")}/>
   </View>
  );
}
