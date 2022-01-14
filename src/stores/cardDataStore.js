import { writable } from "svelte/store";

export const cardDataStore = writable({
    Balance: [
        {Id: 1, Name: 'Checking', Amount: '$1500', deleteFlag: false, isFromBudget: true}, 
        {Id: 2, Name: 'Saving', Amount: '$1900', deleteFlag: false, isFromBudget: true}
    ],
    Income: [
        {Id: 1, Name: 'Trucking', Amount: '$1500', deleteFlag: false, isFromBudget: true}, 
        {Id: 2, Name: 'Teaching', Amount: '$1300', deleteFlag: false, isFromBudget: true}
    ]
});

export default cardDataStore;