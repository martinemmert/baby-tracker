<button
  on:click
  class="absolute -top-8 -left-8 block h-16 w-16 rounded-full ring-menu-button text-5xl"
>
  <slot />
</button>

<style>
    .ring-menu-button {
        transform-origin: center center;
        transform: translate3d(var(--x), var(--y), 0) scale3d(var(--scale), var(--scale), 1);
        opacity: var(--scale);
    }
</style>
