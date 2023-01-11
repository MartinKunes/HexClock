const hexTime = () => {
    const addN = (element) => {
        return (element < 10 ? '0' : '') + element;
    };

    let today = new Date();
    let hodiny = addN(today.getHours());
    let minuty = addN(today.getMinutes());
    let sekundy = addN(today.getSeconds());

    document.getElementById('title').innerHTML =  `#${hodiny}${minuty}${sekundy}`;
    document.getElementById('page').style.backgroundColor = `#${hodiny}${minuty}${sekundy}`;

    setTimeout(() => {
        hexTime();
    }, 1000);
};
hexTime();