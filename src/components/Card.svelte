<script lang="ts">
    import CardDataStore from '../stores/cardDataStore';

    export let data = {};
    export let section : string;

    function removeCard () {
        const cardId = data.Id;

        if (section === 'balance') {
            $CardDataStore.Balance.find(({Id}) => Id === cardId).deleteFlag = true;
        } else if (section === 'income') {
            $CardDataStore.Income.find(({Id}) => Id === cardId).deleteFlag = true;
        }
        $CardDataStore = $CardDataStore;
    }
</script>
<div class="content">
    <div class="card-container">
        <span class="material-icons-round md-28 remove-icon" on:click={() => removeCard()}>remove_circle</span>
        <p class="card-label">{data.Name}</p>
        <p class="card-amount">{data.Amount}</p>
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
</style>