document.body.setAttribute('data-theme','t-ligth')

const button = docuement.querySelector('.js-theme')

const theme = {
    't-dark': 't-ligth',
    't-ligth': 't-dark',

}
if(button){
     button.addEventListener('click',event =>{
        event.preventDeFault()
        const currentTheme = document.body.dataset.theme
        document.body.setAttribute('data-theme',themes[currentTheme]) || 't-ligth')

     })
}       
