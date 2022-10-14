<script lang="ts">

  import Button from "../components/Button.svelte";
  import { addNewTimelineEntry } from "../../store/timeline";
  import { push } from "svelte-spa-router";

  let contents = "";
  let quantity = "";

  function save() {
    addNewTimelineEntry("diaper", { contents, quantity });
    push("/");
  }

</script>

<main class="h-full max-h-full overflow-hidden text-slate-200">
  <div class="flex h-full max-h-full flex-col justify-center pb-20 space-y-10 mx-8">

    <fieldset class="flex flex-row">

      <legend class="mb-8 text-center text-2xl">What was inside?</legend>

      <label
        class="flex h-20 items-center justify-center flex-1 rounded-l-2xl border-2 border-r border-solid border-slate-400"
        class:bg-slate-400={contents === 'only-pee'}
      >
        <input type="radio" name="content" value="only-pee" bind:group={contents} class="hidden" />
        <span class="text-4xl">💦</span>
      </label>

      <label class="flex h-20  items-center flex-1 justify-center border border-y-2 border-solid border-slate-400"
             class:bg-slate-400={contents === 'both'}>
        <input type="radio" name="content" value="both" bind:group={contents} class="hidden" />
        <span class="text-4xl">💦💩</span>
      </label>

      <label
        class="flex h-20  items-center flex-1 justify-center rounded-r-2xl border-2 border-l border-solid border-slate-400"
        class:bg-slate-400={contents === 'only-poop'}
      >
        <input type="radio" name="content" class="hidden" bind:group={contents} value="only-poop" />
        <span class="text-4xl">💩</span>
      </label>
    </fieldset>

    <fieldset class="flex flex-row">

      <legend class="mb-8 text-center text-2xl">How much?</legend>

      <label
        class="flex h-20 items-center justify-center flex-1 rounded-l-2xl border-2 border-r border-solid border-slate-400"
        class:bg-slate-400={quantity === 'small'}
      >
        <input type="radio" name="content" value="small" bind:group={quantity} class="hidden" />
        <span class="text-2xl">🚗</span>
      </label>

      <label class="flex h-20  items-center flex-1 justify-center border border-y-2 border-solid border-slate-400"
             class:bg-slate-400={quantity === 'medium'}>
        <input type="radio" name="content" value="medium" bind:group={quantity} class="hidden" />
        <span class="text-3xl">🛻</span>
      </label>

      <label
        class="flex h-20  items-center flex-1 justify-center rounded-r-2xl border-2 border-l border-solid border-slate-400"
        class:bg-slate-400={quantity === 'big'}
      >
        <input type="radio" name="content" class="hidden" bind:group={quantity} value="big" />
        <span class="text-4xl">🚛</span>
      </label>
    </fieldset>

    <div class="mt-4 w-full" on:click={save}>
      <Button>Save</Button>
    </div>

  </div>
</main>
