<script lang="ts">
  // import "./lib/fsm/xstate-inspect";
  import Clock from "../components/Clock.svelte";
  import RingMenu from "../components/RingMenu.svelte";
  import Timeline from "../components/Timeline.svelte";
  import NavigationBar from "../components/NavigationBar.svelte";

  let backdrop = false;

  function toggleBackdrop(active) {
    backdrop = active ?? !backdrop;
  }

</script>

<main class="h-full max-h-full overflow-hidden">
  <div class="flex h-full max-h-full flex-col justify-evenly pb-20">
    <div class="pt-4 pb-4 bg-slate-800">
      <Clock />
    </div>
    <Timeline />
    {#if backdrop}
      <div class="fixed inset-0 bg-slate-800/40 backdrop-blur-md transition-all"></div>
    {/if}
    <NavigationBar let:centerX let:centerY>
      <RingMenu on:open={() => toggleBackdrop(true)} on:close={() => toggleBackdrop(false)}
                originX={centerX} originY={centerY - 38} />
    </NavigationBar>
  </div>

</main>
