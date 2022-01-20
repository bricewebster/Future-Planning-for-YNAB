<script lang="ts">
    import Button from './Button.svelte';
    import CardDataStore from '../stores/cardDataStore';

    export let togglePopup;
    export let popupTitle = '';

    let sectionPopupData = [];
    let selectedRadioButton = -1;

    function getCardDataForSectionPopup () {
        if (popupTitle === 'Balance') {
            sectionPopupData = $CardDataStore.Balance;
        } else if (popupTitle === 'Income') {
            sectionPopupData = $CardDataStore.Income;
        } else {
            sectionPopupData = $CardDataStore.Expense;
        }

    }
    getCardDataForSectionPopup();

    function newCard () {
        let newCardId = sectionPopupData.length;
        let newCardName = "New Card";
        let newCardAmount = '$0';
        let newCardDeleteFlag = false;
        let newCardIsFromBudget = false;

        if (popupTitle === 'Balance') {
            $CardDataStore.Balance.push({Id: newCardId, Name: newCardName, Amount: newCardAmount, deleteFlag: newCardDeleteFlag, isFromBudget: newCardIsFromBudget});
        } else if (popupTitle === 'Income') {
            $CardDataStore.Income.push({Id: newCardId, Name: newCardName, Amount: newCardAmount, deleteFlag: newCardDeleteFlag, isFromBudget: newCardIsFromBudget});
        } else {
            $CardDataStore.Expense.push({Id: newCardId, Name: newCardName, Amount: newCardAmount, deleteFlag: newCardDeleteFlag, isFromBudget: newCardIsFromBudget});
        }
        $CardDataStore = $CardDataStore;

        togglePopup();

        return;
    }

    function saveCard () {
        if (selectedRadioButton === -1) {
            togglePopup();
            return;
        } else {
            if (popupTitle === 'Balance') {
              $CardDataStore.Balance[selectedRadioButton].deleteFlag = false;
            } else if (popupTitle === 'Income') {
                $CardDataStore.Income[selectedRadioButton].deleteFlag = false;
            } else {
                $CardDataStore.Expense[selectedRadioButton].deleteFlag = false;
            }
            togglePopup();
            return;
        }
    }
</script>
<div class="content {popupTitle}">
    <div class="popup-container">
        <p class="title">Add {popupTitle}</p>
        <div class="section-options">
            {#each sectionPopupData as data}
                <label>
                    <input type=radio bind:group={selectedRadioButton} name="{data.Name}" value={data.Id} disabled={!data.deleteFlag}>
                    {data.Name} {data.Amount}
                </label>
            {/each}
        </div>
        <div class="button-container">
            <div class="add-section">
                <Button on:click="{() => newCard()}">New</Button>
            </div>
            <div class="save-section">
                <Button type='secondary' on:click="{() => togglePopup()}">Cancel</Button>
                <Button on:click="{() => saveCard()}">Save</Button>
            </div>
        </div>
    </div>
</div>
<style>
    .content {
        position: relative;

        width: 250px;
        height: 250px;

        background: white;
        border-radius: 5px;
        box-shadow: 0 16px 64px rgba(0, 0, 0, 0.2);
    }
    .content.Balance {
        margin: 420px 0 0 375px;
    }
    .content.Income {
        margin: 670px 0 0 375px;
    }
    .content.Expense {
        margin: 670px 0 0 1325px;
    }
    .content::after {
        position: absolute;
        bottom: 100%;
        left: 50%;
        
        margin-left: -5px;
        content: " ";

        border-width: 15px;
        border-style: solid;
        border-color: transparent transparent white transparent;
    }
    .popup-container {
        display: relative;

        margin: 0 auto;
        width: 95%;
        height: 250px;
    }
    .section-options {
        margin-top: 10px;

        width: 100%;
        height: 150px;

        overflow-y: scroll;
    }
    .title {
        display: block;
        
        padding-top: 10px;
        width: 100%;

        font-weight: bold;
        text-align: center;
    }
    label {
        display: block;
    }
    .button-container {
        margin-top: 15px;
    }
    .add-section {
        float: left;

        margin-left: 5px;
    }
    .save-section {
        float: right;

        margin-right: 5px;
    }
</style>

