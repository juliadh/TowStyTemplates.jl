function listfilter(event) {
  const searchTerm = event.target.value.trim().toLowerCase();
  const listItems = document.querySelectorAll("section.table li");

  listItems.forEach(function(item) {
    item.style.display = 'revert';

    if (!item.innerText.toLowerCase().includes(searchTerm)) {
      item.style.display = 'none';
    }
  })
};

