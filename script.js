const hexTime = () => {
    const addN = (element) => {
        return (element < 10 ? '0' : '') + element;
    };

    let dnes = new Date();
    let hodiny = addN(dnes.getHours());
    let minuty = addN(dnes.getMinutes());
    let sekundy = addN(dnes.getSeconds());

    document.getElementById('title').innerHTML =  `#${hodiny}${minuty}${sekundy}`;
    document.getElementById('page').style.backgroundColor = `#${hodiny}${minuty}${sekundy}`;

    setTimeout(() => {
        hexTime();
    }, 1000);
};
hexTime();
