const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach(note => addNewNote(note));
}

// addBtn.addEventListener('click', ()=> addNewNote('Add new note'));
addBtn.addEventListener('click', ()=> addNewNote());

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    // Delete Button
    const deleteBtn = note.querySelector('.delete');

    // Edit Button
    const editBtn = note.querySelector('.edit');

    const main = note.querySelector('.main');

    const textArea = note.querySelector('textarea');
    
    textArea.value = text;
    main.innerHTML = text;

    // Delete Function
    deleteBtn.addEventListener('click', ()=> {
        note.remove();
        updateLS();
    });


    // Edit Dunction
    editBtn.addEventListener('click', ()=> {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    // textarea
    textArea.addEventListener('input', (e)=> {
        // console.log(e);
        const value = e.target.value;
        // console.log(value);
        main.innerHTML = value;

        updateLS()
    })


    document.body.appendChild(note);

}


function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    // console.log(notesText);

    const notes = [];

    notesText.forEach(note => notes.push(note.value));

    // console.log(notes, notesText);

    localStorage.setItem('notes', JSON.stringify(notes));

}


// updateLS();


// local storage
// localStorage.setItem('name', 'Leo');
// localStorage.getItem('name');
// localStorage.removeItem('name');

// localStorage.setItem('studentNames', JSON.stringify());