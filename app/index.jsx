import {Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import images from "../constants/images";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

export default function App() {
    return (
        <SafeAreaView style={styles.mainView} className="h-full">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className='w-full justify-items-start items-center min-h-[85vh] px-4'>
                    <View className='justify-center items-center flex flex-row gap-0.5'>
                        <Image className='w-24 h-24' source={images.logo}></Image>
                        
                        <Text style={styles.name} className='font-psemibold text-4xl'>SC4N</Text>
                    </View>
                    
                    <Image className='w-80 h-80' source={images.cards}/>

                    <Text className="text-2xl text-white font-bold text-center">
                        Welcome! Every <Text style={styles.name} className="text-secondary-200">SC4N</Text>{"\n"}
                        is a step towards a healthier life{" "}
                    </Text>

                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Empower your journey to better health by making rational choices with every scan
                    </Text>

                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push("/sign-in")}
                        containerStyles="w-2/3 mt-7"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#00364c',
        paddingTop: 50,
    },
    
    name: {
        color: '#41BF49',
    }
})