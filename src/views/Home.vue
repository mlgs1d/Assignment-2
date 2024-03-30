<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { format } from "date-fns";

// Weather data fetching
const weatherData = ref(null);

async function fetchWeather() {
  const API_KEY = "b650057dc012a8005361df0886d74a43";
  const BELLEVILLE_ID = "5897885";
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?id=${BELLEVILLE_ID}&appid=${API_KEY}&units=metric`
  );
  weatherData.value = response.data;
}

onMounted(fetchWeather);

// Current date and time
const currentDateAndTime = ref(format(new Date(), "yyyy-MM-dd HH:mm:ss"));

// Update the date and time on each component mount to ensure it's current
onMounted(() => {
  currentDateAndTime.value = format(new Date(), "yyyy-MM-dd HH:mm:ss");
});
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>Current Date and Time: {{ currentDateAndTime }}</p>
    <h2>Belleville Weather</h2>
    <p v-if="weatherData">Temperature: {{ weatherData.main.temp }}°C</p>
    <p v-else>Loading weather data...</p>
  </div>
</template>
