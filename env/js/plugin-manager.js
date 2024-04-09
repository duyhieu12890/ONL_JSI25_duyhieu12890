render()
async function render(){
    const response = await fetch('./sources/sources.list.json');
    const data = await response.json();
    for (let item of data.list){
        let formCheck = document.createElement('div');
        formCheck.classList.add('form-check');
        
        let formCheckInput = document.createElement('input')
        formCheckInput.classList.add("form-check-input")
        formCheckInput.type = 'checkbox'
        formCheckInput.value = '';
        formCheckInput.id = item.packName;
        if (item.disable == true){
            formCheck.ariaDisabled
        }
        formCheck.appendChild(formCheckInput);

        let formCheckLabel = document.createElement('label');
        formCheckLabel.classList.add = 'form-chceck-label';
        formCheckLabel.for = 'flexCheckChecked';
        formCheckLabel.innerHTML = item.name;
        formCheck.appendChild(formCheckLabel);

        document.getElementsByClassName('main')[0].appendChild(formCheck);
    };
    let button = document.createElement('button');
    button.type = 'button';
    button.value = 'OK';
    button.innerHTML = 'Ok';
    button.onclick = 'init()';
    document.getElementsByClassName('main')[0].appendChild(button);
}