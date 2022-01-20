<script lang="ts">
    import Card from './Card.svelte';
    import CardDataStore, { cardDataStore } from '../stores/cardDataStore';
    import AddCardPopup from './AddCardPopup.svelte';

    export let title: string;
    export let monthAmount: string;

    let showPopup = false;
    let popupTitle = '';

    /**
     * Default the provided section of cards back to the budget ones.
     * @param {String} section the section to default
     */
    function defaultCards (section: string) {
        if (section === 'balances') {
            for (let balance of $CardDataStore.Balance) {
                if (balance.isFromBudget) {
                    balance.deleteFlag = false;
                } else {
                    balance.deleteFlag = true;
                }
            }
        } else if (section === 'income') {
            for (let income of $CardDataStore.Income) {
                if (income.isFromBudget) {
                    income.deleteFlag = false;
                } else {
                    income.deleteFlag = true;
                }
            }
        } else {
            for (let income of $CardDataStore.Expense) {
                if (income.isFromBudget) {
                    income.deleteFlag = false;
                } else {
                    income.deleteFlag = true;
                }
            }
        }
        $CardDataStore = $CardDataStore;
    }

    /**
     * Add a new card to the section provided.
     * @param section
     */
    function addCard (section: string) {
        popupTitle = section;
        togglePopup();
    }
    
    function removeCard (event) {
        const cardId = event.detail.Id;
        const cardSection = event.detail.Section;

        if (cardSection === 'balance') {
            $CardDataStore.Balance.find(({Id}) => Id === cardId).deleteFlag = true;
        } else if (cardSection === 'income') {
            $CardDataStore.Income.find(({Id}) => Id === cardId).deleteFlag = true;
        } else {
            $CardDataStore.Expense.find(({Id}) => Id === cardId).deleteFlag = true;
        }
        $CardDataStore = $CardDataStore;
    }
    /**
     * Opens and closes the trans list popup.
     */
    function togglePopup () {
        showPopup = !showPopup;
    }
</script>
<div class="content">
    <div class="title-container">
        <p class="title">{title} - {monthAmount}</p>
    </div>
    {#if title === 'Inflow'}
        <div class="section-container">
            <div class="section-title-container">
                <p>Balances</p>
                <span class="material-icons-round md-28" on:click="{() => defaultCards('balances')}">refresh</span>
            </div>
            <div class="cards-container inflow">
                {#each $CardDataStore.Balance as balance}
                    {#if !balance.deleteFlag}
                        <Card section='balance' bind:data={balance} on:removeCard={removeCard}/>
                    {/if}
                {/each}
            </div>
            <div class="cards-add-container" on:click="{() => addCard('Balance')}">
                <span class="material-icons-round md-28">add_circle</span>
                <p>Add Balance</p>
            </div>
        </div>
        <div class="section-container">
            <div class="section-title-container">
                <p>Income</p>
                <span class="material-icons-round md-28" on:click="{() => defaultCards('income')}">refresh</span>
            </div>
            <div class="cards-container inflow">
                {#each $CardDataStore.Income as income}
                    {#if !income.deleteFlag}
                        <Card section='income' bind:data={income} on:removeCard={removeCard}/>
                    {/if}
                {/each}
            </div>
            <div class="cards-add-container" on:click="{() => addCard('Income')}">
                <span class="material-icons-round md-28">add_circle</span>
                <p>Add Income</p>
            </div>
        </div>
    {:else}
        <div class="section-container">
            <div class="section-title-container">
                <p>Expense</p>
                <span class="material-icons-round md-28" on:click="{() => defaultCards('expense')}">refresh</span>
            </div>
            <div class="cards-container outflow">
                {#each $CardDataStore.Expense as expense}
                    {#if !expense.deleteFlag}
                        <Card section='expense' bind:data={expense} on:removeCard={removeCard}/>
                    {/if}
                {/each}
            </div>
            <div class="cards-add-container" on:click="{() => addCard('Expense')}">
                <span class="material-icons-round md-28">add_circle</span>
                <p>Add Expense</p>
            </div>
        </div>
    {/if}
    {#if showPopup}
        <div class="backdrop" on:click|self={() => togglePopup()}>
            <AddCardPopup {popupTitle} {togglePopup}/>
        </div>
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

        margin: 15px auto 0 auto;

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
        overflow-y: auto;

        &.inflow {
            margin-top: 10px;
            height: 140px;
        }
        &.outflow {
            margin-top: 10px;
            height: 388px;
        }
    }
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        z-index: 10;
        overflow-y: auto;
    }

</style>