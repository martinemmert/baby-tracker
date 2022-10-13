<script lang="ts">
  import RingMenuButton from "./RingMenuButton.svelte";
  import { spring } from "svelte/motion";
  import { addNewTimelineEntry } from "../../store/timeline.js";
  import { createEventDispatcher } from "svelte";
  import ActivityEmoji from "./ActivityEmoji.svelte";

  export let open = false;
  export let diameter = 120;
  export let startAngle = -90;
  export let endAngle = 90;
  export let originX = window.innerWidth * 0.5;
  export let originY = window.innerHeight - 100;
  export let items = [
    {
      value: "breastfeeding",
      label: "🤱"
    },
    { value: "bottle", label: "🍼" },
    { value: "diaper", label: "💩" },
    { value: "asleep", label: "😴" },
    { value: "wakeup", label: "⏰" }
  ];

  const stiffness = 0.25;
  const damping = 0.45;
  const deltaAngle = Math.abs(startAngle - endAngle) / (items.length - 1);

  const dispatch = createEventDispatcher();

  const animation = spring(0, { stiffness, damping });

  let animationStep, distance, angle, scale;

  $: {
    animationStep = $animation / 100;
    distance = diameter * animationStep;
    angle = deltaAngle * animationStep;
    scale = Math.min(1, animationStep);
  }

  function toggleMenu() {
    open = !open;
    animation.set(open ? 100 : 0);
    animation.damping = !open ? 1 : damping;
    animation.stiffness = !open ? 0.35 : stiffness;
    dispatch(open ? "open" : "close");
  }

  function getX(angle, i, distance) {
    return Math.cos(Math.PI / 180 * (startAngle + angle * i - 90)) * distance;
  }

  function getY(angle, i, distance) {
    return Math.sin(Math.PI / 180 * (startAngle + angle * i - 90)) * distance;
  }

</script>

<style lang="postcss">
    .ring-menu {
        top: var(--origin-y);
        left: var(--origin-x);
    }

    .ring-menu:not(.open):before {
        @apply absolute -top-12 -left-12 block flex h-24 w-24 rounded-full bg-slate-800/40 backdrop-blur-md;
        content: "";
    }
</style>

<nav class="absolute ring-menu" style={`--origin-y:${originY}px; --origin-x:${originX}px`} class:open>
  {#each items as item, i}
    {#if item.children}
      <svelte:self items={item.children}
                   startAngle={-45}
                   endAngle={45}
                   originX={originX + getX(deltaAngle, i, distance)}
                   originY={originY + getY(deltaAngle, i, distance)}
                   let:toggle>
        <RingMenuButton
          on:click={() => {
          toggle();
          toggleMenu()
        }}
          --x={`0px`}
          --y={`0px`}
          --scale={scale}
        >
          <ActivityEmoji activity="{item.value}" />
        </RingMenuButton>
      </svelte:self>
    {:else }
      <RingMenuButton
        --x={`${getX(deltaAngle, i, distance)}px`}
        --y={`${getY(deltaAngle, i, distance)}px`}
        --scale={scale}
        on:click={() => {
          toggleMenu();
          addNewTimelineEntry(item.value)
        }}
      >
        <ActivityEmoji activity="{item.value}" />
      </RingMenuButton>
    {/if}
  {/each}


  <slot toggle="{toggleMenu}">
    <button
      class="absolute -top-8 -left-8 flex h-16 w-16 items-center justify-center rounded-full text-white drop-shadow-2xl"
      class:bg-emerald-500={!open}
      on:click={toggleMenu}
    >
      {#if !open}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
            fill="currentColor"
          />
        </svg>
      {:else }
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
            fill="currentColor" />
        </svg>
      {/if}
    </button>
  </slot>
</nav>
