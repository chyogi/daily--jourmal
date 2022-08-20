import {getJournalEntries} from './enteries.js' ;

const enteries = getJournalEntries();


let createPreviousEntriesContainerItemTemp = "";
for (const journalEntry of enteries){
  const createPreviousJournalEntryItemContainer =`<div class="previous-journal-entry-item-container">
<div class="previous-journal-entry-title">${journalEntry.concept}</div><div class="previous-journal-entry-date">${journalEntry.date}</div>
              <div class="previous-journal-entry-mood">${journalEntry.mood}</div>
              <div class="previous-journal-entry-concept">${journalEntry.entry}</div>
</div>`;
const createPreviousEntriesContainerItem =`<div class="previous-entries-container-item">${createPreviousJournalEntryItemContainer}</div>`;

createPreviousEntriesContainerItemTemp += createPreviousEntriesContainerItem;


}



const createH2Element = `<h2 class="previous-entries-title">Previous Entries</h2>`;

const createDivPreviousEntriesContainer =`<div class="previous-entries-container">${createPreviousEntriesContainerItemTemp}

</div>`;

let htmlEnteries = createH2Element + createDivPreviousEntriesContainer ;

document.getElementById("entries").innerHTML=htmlEnteries;















