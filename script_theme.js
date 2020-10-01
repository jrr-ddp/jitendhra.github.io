/*console.log('Its Working')*/

let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('blue')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for(var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'theme_blue.css'
    }
    
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'theme_green.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'theme_purple.css'
    }

    localStorage.setItem('theme', mode)
}