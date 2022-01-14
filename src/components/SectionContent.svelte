<script lang="ts">
    import Card from './Card.svelte';
    import CardDataStore from '../stores/cardDataStore';

    export let title: string;
    export let monthAmount: string;
</script>
<div class="content">
    <div class="title-container">
        <p class="title">{title} - {monthAmount}</p>
    </div>
    {#if title === 'Inflow'}
        <div class="section-container">
            <div class="section-title-container">
                <p>Balances</p>
                <span class="material-icons-round md-28">refresh</span>
            </div>
            <div class="cards-container">
                {#each $CardDataStore.Balance as balance}
                    {#if !balance.deleteFlag}
                        <Card section='balance' bind:data={balance}/>
                    {/if}
                {/each}
            </div>
            <div class="cards-add-container">
                <span class="material-icons-round md-28">add_circle</span>
                <p>Add Balance</p>
                <p></p>
            </div>
        </div>
        <div class="section-container">
            <div class="section-title-container">
                <p>Income</p>
                <span class="material-icons-round md-28">refresh</span>
            </div>
            <div class="cards-container">
                {#each $CardDataStore.Income as income}
                    {#if !income.deleteFlag}
                        <Card section='income' bind:data={income}/>
                    {/if}
                {/each}
            </div>
            <div class="cards-add-container">
                <span class="material-icons-round md-28">add_circle</span>
                <p>Add Income</p>
            </div>
        </div>
    {:else}
        <p>outflow</p>
    {/if}
</div>
<style lang="scss">
    .content {
        width: 500px;
        height: 85vh;
    }
    .title-container {
        display: flex;
        justify-content: center;
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

        background: #a5b1f9;
    }
    .cards-add-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        margin: 0 auto;
        width: 130px;

        cursor: pointer;

        & > span {
            margin-right: 10px;
        }
    }
    .section-title-container { 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        margin-top: 25px;
        width: 100%;

        & > p {
            font-size: 1.25em;
        }

        & > span {
            margin-left: 5px;

            cursor: pointer;
        }
    }
    .cards-container {
        margin-top: 10px;
    }
</style>