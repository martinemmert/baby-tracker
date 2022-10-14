<script context="module" lang="ts">

  import Main from "./lib/routes/Main.svelte";
  import ChangeDiaper from "./lib/routes/ChangeDiaper.svelte";

  const routes = {
    "/": Main,
    "/change-diaper": ChangeDiaper
  };
</script>

<script lang="ts">
  import Router from "svelte-spa-router";
</script>

<Router routes="{routes}" />
