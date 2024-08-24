import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text, ScrollView, Dimensions, Alert, Image, StyleSheet} from "react-native";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        username: "",
        phoneNumber: "",
        email: "",
        password: "",
    });

    const submit = async () => {
        if (form.email === "" || form.password === "") {
            Alert.alert("Error", "Please fill in all fields");
        }

        setSubmitting(true);

        try {
            Alert.alert("Success", "User signed in successfully");

            router.replace("/home");
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <SafeAreaView style={styles.mainView} className="h-full">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="w-full flex justify-items-start h-full px-4">
                    <View className='justify-center items-center flex flex-row gap-0.5'>
                        <Image className='w-24 h-24' source={images.logo}></Image>

                        <Text style={styles.name} className='font-psemibold text-4xl'>SC4N</Text>
                    </View>

                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-10"
                        placeholder="example"
                    />

                    <FormField
                        title="Phone number"
                        value={form.phoneNumber}
                        handleChangeText={(e) => setForm({ ...form, phoneNumber: e })}
                        otherStyles="mt-7"
                        keyboardType="phone-number"
                        placeholder="99 999 99 99"
                    />

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                        placeholder="example@gmail.com"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                        placeholder="••••••••"
                    />

                    <CustomButton
                        title="Sign Up"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="flex justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Already have an account?
                        </Text>
                        <Link
                            href="/sign-in"
                            className="text-lg font-psemibold text-secondary">
                            Sign In
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#00364c',
        paddingTop: 10,
    },

    name: {
        color: '#41BF49',
    }
})

export default SignUp;