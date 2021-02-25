let data = {
    users:[
        {
            id: 1,
            name: "Ali",
            time: "12:45",
            photoUrl: "img/1.jpg",
            phone: 998991112233,
            messages: [
                {
                    text:"Hello my name is Ali",
                    owner: true
                },
                {
                    text: "How are you ?",
                    owner: false
                }
            ]
        },
        {
            id: 2,
            name: "Yusuf",
            time: "13:10",
            photoUrl: "img/2.jpg",
            phone: 998992221133,
            messages: [
                {
                    text:"Hello my name is Yusuf",
                    owner: true
                },
                {
                    text: "How are you ?",
                    owner: false
                }
            ]
        },
        {
            id: 3,
            name: "Murod",
            time: "10:00",
            photoUrl: "img/3.jpg",
            phone: 998991112233,
            messages: [
                {
                    text:"Hello my name is Murod",
                    owner: true
                },
                {
                    text: "How are you ?",
                    owner: false
                }
            ]
        },
        {
            id: 4,
            name: "Davron",
            time: "08:40",
            photoUrl: "img/4.jpg",
            phone: 998995552233,
            messages: [
                {
                    text:"Hello my name is Davron",
                    owner: true
                },
                {
                    text: "How are you ?",
                    owner: false
                }
            ]
        },
        {
            id: 5,
            name: "Abdulaziz",
            time: "22:00",
            photoUrl: "img/5.jpg",
            phone: 998991112233,
            messages: [
                {
                    text:"Hello my name is Abdulaziz",
                    owner: true
                },
                {
                    text: "How are you ?",
                    owner: false
                }
            ]
        },
        {
            id: 6,
            name: "Solih",
            time: "12:05",
            photoUrl: "img/6.jpg",
            phone: 998991234567,
            messages: [
                {
                    text:"Hello my name is Solih",
                    owner: true
                },
                {
                    text: "How are you ?",
                    owner: false
                }
            ]
        },
        {
            id: 7,
            name: "Oybek",
            time: "01:25",
            photoUrl: "img/7.jpg",
            phone: 998999874561,
            messages: [
                {
                    text:"Hello my name is Oybek",
                    owner: true
                },
                {
                    text: "How are you ?",
                    owner: false
                }
            ]
        },
        {
            id: 8,
            name: "Javohir",
            time: "16:16",
            photoUrl: "img/8.jpg",
            phone: 998995478966,
            messages: [
                {
                    text:"Hello bro",
                    owner: true
                },
                {
                    text: "How are you ?",
                    owner: false
                }
            ]
        }


    ]

}


function topish(name){
    name = name.toLowerCase()
    if(name.length >= 3){
        let filter = data.users.filter(user => {
            let username = user.name.toLowerCase()
            return user.name.includes(name)
        })
        return filter
        
    }

    return []
}

console.log(topish("ali"));


let titleButtonElement = document.querySelector('.send');
let chatFormElement = document.querySelector('.chat-form');
let textareaElement = document.querySelector('.chat-textarea');

chatFormElement.onsubmit = function (event){
	event.preventDefault()

	let newLiElement = document.createElement('li');
	newLiElement.classList.add('me');


	
	newLiElement.textContent = textareaElement.value;

	
	messagesList.appendChild(newLiElement);

    chatFormElement.reset()
	
}
function sendMessage(userId, message){
    let user = data.users.find(user => {
        return user.id == userId
    })

    let userIndex = data.users.indexOf(user)

    data.users[userIndex].messages.push({
        text: message
        
    })
}

let searchInputElement = document.querySelector(".search")
let searchFormElement = document.querySelector(".search-form")

searchFormElement.addEventListener('keyup' , function(event){
    event.preventDefault()
    usersList.textContent = ""
    let searchInputValue = searchInputElement.value

    let filteredConatacts = search(searchInputValue)

    renderData(filteredConatacts)
})

function renderData(array){
    if(array.length){
        for( item of array){
            let newSearchLiElement = document.createElement("li");
            newSearchLiElement.classList.add("account-item")

        let newSearchImgElement = document.createElement("img")
        newSearchImgElement.classList.add("img-avatar")
        newSearchImgElement.src = item.photoUrl

    let newSearchDivElement = document.createElement("div")
    newSearchDivElement.classList.add("account-info")

    let newSearchh1Element = document.createElement("h1")
    newSearchh1Element.classList.add("account-name")
    newSearchh1Element.textContent = item.name


    let newSearchPElement = document.createElement("p")
    newSearchPElement.classList.add("account-sms")
    newSearchPElement.textContent = item.messages[0].text

    let TimSearchAvatar = document.createElement("p")
    TimSearchAvatar.classList.add("avatar-time")
    TimSearchAvatar.textContent = item.time

    newSearchLiElement.appendChild(newSearchImgElement)
    newSearchLiElement.appendChild(newSearchDivElement)
    newSearchDivElement.appendChild(newSearchh1Element)
    newSearchDivElement.appendChild(newSearchPElement)
    newSearchLiElement.appendChild(TimSearchAvatar)

    usersList.appendChild(newSearchLiElement)
    }
 } 
}

function search(name){
    let filtered = data.users.filter(user =>{
        return user.name.toLowerCase().includes(name)
    })
    return filtered
}


console.log(data.users[0].messages[1].owner)