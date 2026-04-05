const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    // Shadow untuk Android
    elevation: 4,
    // Shadow untuk iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: '#FF4757', // Warna aksen SportHub
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#F1F2F6',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F3542',
  },
  descText: {
    fontSize: 13,
    color: '#747D8C',
    marginTop: 2,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  badgeOpen: {
    backgroundColor: '#E8F9EE',
  },
  badgeFull: {
    backgroundColor: '#FFEEF0',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});