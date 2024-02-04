import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Onboarding from "react-native-onboarding-swiper";
import styles from "./onBoardingView.style";

import { COLORS } from "../../../globalStyle.style";
import * as Animatable from "react-native-animatable";

export default function OnBoardingView({ navigation }) {
  const [loading, setloading] = useState(true);
  let logo = "../../assets/logo.png";
  let image1 = "../../assets/cover1.jpg";
  let image2 = "../../assets/cover2.jpg";

  const animation = {
    0: {
      scale: 1,
    },
    0.3: {
      scale: 1.1,
    },
    0.5: {
      scale: 1.2,
    },
    0.6: {
      scale: 1.3,
    },
    1: {
      scale: 1.4,
    },
  };

  const LoadingLogo = () => {
    return (
      <Animatable.View
        onAnimationEnd={() => setloading(false)}
        style={styles.animatableContainer}
        animation={animation}
        duration={2500}
        easing="linear"
      >
        <Image
          source={require(logo)}
          style={styles.imageSt}
          resizeMode="contain"
        />
      </Animatable.View>
    );
  };

  return (
    <View style={styles.container}>
      {!loading ? (
        <Onboarding
          transitionAnimationDuration={200}
          controlStatusBar={false}
          onSkip={() => {
            navigation.replace("signIn");
          }}
          onDone={() => {
            navigation.replace("signIn");
          }}
          nextLabel="Suivant"
          skipLabel="Passer"
          pages={[
            {
              backgroundColor: COLORS.white,
              image: (
                <Image
                  source={require(image1)}
                  style={styles.ImageStSwiper}
                  resizeMode="contain"
                />
              ),
              title: "STELOG Logiciel",
              subtitle: "LA TECHNOLOGIE POUR UNE VIE PLUS SIMPLE",
            },

            {
              backgroundColor: "#fff",
              image: (
                <Image
                  source={require(image2)}
                  style={styles.ImageStSwiper}
                  resizeMode="contain"
                />
              ),
              title: "Efficacité et rapidité",
              subtitle:
                "Vente de Matériel pour la traçabilité et l’identification (partenaire Zebra)",
            },
          ]}
        />
      ) : (
        <LoadingLogo />
      )}
    </View>
  );
}
