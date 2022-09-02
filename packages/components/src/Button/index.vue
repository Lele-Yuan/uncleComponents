<script setup lang="ts">
import { computed } from 'vue';
import constants from '../constants';
import './index.scss';
const emits = defineEmits(['click']);
const props = defineProps({
    "size": {
        "type": String,
        "value": constants.componentSizes
    },
    "type": {
        "type": String,
        "values": constants.types,
        "default": 'default'
    },
    "plain": Boolean,
    "round": Boolean,
    "slant": Boolean,
    "circle": Boolean,
    "disabled": Boolean,
    "color": String,
    "hoverType": {
        "type": String,
        "value": constants.hoverTypes,
        "default": ''
    }
});
const styleClass = computed(() => {
    return {
        [`j_button-${props.type}`]: props.type,
        "is_plain": props.plain,
        "is_round": props.round,
        "is_slant": props.slant,
        "is_circle": props.circle,
        "is_disabled": props.disabled,
        [`j-button-${props.size}`]: props.size,
        [`j-button-hover-${props.hoverType}`]: props.hoverType
    };
});
const buttonStyle = computed(() => {
    return props.color && {
        '--j-button-bg-color': props.color,
        '--j-button-border-color': props.color
    };
});
const handleClick = ($event: Event) => {
    if (props.disabled) return;
    emits('click', $event);
};
</script>
<script lang="ts">
export default {
    "name": 'JButton'
};
</script>

<template>
    <button class="j_button" :class="styleClass" :style="buttonStyle" @click="handleClick">
        <slot></slot>
    </button>
</template>
