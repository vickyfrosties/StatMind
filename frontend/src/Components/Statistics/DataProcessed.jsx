const formatedData = (data) => {
  // dots colors matching emotions
  const emotionColors = {
    happy: "yellow",
    sad: "#0131b8",
    angry: "#ff0800",
    anxious: "rgb(133, 78, 8)",
    overwhelmed: "rgb(10, 10, 10)",
    surprised: "rgb(5, 213, 250)",
  };

  // calculate the frequency of emotion felt during the day
  const emotionCounts = {};

  data.forEach(item => {
    const { createdAt, emotions } = item;
    emotions.forEach(emotion => {
      if (!emotionCounts[createdAt]) {
        emotionCounts[createdAt] = [];
      }
      emotionCounts[createdAt].push({
        emotion,
        color: emotionColors[emotion]
      });
    });
  });
  return chartData;
};

export default formatedData;