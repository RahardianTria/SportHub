import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SportItem = ({ title, desc, icon, status }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>{icon}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descText}>{desc}</Text>
      </View>

      <View style={[styles.badge, status === 'Full' ? styles.badgeFull : styles.badgeOpen]}>
        <Text style={styles.badgeText}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SportItem;