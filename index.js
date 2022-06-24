const LOWEST_N = 10;
const LIST_LENGTH = 50;

const data = dataFabric.getAllTable(LIST_LENGTH);

const findNOfLowest = (n, list) => {

    if (n > list.length) {
        console.error('%c !!! nie ma tylu elementów na liście !!! ', 'background: red; color: #003300');
        return;
    }

    // przepisanie pierwszych n elementów listy w kolejności rosnącej
    const allMin = [];
    for (let i = 0; i < n; ++i) {
        allMin.push(list[i]);
    }
    allMin.sort((a, b) => a.height > b.height);

    // przez pozostałe elementy listy
    for (let j = n; j < list.length; ++j) {
        let item = list[j];
        let index = n - 1;

        // sprawdzenie czy ostani (czyli największy z najmniejszych) jest większy niż kolejny z listy
        if (allMin[index].height > item.height) {

            // od ilu jeszcze jest mniejszy - wskazanie indeksu
            do {
                --index;
            } while (index > -1 && allMin[index].height >= item.height)

            // przesunięcie wszystkich większych o jeną pozycję do przodu, ostani najwyższy wypada z listy
            if (index < n - 2) {
                for (let i = n - 2; i > index - 1; --i) {
                    allMin[i + 1] = allMin[i];
                }
            }

            // wstawienie noewgo elemntu
            allMin[index + 1] = item;
        }
    }

    return allMin;
}

let allMin = findNOfLowest(LOWEST_N, data);