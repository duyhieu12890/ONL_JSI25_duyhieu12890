let libLoad = localStorage['libLoad'].split(',');

function process(data){
    for (let index of data.list){
        if (libLoad.indexOf(index.packName) !== -1){
            if (index.type == 'js'){   
                let scriptLoad = document.createElement('script')
                scriptLoad.src = index.path;
                document.head.appendChild(scriptLoad);
                console.log('Load in ' + index.type + ' for ' + index.packName);
            } else if (index.type == 'css'){
                var head  = document.getElementsByTagName('head')[0];
                var link  = document.createElement('link');
                // link.id   = cssId;
                link.rel  = 'stylesheet';
                link.type = 'text/css';
                link.href = index.path;
                link.media = 'all';
                head.appendChild(link);
            } 
        }
    }
}


fetchData();

async function fetchData(){
    const response = await fetch('./sources/sources.list.json');
    const data = await response.json();
    process(data);
}
