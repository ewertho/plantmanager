import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../colors";
import { Button } from "../components/Button";

export function Welcome() {
  const [visible, setVisible] = useState(false);
  function handleVisibility() {
    setVisible(true);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}suas plantas {"\n"} de forma facil
      </Text>
      <Image source={wateringImg} style={styles.image} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas Nos cuidamos de lembrar você
        sempre que precisar
      </Text>
      <Button title=">" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    width: 292,
    height: 284,
  },
});
