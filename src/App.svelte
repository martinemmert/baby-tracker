<script lang="ts">
  import "./lib/fsm/xstate-inspect";
  import Clock from "./lib/components/Clock.svelte";
  import TimelineEntry from "./lib/components/TimelineEntry.svelte";
  import WakeUpButton from "./lib/components/WakeUpButton.svelte";
  import { addNewTimelineEntry, timelineEntries } from "./store/timeline.js";
  import TimelineSpacer from "./lib/components/TimelineSpacer.svelte";
</script>

<main>
  <div class="my-12">
    <Clock />
  </div>
  <div class="flex flex-col items-center">
    <WakeUpButton on:click={() => addNewTimelineEntry("wake-up")} />
  </div>
  <ul class="flex flex-col items-center space-y-3 mt-5">
    {#each $timelineEntries.reverse() as entry, index}
      <TimelineSpacer />
      <TimelineEntry entry={entry} reverse />
    {/each}
  </ul>

</main>
