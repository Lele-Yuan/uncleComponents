<script setup lang="ts">
defineEmits(['click']);
</script>
<script lang="ts">
export default {
    name: 'JButton'
};
</script>

<template>
    <button class="j_button" @click="$emit('click', $event)">
        <slot></slot>
    </button>
</template>

<style scoped>
.j_button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: border-color 0.25s;
}
.j_button:hover {
    border-color: #646cff;
}
.j_button:focus,
.j_button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}
</style>
