const fs = require("fs");

const addNotes = (id, name, degree, Comment) =>{
    const notes = loadNotes();
    const duplicateTitles = notes.find((note)=>{
        return note.id === id;
    });
    console.log(duplicateTitles);
    if (!duplicateTitles){
        //console.log(notes)
        let sum = 0;
        degree.forEach(degree =>{
          sum += degree;
        })
        notes.push({
            id,
            name,
            degree,
            Comment,
            sum,
        });
        saveNotes(notes);
        console.log('save has done'); 
    }
    else{
      console.log('This Id is duplicated')
    }
};
/////////////////////////////////////////////////////////////////////
//removeNotes

const removeNotes = (id) =>{
    const notes = loadNotes();
    const noteToKeep = notes.filter((note)=>{
        return note.id !== id
    }) 
    console.log(noteToKeep)
    saveNotes(noteToKeep)
    console.log('id id deleted')
}
//////////////////////////////////////////////////////////////////////
//read

const readNotes = (id) =>{
     const notes = loadNotes();
     const noteToKeep = notes.find((notes)=>{
         return notes.id === id
     })
     console.log(note)
    if(note) {
        console.log(notes.name)
    }
    else{
        console.log('nothing found')
    }
}  
/////////////////////////////////////////////////////////////////////////
//list

const listNotes = ()=>{
    const notes = loadNotes();
    note.forEach((el) => {
        console.log(el.name, el.sum)
    });
}
//////////////////////////////////////////////////////////////////////

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json').toString();
        return JSON.parse(dataBuffer)
    }
    catch(e) {
        return [];
    }
};


const saveNotes = (notes) => {
    const saveData = JSON.stringify(notes);
   // console.log(saveData)
    fs.writeFileSync('notes.json',saveData);
};

module.exports = {
    addNotes,
    removeNotes,
    readNotes,
    listNotes
}