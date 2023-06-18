<script>

export default {
  name: "drawer",
  data() {
    return {
      testName: "Oni-Goroshi",
      testDescription: "dwhdwudwhudaidshdsjdhudhwudhwudhwudhwdushadhwud",
    }
  }
}
//TODO set expansions panel behind drawer

</script>

<template>
  <div class="d-flex justify-space-around">
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel
          v-for="i in 3"
          :key="i"
          title="Item"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>

</style>