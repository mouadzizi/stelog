import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Divider, Input } from "react-native-elements";
import styles from "./SignIn.style";

//importing Icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//Importing animation and style
import * as Animatable from "react-native-animatable";
import { COLORS } from "../../../globalStyle.style";

export default function SignIn({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errMes, setErrMes] = useState("");
  const input = React.useRef();
  const disable = !data.email || !data.password || loading;

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 4;
  };

  const signInAction = () => {
    if (!validateEmail(data.email)) {
      setErrMes("S'il vous plaît, mettez une adresse email valide");
      return;
    }

    if (!validatePassword(data.password)) {
      setErrMes("Le mot de passe doit contenir au moins 4 caractères");
      return;
    }

    setErrMes("");
    if (data.email === "admin@stelog.fr" && data.password === "admin") {
      navigation.replace("homeBottomNav");
    } else {
      setErrMes("Email ou mot de passe invalide");
    }
  };

  return (
    <View style={styles.cotainer}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headline}>S'identifier</Text>
          <Text style={styles.subline}>STELOG Logiciel</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.errorMessage}>{errMes}</Text>
        <Animatable.View animation="fadeInUp" duration={2000}>
          <Input
            onChangeText={(e) => setData({ ...data, email: e })}
            placeholder="votre-mail@gmail.com"
            label="E-mail"
            leftIcon={<Icon name="email" size={20} color={COLORS.secondary} />}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize="none"
            onSubmitEditing={() => input.current.focus()}
          />

          <Input
            onChangeText={(e) => setData({ ...data, password: e })}
            label="Mot de passe"
            placeholder="un grand secret"
            secureTextEntry={true}
            errorStyle={{ color: "red" }}
            leftIcon={
              <Icon
                name="lock-open-outline"
                size={20}
                color={COLORS.secondary}
              />
            }
            autoCapitalize="none"
            onSubmitEditing={() => signInAction()}
            ref={input}
          />
        </Animatable.View>

        <Divider style={{ marginVertical: 15 }} />

        <TouchableOpacity
          onPress={() => signInAction()}
          style={disable ? styles.btnDisable : styles.btn}
          disabled={disable}
        >
          {loading ? (
            <ActivityIndicator
              style={styles.indicator}
              color="white"
              size="large"
              animating
            />
          ) : null}
          <Text style={styles.btnText}>S'identifier</Text>
        </TouchableOpacity>

        <Text style={styles.caption}>Email : admin@stelog.fr</Text>
        <Text style={styles.caption}>password : admin</Text>
      </View>
    </View>
  );
}
