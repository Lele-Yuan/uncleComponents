<script setup lang="ts">
import { computed } from 'vue';
import './index.scss';
const emits = defineEmits(['click']);
const props = defineProps({
    "type": {
        "type": String,
        "required": true
    }
});
</script>
<script lang="ts">
export default {
    "name": 'JIcon'
};
</script>

<template>
    <i class="j_icon">icon</i>
</template>
