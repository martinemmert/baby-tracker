if (import.meta.env.DEV) {
  const { inspect } = await import("@xstate/inspect");
  inspect({
    iframe: false
  });
}

export const useDevTools = import.meta.env.DEV;
