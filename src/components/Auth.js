import React, {useState} from 'react';
import { View, Text,StyleSheet, Image } from 'react-native';
import LoginForm from "./LoginForm";
import Home from "./Home";

export default function Auth() {

    const [isLogin, setIsLogin] = useState(false);

    const changeForm = () => {
        setIsLogin(!isLogin);
    }

    return (
        <>
            <View style={styles.view}>
                {/* <Image style={styles.logo} source={require("../assets/logo.png")}/> */}
                {isLogin ? (
                    <LoginForm />
                ) : (
                    <Home changeForm={changeForm}/>
                )}
            </View>
            
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        flex:1,
        alignItems: "center"
    },
    logo: {
        resizeMode: "center",
        height: 140,
        marginTop: 50,
        marginBottom: 50,
    },
});