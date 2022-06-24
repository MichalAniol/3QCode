const render = () => {
    const show = (list, containerName) => {
        if (!list) {
            console.error('%c !!! brak listy !!! ', 'background: red; color: #003300');
            return;
        }

        let num = document.getElementById(containerName + '-num');
        num.innerHTML = allMin.length;

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

    if (!allMin || !data) {
        console.error('%c !!! brak listy !!! ', 'background: red; color: #003300');
        return;
    }

    show(allMin, 'lowest');
    show(data, 'all');
}

render();