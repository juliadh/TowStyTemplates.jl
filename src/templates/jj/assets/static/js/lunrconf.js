let documents = [];
let idx;

// Get baseurl from template (injected as global variable)
const baseurl = window.BASEURL || "";
const urlPrefix = baseurl ? "/" + baseurl : "";

fetch(urlPrefix + '/articles.json')
    .then(response => response.json())
    .then(data => {
        console.log("Données récupérées:", data);
        documents = data;

        if (lunr.fr) {
            lunr.tokenizer.separator = /[\s\-,.()]+/;
        }

        idx = lunr(function () {
            this.use(lunr.fr);
            this.ref('_id');
            this.field('title');
            this.field('md');

            documents.forEach(function (doc) {
                this.add(doc);
            }, this);
        });

        const searchBox = document.getElementById('searchBox');
        const resultsDiv = document.getElementById('results');

        function renderResults(results) {
            resultsDiv.innerHTML = '';

            if (results.length === 0) {
                resultsDiv.innerHTML = '<p>Aucun résultat.</p>';
                return;
            }

            results.forEach(function (result) {
                const doc = documents.find(d => d._id === result.ref);
                if (!doc) {
                    console.error("Document non trouvé pour ref:", result.ref);
                    return;
                }
                const div = document.createElement('div');
                let path = urlPrefix + "/" + doc.path;
                div.classList.add('result');
                div.innerHTML = `<strong><a href="${path}">${doc.title || 'Sans titre'}</a></strong>`;
                resultsDiv.appendChild(div);
            });
        }

        function updateSearch() {
            const query = searchBox.value.trim();
            if (!query) {
                resultsDiv.innerHTML = '';
                return;
            }
            const results = idx.search(query+"~1");
            renderResults(results);
        }

        searchBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                updateSearch();
            }
        });

        const searchButton = document.getElementById('searchButton');
        if (searchButton) {
            searchButton.addEventListener('click', updateSearch);
        }
    })
    .catch(error => {
        console.error("Erreur :", error);
    });
