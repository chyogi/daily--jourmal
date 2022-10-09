const API = "http://localhost:8000";
const applicationState = { journalEntries: [] };

export const fetchJournalEntries = async () => {
  const dataFetch = await fetch(`${API}/journalEntries`);
  const journalEntries = await dataFetch.json();
  // Store the external state in application state
  applicationState.journalEntries = journalEntries;
};

export const getJournalEntries = async () => {
  await fetchJournalEntries();
  return applicationState.journalEntries.map((data) => ({ ...data }));
};
export const sendRequest = async (journalEntryRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(journalEntryRequest),
  };

  //const mainContainer = document.querySelector("#entries");
  const response = await fetch(`${API}/journalEntries`, fetchOptions);
  const responseJson = await response.json();
  document.dispatchEvent(new CustomEvent("stateChanged"));
  return responseJson;
};
