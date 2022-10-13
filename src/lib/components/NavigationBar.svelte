<script>

  import { afterUpdate, onMount } from "svelte";

  let el, centerX = 0, centerY = 0;

  const calcCenter = (element) => {
    centerX = element?.offsetWidth * 0.5 ?? 0;
    centerY = element?.offsetHeight * 0.5 ?? 0;
  };

  $: calcCenter(el);

</script>

<nav bind:this={el} class="fixed bottom-0 left-0 right-0 h-20 bg-emerald-500/50">
  <slot {centerX} {centerY} />
</nav>
