import {StatusBar, StyleSheet, Text, View} from "react-native";
import {Link} from 'expo-router';

export default function App() {
    return (
        <View className='flex-1 justify-center items-center bg-white'>
            <Text className="text-3xl">Welcome to Barcode!</Text>
            
            <StatusBar style='auto' />
            
            <Link href='/profile' style={{color: 'blue'}}>profile-&gt;</Link>
        </View>
    )
}