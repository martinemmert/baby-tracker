<script lang="ts">
  import "./lib/fsm/xstate-inspect";
  import { useAppMachine } from "./lib/fsm/app-machine";

  const { state, service, send } = useAppMachine();

</script>

<main>
  <h1 class="text-3xl font-bold underline">Hello World</h1>
</main>

<style>

</style>
