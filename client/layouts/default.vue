<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          @click.stop="drawer = !drawer"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title
        v-text="title"
      />
      <v-spacer />
      <v-toolbar-items
        class="hidden-xs-only"
      >
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          flat
        >
          <v-icon
            left
          >
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'home',
          to: '/'
        },
        {
          icon: 'supervisor_account',
          title: 'owners',
          to: '/owners'
        }
      ],
      right: true,
      title: 'Demo'
    }
  }
}
</script>
