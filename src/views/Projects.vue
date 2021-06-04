<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
        md="12"
        lg="12"
        xl="6"
        d-flex
        justify-space-around
        v-for="(project, index) in projects"
        v-bind:key="index"
      >
        <v-card>
          <v-carousel
            hide-delimiters
            :continuous="false"
            :cycle="false"
            :show-arrows="true"
            :show-arrows-on-hover="true"
          >
            <v-carousel-item
              v-for="(image, index) in project.images"
              v-bind:key="index"
              :src="image.src"
            ></v-carousel-item>
          </v-carousel>
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
          <v-card-text>{{ project.text }}</v-card-text>
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
        title: "SE 471 | Software Architecture",
        subtitle:
          "Collection of class labs focused on applying software design patterns",
        text:
          "Addressing real-world software design problems by applying and implementing fundamental, creational, partitioning, structural, and behavioral design patterns.",
        images: [
          {
            src:
              "https://miro.medium.com/max/2400/1*ZJjctWz4cYGzjaUJk7NybQ.jpeg",
          },
          {
            src:
              "https://miro.medium.com/max/2400/1*ZJjctWz4cYGzjaUJk7NybQ.jpeg",
          },
          {
            src:
              "https://miro.medium.com/max/2400/1*ZJjctWz4cYGzjaUJk7NybQ.jpeg",
          },
        ],
        github: "",
      },
      {
        title: "Speech 2 Sign",
        subtitle:
          "Web app for English speakers to communicate words to American Sign Language (ASL) speakers",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates modi reiciendis ex veritatis quaerat labore quibus damillum in? Sit eum maxime ut doloribus amet animi mollitia expedita adipisci exercitationem?",
        images: [
          {
            src:
              "https://miro.medium.com/max/2400/1*ZJjctWz4cYGzjaUJk7NybQ.jpeg",
          },
          {
            src:
              "https://miro.medium.com/max/2400/1*ZJjctWz4cYGzjaUJk7NybQ.jpeg",
          },
        ],
        github: "https://github.com/iamgarcia/speech-2-sign",
      },
      {
        title: "T-Minus Zero",
        subtitle:
          "Android app for users to view the status and information of spaceflight missions",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates modi reiciendis ex veritatis quaerat labore quibus damillum in? Sit eum maxime ut doloribus amet animi mollitia expedita adipisci exercitationem?",
        images: [
          {
            src:
              "https://miro.medium.com/max/2400/1*ZJjctWz4cYGzjaUJk7NybQ.jpeg",
          },
        ],
        github: "https://github.com/iamgarcia/TMinusZero",
      },
    ],
  }),
};
</script>
