<template>
  <div class="flex flex-col p-4">
    <div class="h-20 pb-2 pl-4 flex items-center">
      <h1 class="text-2xl font-semibold">Digit Color</h1>
    </div>
    <div class="space-y-2">
      <p class="font-semibold">Challenge:</p>
      <ul class="ml-10 list-inside list-disc">
        <li>All <span class="italic">even numbers</span> should have a yellow background.</li>
        <li>All <span class="italic">power of 2 numbers</span> should have a blue background.</li>
        <li>All <span class="italic">prime numbers</span> should have a red background.</li>
      </ul>
    </div>
    <div class="mt-6 h-8 flex flex-row space-x-4 justify-center">
      <button class="btn" @click="randomize">Randomize</button>
      <button class="btn" @click="shuffle">Shuffle</button>
    </div>
  </div>
  <div class="flex justify-center">
    <div class="grid grid-cols-12 items-center justify-items-center p-8 shadow-md gap-4">
      <span
        v-for="(number, i) in bag"
        :key="i"
        class="p-2 font-semibold rounded-full"
        :class="conditionalStyle(number)"
      >
        {{ number }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import _ from "lodash";

export default defineComponent({
  name: "DigitColor",
  props: {},
  components: {},
  setup() {
    const nNumbers = 12 * 10;
    const minNumber = 0;
    const maxNumber = 100;

    let bag: Ref<number[]> = ref(Array.from({ length: nNumbers }, (_, i) => i + 1));

    function conditionalStyle(n: number) {
      if (n === 4) {
        return "bg-red-200";
      }
      return "bg-green-100";
    }

    function shuffle(): void {
      bag.value = _.shuffle(bag.value);
    }

    function randomize(): void {
      bag.value = Array.from({ length: nNumbers }, () => _.random(minNumber, maxNumber, false));
    }

    return { bag, conditionalStyle, randomize, shuffle };
  },
});
</script>


<style lang="postcss" scoped>
.btn {
  @apply rounded-md h-full text-white bg-indigo-400 w-24 hover:bg-indigo-500;
}
</style>
