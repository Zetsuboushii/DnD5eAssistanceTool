<script>
export default {
  name: "drawer",
  data() {
    return {
      rail: true,
      randomNumber:'',
      characters: [
        ['Char1'],
        ['Char2'],
      ],
      places: [
        ['Place1'],
        ['Place2'],
      ],
      quests: [
          ['Quest1'],
          ['Quest2']
      ],
      items: [
          ['Item1'],
          ['Item2'],
      ],
      monsters: [
          ['Monster1'],
          ['Monster2'],
      ],
      notes: [
          ["Notes1","/notes1"],
          ["Notes2","/notes2"],
      ],
    }
  },methods:
      {
        dice4()
        {
          this.randomNumber = Math.ceil(Math.random()*4)
          alert("Result =" + this.randomNumber)
        },
        dice6()
        {
          this.randomNumber = Math.ceil(Math.random()*6)
          alert("Result =" + this.randomNumber)
        },
        dice8()
        {
          this.randomNumber = Math.ceil(Math.random()*8)
          alert("Result =" + this.randomNumber)
        },
        dice10()
        {
          this.randomNumber = Math.ceil(Math.random()*10)
          alert("Result =" + this.randomNumber)
        },
        dice12()
        {
          this.randomNumber = Math.ceil(Math.random()*12)
          alert("Result =" + this.randomNumber)
        },
        dice20()
        {
          this.randomNumber = Math.ceil(Math.random()*20)
          alert("Result =" + this.randomNumber)
        },
      }
}

</script>
<template>
  <v-card

      width="300">
    <v-layout>
      <v-navigation-drawer
          permanent="true"
          :rail="rail"
          @click="rail = false"
          width="400"
          class="mx-auto"

      >
        <v-list>
          <v-list-item class="mx-auto"
                       prepend-icon="mdi-menu"
                       title="DnD Assistance Tool"
          >
            <template v-slot:append>
              <v-btn
                  class="mx-auto"
                  variant="text"
                  icon="mdi-chevron-left"
                  @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
          <v-list-group value="Database">
            <template v-slot:activator="{ props }">
              <v-list-item
                  class="mx-auto"
                  v-bind="props"
                  title="Database"
                  prepend-icon="mdi-database-outline"
              ></v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list-group value="Characters">
              <template v-slot:activator="{ props }">
                <v-list-item
                    class="mx-auto"
                    v-bind="props"
                    title="Characters"
                    prepend-icon="mdi-account"
                ></v-list-item>
              </template>

              <v-divider></v-divider>

              <v-list-item
                  class="mx-auto"
                  v-for="([title], i) in characters"
                  :key="i"
                  :title="title"
                  :value="title"
              ></v-list-item>
            </v-list-group>

            <v-divider></v-divider>

            <v-list-group value="Places">
              <template v-slot:activator="{ props }">
                <v-list-item
                    class="mx-auto"
                    v-bind="props"
                    title="Places"
                    prepend-icon="mdi-image-filter-hdr-outline"
                ></v-list-item>
              </template>

              <v-divider></v-divider>

              <v-list-item
                  class="mx-auto"
                  v-for="([title, icon], i) in places"
                  :key="i"
                  :value="title"
                  :title="title"
              ></v-list-item>
            </v-list-group>

            <v-divider></v-divider>

            <v-list-group value="Quests">
              <template v-slot:activator="{ props }">
                <v-list-item
                    class="mx-auto"
                    v-bind="props"
                    title="Quests"
                    prepend-icon="mdi-clipboard-list-outline"
                ></v-list-item>
              </template>

              <v-divider></v-divider>

              <v-list-item
                  class="mx-auto"
                  v-for="([title, icon], i) in quests"
                  :key="i"
                  :value="title"
                  :title="title"
              ></v-list-item>
            </v-list-group>

            <v-divider></v-divider>

            <v-list-group value="Items">
              <template v-slot:activator="{ props }">
                <v-list-item
                    class="mx-auto"
                    v-bind="props"
                    title="Items"
                    prepend-icon="mdi-sack-outline"
                ></v-list-item>
              </template>

              <v-divider></v-divider>

              <v-list-item
                  class="mx-auto"
                  v-for="([title], i) in items"
                  :key="i"
                  :value="title"
                  :title="title"
              ></v-list-item>
            </v-list-group>

            <v-divider></v-divider>

            <v-list-group value="Monsters">
              <template v-slot:activator="{ props }">
                <v-list-item
                    class="mx-auto"
                    v-bind="props"
                    title="Monsters"
                    prepend-icon="mdi-skull-outline"
                ></v-list-item>
              </template>

              <v-divider></v-divider>

              <v-list-item
                  class="mx-auto"
                  v-for="([title], i) in monsters"
                  :key="i"
                  :value="title"
                  :title="title"
              ></v-list-item>
            </v-list-group>

            <v-divider></v-divider>
          </v-list-group>

          <v-list-group value="Dice">
            <template v-slot:activator="{ props }">
              <v-list-item
                  class="mx-auto"
                  v-bind="props"
                  title="Dice"
                  prepend-icon="mdi-dice-multiple-outline"
              ></v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list-item v-on:click="dice4"
                class="mx-auto"
                title="d4"
                prepend-icon="mdi-dice-4-outline"
                append-icon="mdi-dice-4-outline"
            ></v-list-item>

            <v-list-item v-on:click="dice6"
                         class="mx-auto"
                         title="d6"
                         prepend-icon="mdi-dice-6-outline"
                         append-icon="mdi-dice-6-outline"
            ></v-list-item>

            <v-list-item v-on:click="dice8"
                         class="mx-auto"
                         title="d8"
                         prepend-icon="mdi-dice-d8-outline"
                         append-icon="mdi-dice-d8-outline"
            ></v-list-item>

            <v-list-item v-on:click="dice10"
                         class="mx-auto"
                         title="d10"
                         prepend-icon="mdi-dice-d10-outline"
                         append-icon="mdi-dice-d10-outline"
            ></v-list-item>

            <v-list-item v-on:click="dice12"
                         class="mx-auto"
                         title="d12"
                         prepend-icon="mdi-dice-d12-outline"
                         append-icon="mdi-dice-d12-outline"
            ></v-list-item>

            <v-list-item v-on:click="dice20"
                         class="mx-auto"
                         title="d20"
                         prepend-icon="mdi-dice-d20-outline"
                         append-icon="mdi-dice-d20-outline"
            ></v-list-item>

          </v-list-group>

          <v-list-group value="Generators">
            <template v-slot:activator="{props}">
              <v-list-item
                class="mx-auto"
                v-bind="props"
                title="Generators"
                prepend-icon="mdi-cog-outline"
              ></v-list-item>
            </template>
          </v-list-group>

          <v-list-group value="Notes">
            <template v-slot:activator="{props}">
              <v-list-item
                class="mx-auto"
                v-bind="props"
                title="Notes"
                prepend-icon="mdi-note-edit-outline"
                ></v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list-item
                class="mx-auto"
                v-for="([name,adress],i) in notes"
                :key="i"
                :value="name"
            >
              <router-link :to="adress">{{ name }}</router-link>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<style scoped>
header {
  line-height: 1.5;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
