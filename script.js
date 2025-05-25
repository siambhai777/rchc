const searchInput = document.getElementById('searchInput');
const classFilter = document.getElementById('classFilter');
const sortMarks = document.getElementById('sortMarks');
const studentCards = Array.from(document.querySelectorAll('.student-card'));

function filterStudents() {
  const query = searchInput.value.toLowerCase();
  const selectedClass = classFilter.value;
  const sortOption = sortMarks.value;

  let filtered = studentCards.filter(card => {
    const name = card.dataset.name.toLowerCase();
    const studentClass = card.dataset.class;
    return name.includes(query) && (selectedClass === 'all' || studentClass === selectedClass);
  });

  if (sortOption === 'high') {
    filtered.sort((a, b) => b.dataset.marks - a.dataset.marks);
  } else if (sortOption === 'low') {
    filtered.sort((a, b) => a.dataset.marks - b.dataset.marks);
  }

  const list = document.getElementById('studentList');
  list.innerHTML = '';
  filtered.forEach(card => list.appendChild(card));
}

searchInput.addEventListener('input', filterStudents);
classFilter.addEventListener('change', filterStudents);
sortMarks.addEventListener('change', filterStudents);
