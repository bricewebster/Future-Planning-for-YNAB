<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let data = {};
    export let section: string;

    const dispatch = createEventDispatcher();

</script>
<div class="content">
    <div class="card-container">
        <span class="material-icons-round md-28 remove-icon" on:click={() => dispatch('removeCard', {Id: data.Id, Section: section}) }>remove_circle</span>
        <input class="card-label" bind:value={data.Name}>
        <input class="card-amount" bind:value={data.Amount}>
    </div>
</div>
<style lang="scss">
    .content {
        margin: 0 auto 20px auto;
        width: 450px;
        height: 50px;

        border: 2px solid #a5b1f9;
    }
    .card-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 5px 20px;

        & > p {
            font-weight: bold;
        }
    }
    .remove-icon {
        cursor: pointer;
    }
    input {
        width: 100px;

        text-align: right;
    }
</style>