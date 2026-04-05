import { Bell } from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EventCard from '../../src/components/EventCard';
import { EventList } from '../../src/data/events';

export default function App() {
  // Penggunaan STATE untuk kategori [cite: 115]
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Football', 'Basketball', 'Badminton'];

  // Logika Filter berdasarkan State
  const filteredEvents = activeCategory === 'All' 
    ? EventList 
    : EventList.filter(e => e.category === activeCategory);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#458fff" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandTitle}>SportHub</Text>
          <Text style={styles.brandSubtitle}>Find your teammates</Text>
        </View>
        <TouchableOpacity style={styles.iconCircle}>
          <Bell color="#000000" size={22} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>
        
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setActiveCategory(item)} // Mengubah State [cite: 113]
              style={[
                styles.categoryItem,
                activeCategory === item && styles.categoryItemActive
              ]}
            >
              <Text style={[
                styles.categoryText,
                activeCategory === item && styles.categoryTextActive
              ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* Events Section - Menggunakan Props [cite: 98] */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
        </View>

        <View style={styles.eventList}>
          {filteredEvents.map((item) => (
            <EventCard key={item.id} item={item} /> // Mengirim Props ke Child [cite: 145]
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#458fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  brandTitle: { fontSize: 26, fontWeight: '800', color: '#ffffff' },
  brandSubtitle: { fontSize: 12, color: '#ffffff' },
  iconCircle: { backgroundColor: '#F0F2F5', padding: 10, borderRadius: 50 },
  sectionHeader: { paddingHorizontal: 24, marginTop: 20, marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: '700' },
  categoryList: { paddingLeft: 24, paddingBottom: 10 },
  categoryItem: { 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderRadius: 25, 
    marginRight: 10, 
    backgroundColor: '#F0F2F5' 
  },
  categoryItemActive: { backgroundColor: '#0066FF' },
  categoryText: { color: '#0066FF', fontWeight: '600' },
  categoryTextActive: { color: '#FFFFFF' },
  eventList: { paddingHorizontal: 24, paddingBottom: 30 },
});