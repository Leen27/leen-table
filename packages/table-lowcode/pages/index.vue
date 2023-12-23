<script setup>
import Button from 'primevue/button';
const { data } = await useFetch('/api/hello')
const checked = ref(false);

</script>

<template>
  <div>
    <pre>{{ data }}</pre>
    <div class="bg-white w-[10px]">555</div>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" raised />
        <Button label="Secondary" severity="secondary" raised />
        <Button label="Success" severity="success" raised />
        <Button label="Info" severity="info" raised />
        <Button label="Warning" severity="warning" raised />
        <Button label="Help" severity="help" raised />
        <Button label="Danger" severity="danger" raised />
    </div>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" :binary="true" />
    </div>
  </div>
</template>
