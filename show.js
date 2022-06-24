const render = () => {
    const show = (list, containerName) => {
        if (!list) {
            console.error('%c !!! brak listy !!! ', 'background: red; color: #003300');
            return;
        }

        let container = document.getElementById(containerName);

        {
            let lp = document.createElement('div');
            lp.innerHTML = 'lp';
            lp.className = 'header lp';
            container.append(lp);

            let name = document.createElement('div');
            name.innerHTML = 'nazwa';
            name.className = 'header name';
            container.append(name);

            let weight = document.createElement('div');
            weight.innerHTML = 'wzrost';
            weight.className = 'header';
            container.append(weight);

            let height = document.createElement('div');
            height.innerHTML = 'waga';
            height.className = 'header';
            container.append(height);
        }

        for (let i = 0; i < list.length; ++i) {
            let item = list[i];

            let lp = document.createElement('div');
            lp.innerHTML = (i + 1);
            lp.className = 'cell lp';
            container.append(lp);

            let name = document.createElement('div');
            name.innerHTML = `${item.firstName} ${item.lastName}`;
            name.className = 'cell name';
            container.append(name);

            let weight = document.createElement('div');
            weight.innerHTML = `${item.weight} kg`;
            weight.className = 'cell';
            container.append(weight);

            let height = document.createElement('div');
            height.innerHTML = `${item.height} cm`;
            height.className = 'cell';
            container.append(height);
        }
    }

    show(allMin, 'lowest');
    show(data, 'all');

    let lowestNum = document.getElementById('lowest-num');
    lowestNum.innerHTML = allMin.length;

    let allNum = document.getElementById('all-num');
    allNum.innerHTML = data.length;
}

render();