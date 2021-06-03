<template>
  <!-- <v-container grid-list-xl>
    <v-layout row wrap align-center>
      <v-flex v-for="project in projects" :key="project.title">
        <v-card :width="500">
          <v-img :aspect-ratio="16 / 9" :src="card.src"></v-img>
          <v-card-title v-text="card.title"></v-card-title>
          <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
          <v-card-text v-text="card.text"></v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon :href="card.github" target="_blank">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container> -->
  <v-container>
    <v-row>
      <v-col sm="12" md="12" lg="12" xl="6" d-flex justify-space-around v-for="project in projects" :key="project.title">
        <v-card>
          <v-carousel hide-delimiters :continuous="false" :cycle="false" :show-arrows="true" :show-arrows-on-hover="true">
            <v-carousel-item v-for="(project, i) in projects" :key="i" :src="project.src"></v-carousel-item>
          </v-carousel>
          <v-card-title>{{project.title}}</v-card-title>
          <v-card-subtitle>{{project.subtitle}}</v-card-subtitle>
          <v-card-text>{{project.text}}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon :href="project.github" target="_blank">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: "SE 471 | Software Design Patterns",
        subtitle: "Collection of class labs focused on applying software design patterns",
        text: "Addressing real-world software design problems by applying and implementing fundamental, creational, partitioning, structural, and behavioral design patterns.",
        src: "https://miro.medium.com/max/2400/1*ZJjctWz4cYGzjaUJk7NybQ.jpeg",
        github: "",
      },
      {
        title: "Speech 2 Sign",
        subtitle: "Web app for English speakers to communicate words to American Sign Language (ASL) speakers",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates modi reiciendis ex veritatis quaerat labore quibus damillum in? Sit eum maxime ut doloribus amet animi mollitia expedita adipisci exercitationem?",
        src: "https://miro.medium.com/max/2400/1*ZJjctWz4cYGzjaUJk7NybQ.jpeg",
        github: "https://github.com/iamgarcia/speech-2-sign",
      },
      {
        title: "T-Minus Zero",
        subtitle: "Android app for users to view the status and information of spaceflight missions",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates modi reiciendis ex veritatis quaerat labore quibus damillum in? Sit eum maxime ut doloribus amet animi mollitia expedita adipisci exercitationem?",
        src: "https://miro.medium.com/max/2400/1*ZJjctWz4cYGzjaUJk7NybQ.jpeg",
        github: "https://github.com/iamgarcia/TMinusZero",
      },
    ],
  }),
};
</script>