<script lang="ts">
  import dayjs from "dayjs";

  export let time: number | undefined;
  export let format: string = "HH:mm:ss";

  $: timeString = dayjs(time ?? Date.now()).format(format);

</script>

{timeString}
