<script lang="ts">
  import { onMount } from "svelte";

  function leftPad(val: number) {
    return val < 10 ? `0${val}` : val;
  }

  let time = new Date();

  $: hours = time.getHours();
  $: minutes = time.getMinutes();
  $: seconds = time.getSeconds();
  $: ms = time.getMilliseconds();

  $: clock = `${leftPad(hours)}:${leftPad(minutes)}`;
  $: deg1 = Math.min(360 * ((seconds * 1000 + ms) / 60000), 360);
  $: deg2 = Math.min(360 * ((seconds * 1000 + ms) / 60000) + 30, 360);


  let frame;

  function updateTime() {
    time = new Date();
    frame = requestAnimationFrame(updateTime);
  }

  onMount(() => {

    updateTime();

    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  });

</script>

<div
  class="m-auto flex aspect-square border-8 border-transparent w-24 items-center justify-center rounded-full text-5xl clock-bg text-slate-300 pointer-events-none"
  style="{`--deg1: ${deg1}deg; --deg2: ${deg2}deg`}"
>{clock}</div>

<style>
    .clock-bg {
        --deg1: 0deg;
        --deg2: 360deg;
        background: radial-gradient(theme("colors.slate.800"), theme("colors.slate.800")) padding-box, conic-gradient(
                theme("colors.indigo.700") var(--deg1),
                transparent var(--deg2)) border-box;
    }
</style>
