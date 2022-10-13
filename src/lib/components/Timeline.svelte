<script lang="ts">

  import TimelineEntry from "./TimelineEntry.svelte";
  import { timelineEntries } from "../../store/timeline.js";
  import { afterUpdate } from "svelte";


  let element;


  afterUpdate(() => {
    console.log("afterUpdate");
    scrollToBottom(element);
  });

  const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: "smooth" });
  };

  $: if (element) {
    console.log("tick");
    scrollToBottom(element);
  }

</script>

<ul class="relative mt-5 flex flex-col items-stretch overflow-y-auto pb-16 timeline space-y-4" bind:this={element}>
  {#each $timelineEntries as entry, i}
    <TimelineEntry entry={entry} />
  {/each}
</ul>


<style>
    .timeline {
        scroll-behavior: smooth;
        overflow-scrolling: touch;
    }
</style>
