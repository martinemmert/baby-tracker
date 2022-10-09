import { writable } from "svelte/store";

export type TimelineEntry = {
  time: number;
  activity: string;

}

const localDataKey = "timeline-entries";
const localData = JSON.parse(localStorage.getItem(localDataKey) ?? "[]");

export const timelineEntries = writable<TimelineEntry[]>(localData);

timelineEntries.subscribe((data) => {
  localStorage.setItem(localDataKey, JSON.stringify(data));
});

export function addNewTimelineEntry(activity: string) {
  timelineEntries.update((store) => {
    return [...store, { time: Date.now(), activity }];
  });
}
