import { writable } from "svelte/store";

export const cardDataStore = writable({
    Balance: [
        {Id: 0, Name: 'Checking', Amount: '$1500', deleteFlag: false, isFromBudget: true}, 
        {Id: 1, Name: 'Saving', Amount: '$1900', deleteFlag: false, isFromBudget: true},
    ],
    Income: [
        {Id: 0, Name: 'Trucking', Amount: '$1500', deleteFlag: false, isFromBudget: true}, 
        {Id: 1, Name: 'Teaching', Amount: '$1300', deleteFlag: false, isFromBudget: true}
    ],
    Expense: [
        {Id: 0, Name: 'Electric', Amount: '$200', deleteFlag: false, isFromBudget: true}, 
        {Id: 1, Name: 'Groceries', Amount: '$400', deleteFlag: false, isFromBudget: true},
        {Id: 2, Name: 'Cable', Amount: '$80', deleteFlag: false, isFromBudget: true}, 
        {Id: 3, Name: 'Internet', Amount: '$70', deleteFlag: false, isFromBudget: true},
        {Id: 4, Name: 'Gas', Amount: '$150', deleteFlag: false, isFromBudget: true}, 
        {Id: 5, Name: 'Water', Amount: '$130', deleteFlag: false, isFromBudget: true}
    ]
});

export default cardDataStore;