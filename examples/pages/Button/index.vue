<template>
<div class="button-example">buttons example</div>
<div class="example-wrap">
    <div class="example-box">
        <div class="title-wrapper">基本用法</div>
        <div class="mb-4">
            <j-button type="">Default</j-button>
            <j-button type="primary">Primary</j-button>
            <j-button type="success">Success</j-button>
            <j-button type="warning">Warning</j-button>
            <j-button type="error">Error</j-button>
        </div>
        <div class="mb-4">
            <j-button plain type="">Plain</j-button>
            <j-button plain type="primary">Primary</j-button>
            <j-button plain type="success">Success</j-button>
            <j-button plain type="warning">Warning</j-button>
            <j-button plain type="error">Error</j-button>
        </div>
        <div class="mb-4">
            <j-button disabled type="">Disabled</j-button>
            <j-button disabled type="primary">Primary</j-button>
            <j-button disabled type="success">Success</j-button>
            <j-button disabled type="warning">Warning</j-button>
            <j-button disabled type="error">Error</j-button>
        </div>
    </div>
    <div class="example-box">
        <div class="title-wrapper">形状</div>
        <div class="mb-4">
            <j-button round type="">Round</j-button>
            <j-button round type="primary">Primary</j-button>
            <j-button round type="success">Success</j-button>
            <j-button round type="warning">Warning</j-button>
            <j-button round type="error">Error</j-button>
        </div>
        <div class="mb-4">
            <j-button circle type="">Circle</j-button>
            <j-button circle type="primary">Primary</j-button>
            <j-button circle type="success">Success</j-button>
            <j-button circle type="warning">Warning</j-button>
            <j-button circle type="error">Error</j-button>
        </div>
        <div class="mb-4">
            <j-button slant type="">Slant</j-button>
            <j-button slant type="primary">Primary</j-button>
            <j-button slant type="success">Success</j-button>
            <j-button slant type="warning">Warning</j-button>
            <j-button slant type="error">Error</j-button>
        </div>
    </div>
    <div class="example-box">
        <div class="title-wrapper">尺寸</div>
        <div class="mb-4">
            <j-button type="" size="large">large Button</j-button>
            <j-button type="" size="default">default Button</j-button>
            <j-button type="" size="small">small Button</j-button>
        </div>
        <div class="mb-4">
            <j-button slant type="primary" size="large">large Button</j-button>
            <j-button slant type="primary" size="default">default Button</j-button>
            <j-button slant type="primary" size="small">small Button</j-button>
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
const handleClick = () => {
    count.value++;
};
</script>

<style lang="scss" scoped>
.button-example {
    display: inline-block;
    border-radius: 20px;
    padding: 2px 10px;
    background-color: #fffde7;
    margin-bottom: 20px;
    box-shadow: 6px 3px #1d89ff,
        6px 3px 1px rgb(0 0 0 / 30%),
        12px -3px #feab3a,
        12px -3px 1px rgb(0 0 0 / 30%),
        16px 5px #ff5964,
        16px 5px 1px rgb(0 0 0 / 30%),
        -6px -5px #28b78d,
        -6px -5px 1px rgb(0 0 0 / 30%),
        -12px 5px #bd2df5,
        -12px 5px 1px rgb(0 0 0 / 30%);
}
.example-wrap {
    display: flex;
    flex-wrap: wrap;
    .example-box {
        border-radius: 4px;
        position: relative;
        padding: 15px;
        width: 500px;
        margin: 0 30px 50px 0;
        text-align: center;
        box-shadow: 0 20px 20px rgb(0 0 0 / 8%);
        border: 1px solid #f1f1f1;
        transition: all .25s cubic-bezier(.02,.01,.47,1);
        .title-wrapper {
            text-align: left;
            margin-bottom: 10px;
        }
        .j_button+.j_button {
            margin-left: 12px;
        }
    }
}
</style>
