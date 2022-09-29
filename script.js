const input = document.querySelector(`input`)
const btn = document.querySelector(`button`)
const emailInfo = document.querySelector(`.header__input-validation`)
const image = document.querySelector(`.header__main-image`)

const correctEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

const checkEmail = () => {

    if(input.value.match(correctEmail)){
        emailInfo.textContent = `Success`
        emailInfo.classList.add(`color-succes`)
        input.value = ``
    } else {
        emailInfo.textContent = `Please provide a valid email`
        emailInfo.classList.remove(`color-succes`)
        input.value = ``
    }
}

const enterKeyup = (e) => {
    if(e.key === `Enter`) {
        checkEmail()
    }
}



const changeImage = () => {
    if(window.innerWidth >= 576) {
        image.setAttribute(`src`, './images/hero-desktop.jpg')
    } else {
        image.setAttribute(`src`, './images/hero-mobile.jpg')
    }
}
changeImage()


btn.addEventListener(`click`, checkEmail)
input.addEventListener(`keyup`, enterKeyup)
window.addEventListener(`resize`, changeImage)