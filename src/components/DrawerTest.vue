<script>
 export default {
  name: "drawerTest",
  data () {
    return {
      rail: true,
      bread: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }
  },
}
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        :rail = "rail"
        permanent="true"
        @click="rail= false"
      >
        <v-list-item
            prepend-avatar="Menu.png"
            title = "Menu"
            nav = "true"
        >
          <template v-slot:append>
            <v-btn
                variant="text"
                icon="chevron_left_icon.png"
                @click="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<style scoped>

</style>