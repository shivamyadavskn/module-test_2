const foodCardsContainer = document.getElementById("allCards")
const searchInput = document.getElementById("searchInput");
const navBar = document.getElementById("navBar");
const leftBurger = document.getElementById("leftBurger");
const burger = document.getElementById("burger");

const data = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
            ]


//DATA

function createCard(foodItem){
        const card = document.createElement('div')
        card.className = 'card';
        card.innerHTML = `
        <div class="imgDiv">
                    <img src=${foodItem.imageSrc} alt="image" />
                </div>
                <div class="VegNon">
                    <p class="vegNonveg">${foodItem.type}</p>
                </div>
                <div class="title">
                  <h5>${foodItem.name}</h5>
                  <p >
                    <svg
                    class="star"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M10.7902 8.54673C10.6175 8.71407 10.5382 8.95607 10.5775 9.1934L11.1702 12.4734C11.2202 12.7514 11.1029 13.0327 10.8702 13.1934C10.6422 13.3601 10.3389 13.3801 10.0902 13.2467L7.13753 11.7067C7.03486 11.6521 6.92086 11.6227 6.8042 11.6194H6.62353C6.56086 11.6287 6.49953 11.6487 6.44353 11.6794L3.4902 13.2267C3.3442 13.3001 3.17886 13.3261 3.01686 13.3001C2.6222 13.2254 2.35886 12.8494 2.42353 12.4527L3.01686 9.17273C3.0562 8.9334 2.97686 8.69007 2.8042 8.52007L0.396863 6.18673C0.19553 5.9914 0.12553 5.69807 0.21753 5.4334C0.306863 5.1694 0.534863 4.97673 0.810196 4.9334L4.12353 4.45273C4.37553 4.42673 4.59686 4.2734 4.7102 4.04673L6.1702 1.0534C6.20486 0.986733 6.24953 0.9254 6.30353 0.8734L6.36353 0.826733C6.39486 0.792067 6.43086 0.7634 6.47086 0.740067L6.54353 0.7134L6.65686 0.666733H6.93753C7.1882 0.692733 7.40886 0.842733 7.5242 1.06673L9.00353 4.04673C9.1102 4.26473 9.31753 4.41607 9.55686 4.45273L12.8702 4.9334C13.1502 4.9734 13.3842 5.16673 13.4769 5.4334C13.5642 5.70073 13.4889 5.99407 13.2835 6.18673L10.7902 8.54673Z"
                        fill="#FDC040"
                      />
                    </svg>
                    ${foodItem.rating}
                  </p>
                </div>
        
                <div class="TimenLogo">
                  <p>${foodItem.time}</p>
        
                  <div class="heartAndComment">
                      <div class="like">
                      </div>
            
                      <div class="comment">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1770_229)">
                            <path
                              d="M18.9347 15.5907C20.0485 13.6639 20.4228 11.3976 19.9877 9.21499C19.5526 7.03241 18.3377 5.08289 16.5701 3.73063C14.8025 2.37837 12.6031 1.71587 10.3827 1.86689C8.16225 2.01791 6.07277 2.97212 4.50454 4.55126C2.93632 6.13041 1.99663 8.22646 1.86103 10.4479C1.72542 12.6693 2.40317 14.8641 3.76766 16.6222C5.13215 18.3804 7.09006 19.5817 9.27561 20.0017C11.4612 20.4217 13.7249 20.0316 15.6438 18.9044L20.1667 20.1667L18.9347 15.5907Z"
                              stroke="#252525"
                              stroke-width="2"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1770_229">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                  </div>
                </div>
        `

        const likeButton = document.createElement("button");
        likeButton.className = 'heartBtn'
            likeButton.innerHTML = `<i class="fa-solid fa-heart fa-2xl"></i>`;
            likeButton.classList.add("like-button");

            likeButton.addEventListener("click", () => {
                likeButton.classList.toggle("liked");
            });

            card.appendChild(likeButton);

        
        

        return card;
}


function showVegOnly() {
    foodCardsContainer.innerHTML = "";
    const vegItems = data.filter(foodItem => foodItem.type === "veg");
    vegItems.forEach(foodItem => {
        if (searchInput.value && !foodItem.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            return;
        }
        const card = createCard(foodItem);
        foodCardsContainer.appendChild(card);
    });
}

function showNonVegOnly() {
    foodCardsContainer.innerHTML = "";
    const vegItems = data.filter(foodItem => foodItem.type === "non-veg");
    vegItems.forEach(foodItem => {
        if (searchInput.value && !foodItem.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            return;
        }
        const card = createCard(foodItem);
        foodCardsContainer.appendChild(card);
    });
}


function showAllFood() {
    foodCardsContainer.innerHTML = "";
    data.forEach(foodItem => {
        if ((searchInput.value && !foodItem.name.toLowerCase().includes(searchInput.value.toLowerCase()))) {
            return;
        }
        const card = createCard(foodItem);
        foodCardsContainer.appendChild(card);
    });
}


function sortAbove4() {
    foodCardsContainer.innerHTML = "";
    const vegItems = data.filter(foodItem => foodItem.rating >= 4.5);
    vegItems.forEach(foodItem => {
        if (searchInput.value && !foodItem.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            return;
        }
        const card = createCard(foodItem);
        foodCardsContainer.appendChild(card);
    });
}

function sortBelow4() {
    foodCardsContainer.innerHTML = "";
    const vegItems = data.filter(foodItem => foodItem.rating <= 4);
    vegItems.forEach(foodItem => {
        if (searchInput.value && !foodItem.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            return;
        }
        const card = createCard(foodItem);
        foodCardsContainer.appendChild(card);
    });
}

searchInput.addEventListener("input", showAllFood);
showAllFood();

function burgerMenu(){
    const whiteDiv = document.createElement('div')
    whiteDiv.className = "whiteDiv"
    whiteDiv.innerHTML = `
            <div class="logoUser">
                <img class="logo" src="./Images/LogoCookpal 1.png" alt="logo">
                <img class="user" src="./Images/UserEllipse 2.png" alt="user">
            </div>
            <p><a href="#">Home</a></p>
            <p><a href="#">Explore</a></p>
            <p><a href="#">Help</a></p>
    `
    navBar.style.display = "none"
    leftBurger.appendChild(whiteDiv)
}