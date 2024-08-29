import { observable } from "@legendapp/state";
import { persistObservable } from "@legendapp/state/persist";
import { GlobalState } from "@shared/types";
import { configureObservablePersistence } from "@legendapp/state/persist";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";



configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});

export const globalState$ = observable<GlobalState>({
  colorMode: "dark",
});


persistObservable(globalState$, {
  local: "global_state",
});
