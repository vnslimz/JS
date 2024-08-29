const postAPI = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json';

fetch(postAPI)
    .then(response => response.json())
    .then(data => {
        const championList = document.getElementById('champion-list');
        const table = document.createElement('table');
        const headerRow = table.insertRow();

        const headerCells = ['Champions', 'Story', 'Titles', 'Roles'];
        headerCells.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
        });

        for (const champion in data.data) {
        const championData = data.data[champion];
        const row = table.insertRow();
        const cells = [championData.name, championData.blurb, championData.title, championData.tags.join(', ')];
        cells.forEach(cellData => {
            const cell = row.insertCell();
            cell.textContent = cellData;
        });
        }

        championList.appendChild(table);
    })
    .catch(error => {
        console.error('Có Lỗi', error);
    });