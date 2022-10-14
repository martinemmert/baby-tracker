<script lang="ts">
  export let type = "button";
  export let disabled = false;
  export let loading = false;
</script>

<button
  {type}
  on:click
  class="inline-block w-full rounded-md border-2 border-sky-500 bg-sky-500 py-4 text-xl font-bold uppercase text-sky-50 focus:border-amber-300 focus:outline-none"
  {...$$props}
>
  <slot />
</button>
