<script setup>
import { getServerState } from "@appbaseio/reactivesearch-vue";
import Search from "../components/search.vue";
const route = useRoute();
const { data, pending, error, refresh } = await useAsyncData(() =>
  getServerState(Search, route.query)
);
const initialState = data.value;
</script>

<template>
  <div>
    <search :initial-state="initialState" />
  </div>
</template>
