const journalEntries = [
  {
    id: 1,
    date: "07/09/2022",
    concept: "first NSS class ",
    entry: " I met with my instructors and my team  and could know each other",
    mood: "excited",
  },

  {
    id: 2,
    date: "07/12/2022",
    concept: "Introduction to Dev Tools",
    entry:"Me and my team met in zoom break room and discuss about dev tools like terminal,githuband readme ",
    mood: " dull",
  },

  {
    id: 3,
    date: "07/16/2022",
    concept: "HTML and CSS",
    entry: "Learnt  about HTML and CSS",
    mood: "Happy",
  },

  {
    id: 4,
    date: "07/26/2022",
    concept: "made introduction page and yin yang with my team ",
    entry: "my team is very helpful  ",
    mood: "Happy ",
  },

  {
    id: 5,
    date: "07/30/2022",
    concept: "Introduction to Javascript ",
    entry: "MS lynn gave brief notes on javascript and met with new group ",
    mood: "Excited",
  },

  {
    id: 6,
    date: "08/06/2022",
    concept: "Data structuresand For loop ",
    entry: " got confused with for loops about ",
    mood: "sad",
  },

  {
    id: 7,
    date: "08/14/2022",
    concept: "Data relationship practice",
    entry: "worked on daily joiurnal",
    mood: "ok",
  },
];

 export const getJournalEntries = () => {
    const copyOfEntries = journalEntries.map(entry => ({...entry}))
    return copyOfEntries
  }
