<template>
  <v-app>
    <!-- Desktop Menu -->
    <v-app-bar app flat dark color="primary" class="hidden-xs-and-down">
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="./assets/animoji.png"
          transition="scale-transition"
          width="55"
        />
      </div>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn depressed text to="/">Home</v-btn>
        <v-btn depressed text to="/about">About</v-btn>
        <v-btn depressed text to="/projects">Projects</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Mobile Menu -->
    <v-app-bar app flat dark color="primary" class="hidden-sm-and-up">
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="./assets/animoji.png"
          transition="scale-transition"
          width="50"
        />
      </div>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="white--text accent">
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/projects">
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    //
  },

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
