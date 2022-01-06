<script lang="ts">
    export let title: string;
    export let monthAmount: number;
</script>
<div class="content">
    <p class="title">{title} - {monthAmount}</p>
    {#if title === 'Inflow'}
        <div class="section-container">
            <p>Balances</p>
            <span class="material-icons-round md-48">arrow_dropdown</span>
        </div>
    {:else}
        <p>outflow</p>
    {/if}
</div>
<style>
    .content {
        width: 500px;
        height: 85vh;
    }
    .title {
        display: inline-block;
        position: relative;

        font-size: 2.5em;
        text-align: center;
    }
    .title::after {
        position: absolute;
        bottom: -10px;
        left: 0%;

        width: 100%;
        height: 5px;
        content: '';

        background:#a5b1f9;
    }
</style>