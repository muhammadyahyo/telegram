let ModalElementOpacity = document.querySelector(".modal-opacity")
let userPhoto = document.querySelector(".photo-user")
let username = document.querySelector(".user-name")
let phoneNumber = document.querySelector(".tel-account-modal")
let closeButton = document.querySelector(".close-button")
let userLink = document.querySelector(".userlink")
let usersList = document.querySelector(".accounts-list");
let messagesList = document.querySelector(".messages");
let titleAccount = document.querySelector(".account-contect-info-h1")





data.users.forEach(user => {
    let newUserLiElement = document.createElement("li");
    newUserLiElement.classList.add("account-item")
    // newUserLiElement.textContent = user.name

   

    let newUserImgElement = document.createElement("img")
    newUserImgElement.classList.add("img-avatar")
    newUserImgElement.src = user.photoUrl

    let newUserDivElement = document.createElement("div")
    newUserDivElement.classList.add("account-info")

    let newUserh1Element = document.createElement("h1")
    newUserh1Element.classList.add("account-name")
    newUserh1Element.textContent = user.name


    let newUserPElement = document.createElement("p")
    newUserPElement.classList.add("account-sms")
    newUserPElement.textContent = user.messages[0].text

    let TimAvatar = document.createElement("p")
    TimAvatar.classList.add("avatar-time")
    TimAvatar.textContent = user.time

    newUserLiElement.appendChild(newUserImgElement)
    newUserLiElement.appendChild(newUserDivElement)
    newUserDivElement.appendChild(newUserh1Element)
    newUserDivElement.appendChild(newUserPElement)
    newUserLiElement.appendChild(TimAvatar)
    

    

    

    newUserLiElement.addEventListener('click', event => {

        messagesList.textContent = ""


        titleAccount.textContent = user.name

        

        user.messages.forEach(message =>{
            let newMessageLiElement = document.createElement("li")
            

            newMessageLiElement.textContent = message.text

            userPhoto.src = user.photoUrl
            username.textContent = user.name
            phoneNumber.textContent = user.phone
            userLink.textContent = user.name


            



           if(message.owner){
               newMessageLiElement.classList.add("you")
           }
           else{
            newMessageLiElement.classList.add("me")
           }
            
            messagesList.appendChild(newMessageLiElement)
        })
    })

    usersList.appendChild(newUserLiElement)
})






titleAccount.addEventListener('click' , function(event){
    document.body.classList.toggle("body-modal")
    
})

ModalElementOpacity.addEventListener('click' , function(event){
    document.body.classList.toggle("body-modal")
})

closeButton.addEventListener('click' , function(event){
    document.body.classList.toggle("body-modal")
})

let menuButton = document.querySelector(".menu-button")
let menuButtonOpacity = document.querySelector(".modal-opacity-myaccount")

menuButton.addEventListener('click' , function(event){
    document.body.classList.toggle("body-myaccount-modal")
})
menuButtonOpacity.addEventListener('click' , function(event){
    document.body.classList.toggle("body-myaccount-modal")
})








