import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from "react-native";
import { styles } from "./styles";

const Register = ({ navigation }) => {
  const login = () => {
    navigation.navigate("Login");
  };

  const register = () => {
    alert("Fazer o registro");
  };

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../assets/background.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.image}
            />
            <View style={styles.formContainer}>
              <Text style={styles.signInText}>Criar Conta</Text>
              <TextInput
                placeholder="Nome"
                placeholderTextColor="#ffffff"
                style={styles.input}
                autoCapitalize="none"
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#ffffff"
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <TextInput
                placeholder="Senha"
                placeholderTextColor="#ffffff"
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
              />
              <TouchableOpacity style={styles.submitButton} onPress={register}>
                <Text style={styles.submitButtonText}>Criar</Text>
              </TouchableOpacity>
              <View style={styles.linkContainer}>
                <Text
                  style={[
                    styles.links,
                    { fontWeight: "normal", marginRight: 10 },
                  ]}
                >
                  Já possui uma conta?
                </Text>
                <TouchableOpacity onPress={login}>
                  <Text style={styles.links}>Entre aqui.</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};


export default Register