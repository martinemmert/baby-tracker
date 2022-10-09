<script lang="ts">

  import type { TimelineEntry } from "../../store/timeline";
  import DateFormat from "./DateFormat.svelte";

  export let entry: TimelineEntry;

  export let reverse = false;


</script>

<li class="flex w-full flex-row items-center justify-evenly text-slate-200" class:flex-row-reverse={reverse}>
  <div class="w-1/2 grow rounded-xl px-5" class:text-right={!reverse}>{entry.activity}</div>
  <div
    class="flex items-center justify-center h-10 w-10 grow-0 rounded-full border-2 border-solid border-emerald-200 text-center text-xl">
    ⏰
  </div>
  <div class="w-1/2 grow rounded-xl font-bold px-5" class:text-right={reverse}>
    <DateFormat time="{entry.time}" format="HH:mm" />
  </div>
</li>

<style></style>
