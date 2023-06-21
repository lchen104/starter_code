const addBtn = document.getElementById('add');

addBtn.addEventListener('click', ()=> addNewNote('Add new note'));

function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <!-- Tool Bar -->
        <div class="tools">
            <!-- Edit Button -->
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <!-- Delete Button -->.
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>

        <div class="hidden"></div>
        <textarea></textarea>
    `;

    // Delete Button
    const deleteBtn = note.querySelector('.delete');
    // delete function
    deleteBtn.addEventListener('click', ()=> {
        note.remove();
    });

    document.body.appendChild(note);
}

