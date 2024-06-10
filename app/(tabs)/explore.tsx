import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#EBF5FB' }}
      headerImage={<Ionicons size={310} name="people" style={styles.headerImage} />}>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Configurações</ThemedText>
      </ThemedView>

      <View style={styles.section}>
        <TouchableOpacity style={styles.profileImageContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
          <Text style={styles.changePhotoText}>Alterar Foto</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Número de Telefone" keyboardType="phone-pad" />
      </View>

      <ThemedText style={styles.sectionTitle}>Segurança e Privacidade</ThemedText>
      <View style={styles.section}>
        <Button title="Alterar Senha" onPress={() => { }} />
        <Button title="Autenticação de Dois Fatores" onPress={() => { }} />
        <Button title="Privacidade da Conta" onPress={() => { }} />
      </View>

      <ThemedText style={styles.sectionTitle}>Notificações</ThemedText>
      <View style={styles.section}>
        <Button title="Preferências de Notificação" onPress={() => { }} />
      </View>

      <ThemedText style={styles.sectionTitle}>Preferências de Aplicativo</ThemedText>
      <View style={styles.section}>
        <Button title="Tema" onPress={() => { }} />
        <Button title="Idioma" onPress={() => { }} />
        <Button title="Configurações de Localização" onPress={() => { }} />
      </View>

      <ThemedText style={styles.sectionTitle}>Conta</ThemedText>
      <View style={styles.section}>
        <Button title="Excluir Conta" onPress={() => { }} />
        <Button title="Gerenciamento de Dispositivos" onPress={() => { }} />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changePhotoText: {
    marginTop: 8,
    color: '#007BFF',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 16,
    padding: 8,
  },
});
