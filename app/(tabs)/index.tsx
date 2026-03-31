import React from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Search, Trophy, Calendar, Users } from 'lucide-react-native';
// import colors from './assets/theme/colors';
const colors = {
  primary: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
  secondary: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  black: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
};

export default function App() {
  // Komponen Header SportHub
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white()} />
      
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandTitle}>SportHub.</Text>
          <Text style={styles.brandSubtitle}>Find your teammates</Text>
        </View>
        <TouchableOpacity style={styles.iconCircle}>
          <Bell color={colors.black()} size={22} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Utama - Menggunakan Image [cite: 36] */}
        <View style={styles.bannerContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1000&auto=format&fit=crop' }} 
            style={styles.bannerImage} 
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerText}>Join Local Marathon 2024</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Kategori Horizontal - Menggunakan ScrollView [cite: 49] */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryList}>
          {['Football', 'Basketball', 'Badminton', 'Tennis', 'Cycling'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* List Event - Menggunakan View sebagai Card [cite: 24] */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <View style={styles.eventList}>
          <EventCard 
            title="Sunday Morning Football" 
            date="Oct 20, 2024" 
            members="12/22" 
            image="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=500"
          />
          <EventCard 
            title="Badminton Community Cup" 
            date="Nov 05, 2024" 
            members="8/16" 
            image="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=500"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Komponen Kustom untuk Card Event [cite: 11]
const EventCard = ({ title, date, members, image }:any) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: image }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardInfoRow}>
        <Calendar size={14} color={colors.secondary()} />
        <Text style={styles.cardInfoText}>{date}</Text>
        <Users size={14} color={colors.secondary()} style={{ marginLeft: 10 }} />
        <Text style={styles.cardInfoText}>{members}</Text>
      </View>
    </View>
    <Trophy size={20} color={colors.primary()} style={styles.cardIcon} />
  </TouchableOpacity>
);

// Stylesheet [cite: 128]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
  },
  brandTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.primary(),
  },
  brandSubtitle: {
    fontSize: 12,
    color: colors.secondary(),
    marginTop: -4,
  },
  iconCircle: {
    backgroundColor: colors.secondary(0.1),
    padding: 10,
    borderRadius: 50,
  },
  bannerContainer: {
    marginHorizontal: 24,
    marginVertical: 15,
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  bannerText: {
    color: colors.white(),
    fontSize: 18,
    fontWeight: '700',
  },
  bannerButton: {
    backgroundColor: colors.primary(),
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  bannerButtonText: {
    color: colors.white(),
    fontSize: 12,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black(),
  },
  seeAll: {
    color: colors.primary(),
    fontSize: 14,
  },
  categoryList: {
    paddingLeft: 24,
    paddingBottom: 10,
  },
  categoryItem: {
    backgroundColor: colors.primary(0.1),
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.primary(0.2),
  },
  categoryText: {
    color: colors.primary(),
    fontWeight: '600',
  },
  eventList: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white(),
    borderRadius: 15,
    marginBottom: 15,
    padding: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    alignItems: 'center',
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
  cardContent: {
    flex: 1,
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.black(),
    marginBottom: 5,
  },
  cardInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardInfoText: {
    fontSize: 12,
    color: colors.secondary(),
    marginLeft: 4,
  },
  cardIcon: {
    marginLeft: 10,
  }
});