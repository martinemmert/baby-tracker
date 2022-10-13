<script lang="ts">

  import type { TimelineEntry } from "../../store/timeline";
  import DateFormat from "./DateFormat.svelte";
  import ActivityEmoji from "./ActivityEmoji.svelte";

  export let entry: TimelineEntry;

</script>

<li class="flex mx-4 flex-row items-center justify-start text-slate-200 snap-center rounded-lg bg-amber-100/30">
  <div
    class="flex h-16 w-16 items-center justify-center rounded-full text-3xl">
    <ActivityEmoji activity="{entry.activity}" />
  </div>
  <div>
    <p class="font-bold">
      <DateFormat time="{entry.time}" format="HH:mm" />
      Uhr
    </p>
    <p class="">{entry.activity}</p>
  </div>
</li>

