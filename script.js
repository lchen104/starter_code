const addBtn = document.getElementById('add');

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

    const editBtn = note.querySelector('.edit');

    const main = note.querySelector('.main');

    const textArea = note.querySelector('textarea');
    
    textArea.value = text;
    main.innerHTML = text;

    // Delete Function
    deleteBtn.addEventListener('click', ()=> {
        note.remove();
    });


    // edit btn
    editBtn.addEventListener('click', ()=> {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');

    })


    document.body.appendChild(note);
}

