import { createMachine } from "xstate";
import { useMachine } from "@xstate/svelte";
import { useDevTools } from "./xstate-inspect";

export const appMachine = createMachine({
  predictableActionArguments: true,
  id: "app",
  initial: "init",
  states: {
    init: {
      on: {
        wakeUp: "selectWakeUpMood"
      }
    },
    selectWakeUpMood: {
      on: {
        moodSelected: "init"
      }
    }
  }
});

export const useAppMachine = ({ config, context }: UseMachineParams<typeof appMachine.withConfig> = {}) => {
  return useMachine(
    appMachine.withConfig(config ?? {}, context ?? {}),
    { devTools: useDevTools }
  );
};

