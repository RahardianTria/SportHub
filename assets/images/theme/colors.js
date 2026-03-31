// File: assets/theme/colors.js
const colors = {
    primary: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`, // Biru Sporty
    secondary: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    accent: (opacity = 1) => `rgba(255, 107, 107, ${opacity})`, // Merah untuk aksen/event
};
export default colors;