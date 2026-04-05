import { Calendar, Trophy, Users } from 'lucide-react-native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Menerima data melalui props { item }
const EventCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfoRow}>
          <Calendar size={14} color="#666666" />
          <Text style={styles.cardInfoText}>{item.date}</Text>
          <Users size={14} color="#666666" style={{ marginLeft: 10 }} />
          <Text style={styles.cardInfoText}>{item.members}</Text>
        </View>
      </View>
      <Trophy size={20} color="#0066FF" />
    </TouchableOpacity>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 15, 
    marginBottom: 15, 
    padding: 12, 
    elevation: 3 
  },
  cardImage: { width: 70, height: 70, borderRadius: 12 },
  cardContent: { flex: 1, marginLeft: 15 },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#000000' },
  cardInfoRow: { flexDirection: 'row', alignItems: 'center' },
  cardInfoText: { fontSize: 12, color: '#666666', marginLeft: 4 },
});