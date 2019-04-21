<template>
  <v-app>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon />
      <v-btn
        icon
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-content>
        <nuxt />
      </v-content>
    </v-toolbar>
  </v-app>
</template>
