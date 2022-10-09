//import {addNewJournalEntry} from './enteries.js'
import{getJournalEntries,sendRequest} from './dataAccess.js'


const renderPreviousEntries = async () => {

  const enteries = await getJournalEntries();
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
}

renderPreviousEntries();

document.addEventListener("click",async (event) => {
  

  if (event.target.id=== "submit") {
    event.preventDefault();
    const dateOfEntry =document.getElementById('entryDate').value;
    const entryConcepts =document.getElementById('entryConcept').value;
    const entryText =document.getElementById('journalEntry').value;
    const entryMood =document.getElementById('moodforTheDay').value;

    const newJournalEntry ={
       date : dateOfEntry ,
       concept : entryConcepts,
       entry : entryText,
       mood  :  entryMood,

    };
     await sendRequest(newJournalEntry);
    document.getElementById('entryDate').value="";
    document.getElementById('entryConcept').value="";
    document.getElementById('journalEntry').value="";
    document.getElementById('moodforTheDay').value="S";

  };
})

document.addEventListener("stateChanged", (event)=>{
  //console.log("stateChanged started")
  event.preventDefault();
  renderPreviousEntries();


})
  

















