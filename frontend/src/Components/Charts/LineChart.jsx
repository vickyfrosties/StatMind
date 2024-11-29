import axios from "axios";
import { useEffect, useState } from "react";
import {
    VictoryChart,
    VictoryTheme, VictoryAxis,
    VictoryScatter,
    VictoryLegend,
    VictoryBar,
    VictoryStack,
    VictoryPie,
    VictoryLine
} from "victory";

const LineChart = () => {
    const [feelings, setFeelings] = useState([]);
    const mapEmotionToCategory = (emotion) => {
        const emotionMapping = {
            Happy: 'Very Positive',
            Excited: 'Very Positive',
            Sad: 'Negative',
            Angry: 'Very Negative',
            Overwhelmed: 'Negative',
            Surprised: 'Negative',
            Disgust: 'Negative',
        };
        return emotionMapping[emotion] || 'Unknown';
    };

    const emotionColors = {
        Happy: "#FDD012",
        Sad: "#0C5BC1",
        Angry: "#AC0808",
        Disgust: "#266813",
        Overwhelmed: "#6D6D6D",
        Surprised: "#078CB3",
        Anxious: "#E4572E",
    };

    const formatTime = (date) => {
        const hours = date.getHours();
        if (hours >= 6 && hours < 12) return '6AM';
        if (hours >= 12 && hours < 16) return '12PM';
        if (hours >= 16 && hours < 20) return '4PM';
        if (hours >= 20 || hours < 6) return '8PM';
        return 'Unknown';
    };

    const emotionScale = {
        'Very Negative': 1,
        "Negative": 2,
        "Positive": 3,
        'Very Positive': 4,
    };

    // X axis
    const timeScale = {
        '6AM': 1,
        "12PM": 2,
        "4PM": 3,
        '8PM': 4,
    };
    useEffect(() => {
        const getData = async () => {
            const username = localStorage.getItem("username");

            try {
                const response = await axios.get("http://localhost:8000/statistics", { params: { username } });
                console.log(response.data);

                const transformedData = response.data.map((item) => {
                    const date = new Date(item.createdAt);
                    const timeKey = formatTime(date);

                    return {
                        x: timeScale[timeKey] || 0,
                        y: emotionScale[mapEmotionToCategory(item.emotions[0])] || 0,
                        color: emotionColors[item.emotions[0]] || gray
                    };
                });
                setFeelings(transformedData);
                console.log(transformedData);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);


    return (
        <>
            <VictoryChart
                domain={{ x: [0, 4] }}
                width={450} height={375}
                theme={VictoryTheme.material}>
                <VictoryAxis
                    tickValues={[6, 12, 4, 8]}
                    tickFormat={["6AM", "12PM", "4PM", "8PM"]}
                    label="Time of the day"
                />
                <VictoryAxis
                    dependentAxis
                    tickValues={[-2, -1, 0, 1, 2]}
                    tickFormat={["Very Negative", "Negative", "Positive", "Very Positive"]}
                />

                <VictoryLine data={feelings}>

                </VictoryLine>


            </VictoryChart>
        </>
    );
};

export default LineChart;