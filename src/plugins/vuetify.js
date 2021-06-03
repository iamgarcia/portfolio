import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

var primary = "#0496FF"; // blue
var secondary = "#003F98"; // dark blue
var accent = "#F45E8C"; // pink-red

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: primary,
        secondary: secondary,
        accent: accent,
      },
    },
  },
});
