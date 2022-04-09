const yargs = require('yargs')

const notes = require('./app.js')

//add

yargs.command({
    command: 'add',
    describe:'add notes',
    builder:{
        id:{
            describe: 'this is the description of the Id',
            type:"number",
            demandOption: true
        },
        name:{
            describe: 'this is the description of the name',
            type:"string",
            demandOption: true 
        },
        degree:{
            describe: 'this is the description of the degree',
            type:"array",
            demandOption: true 
        },
        Comment:{
            describe: 'this is the description of the comment',
            type:"string",
        }
    },
    handler: (x) =>{
        notes.addNotes(x.id, x.name, x.degree, x.comment)
    }
})
/////////////////////////////////////////////////////////////////////
//delete

yargs.command({
    command: 'delete',
    describe:'delete notes',
    builder:{
        id:{
            describe: 'this is the description of the Id',
            type:"number",
            demandOption: true
        },
    },
    handler: (x) =>{
        notes.removeNotes(x.id)
    }
})
////////////////////////////////////////////////////////////////////
//read

yargs.command({
    command: 'read',
    describe:'read notes',
    builder:{
        id:{
            describe: 'this is the description of the Id',
            type:"number",
            demandOption: true
        },
    },
    handler: (x) =>{
        notes.readNotes(x.id)
    }
})
////////////////////////////////////////////////////////////////////
//list

yargs.command({
    command: 'list',
    describe:'list notes',
    handler: () =>{
        notes.listNotes()
    }
})

yargs.parse()