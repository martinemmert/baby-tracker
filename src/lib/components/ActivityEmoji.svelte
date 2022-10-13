<script lang="ts">

  export let activity = "";

  let emoji;

  switch (activity) {
    case "breastfeeding":
      emoji = "🤱";
      break;
    case "bottle":
      emoji = "🍼";
      break;
    case "diaper":
      emoji = "💩";
      break;
    case "asleep":
      emoji = "😴";
      break;
    case "wakeup":
      emoji = "⏰";
      break;
  }

</script>

<span>{emoji}</span>
