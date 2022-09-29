const input = document.querySelector(`input`)
const btn = document.querySelector(`button`)
const emailInfo = document.querySelector(`.header__input-validation`)

const correctEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

const checkEmail = () => {

    if(input.value.match(correctEmail)){
        emailInfo.textContent = `Succes`
        emailInfo.classList.add(`color-succes`)
        input.value.textContent = ``
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


btn.addEventListener(`click`, checkEmail)
input.addEventListener(`keyup`, enterKeyup)