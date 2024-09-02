const url = 'https://fakestoreapi.com/products';
const list = document.getElementById("li")
let value = document.getElementsByClassName("glass")[0];
let input = document.getElementById("input");
let data = []
async function fetchData() {
    data = await fetch(url)
        .then(data => data.json())
        .then(data => data)
        .catch(err => (err));

    let tag = ""
    for (let i = 0; i < data.length; i++) {



        tag += ` <div class="left_div">
                <div class="fourth_div">
                     <div class="image"><img  src="${data[i].image}" height="100%" width="100%">
                            </div>
                    <div class="center_div">
                        <p>${data[i].title}</p>
                        <div class="button"><button>4.4<i class="fa-solid fa-star"></i></button>
                            <p>${data[i].rating.rate}&&${data[i].rating.count} reviews</p>
                        </div>
                        <ul>
                            <li>${data[i].description}</li>

                        </ul>
                        <div>${data[i].category}</div>
                    </div>
                    <div class="last_div">
                        <div class="flip_image">
                            <h2 class="logo">${data[i].price}</h2>
                            <img
                                src=" https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png">
                        </div>
                        <div class="discount">
                            <div class="flip_not">
                                <h4 class="logo">200</h4>
                                <p>18% Off</p>
                            </div>
                            <span>Free delivery</span>
                            <div class="saver">Daily saver</div>
                            <p>Upto<b> 300</b> Off Exchange</p>
                        </div> 

                    </div>
                </div>`
    }
    list.innerHTML = tag;
}
fetchData()


function search_bar() {
    let value = document.getElementsByClassName("text")[0].value;
    let search = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()) || item.description.toLowerCase().includes(value.toLowerCase())
        || item.category.toLowerCase().includes(value.toLowerCase()))

    let element = document.getElementById("close")

    console.log(element.classList.value)
    if (element.classList[1] == "fa-magnifying-glass") {
        element.classList.remove("fa-magnifying-glass")
        element.classList.add("fa-xmark")
    } else {
        element.classList.add("fa-magnifying-glass")
        element.classList.remove("fa-xmark")
        document.getElementById("input").value = "";
        search = data
    }

    console.log(search)

    let tag = ""
    for (let i = 0; i < search.length; i++) {



        tag += ` <div class="left_div">
                <div class="fourth_div">
                     <div class="image"><img  src="${search[i].image} " height="100%" width="100%">
                            </div>
                    <div class="center_div">
                        <p>${search[i].title}</p>
                        <div class="button"><button>4.4<i class="fa-solid fa-star"></i></button>
                            <p>${search[i].rating.rate}&&${search[i].rating.count} reviews</p>
                        </div>
                        <ul>
                            <li>${search[i].description}</li>

                        </ul>
                        <div>${search[i].category}</div>
                    </div>
                    <div class="last_div">
                        <div class="flip_image">
                            <h2 class="logo">${search[i].price}</h2>
                            <img
                                src=" https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png">
                        </div>
                        <div class="discount">
                            <div class="flip_not">
                                <h4 class="logo">200</h4>
                                <p>18% Off</p>
                            </div>
                            <span>Free delivery</span>
                            <div class="saver">Daily saver</div>
                            <p>Upto<b> 300</b> Off Exchange</p>
                        </div> 

                    </div>
                </div>`

    }
    list.innerHTML = tag;
}
function run(index) {
    let range = document.getElementById("range").value;
    let value = document.getElementById(index).checked;
    let price = value ? data.filter(value => value.rating.rate > index && value.price >= range) : data

    console.log(price)


    let tag = ""
    for (let i = 0; i < price.length; i++) {



        tag += ` <div class="left_div">
                <div class="fourth_div">
                     <div class="image"><img  src="${price[i].image}">
                            </div>
                    <div class="center_div">
                        <p>${price[i].title}</p>
                        <div class="button"><button>4.4<i class="fa-solid fa-star"></i></button>
                            <p>${price[i].rating.rate}&&${price[i].rating.count} reviews</p>
                        </div>
                        <ul>
                            <li>${price[i].description}</li>

                        </ul>
                        <div>${price[i].category}</div>
                    </div>
                    <div class="last_div">
                        <div class="flip_image">
                            <h2 class="logo">${price[i].price}</h2>
                            <img
                                src=" https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png">
                        </div>
                        <div class="discount">
                            <div class="flip_not">
                                <h4 class="logo">200</h4>
                                <p>18% Off</p>
                            </div>
                            <span>Free delivery</span>
                            <div class="saver">Daily saver</div>
                            <p>Upto<b> 300</b> Off Exchange</p>
                        </div> 

                    </div>
                </div>`

    }
    list.innerHTML = tag;
}

function new_range() {
    let range = document.getElementById("range").value;
    console.log(range)
    let loop = data.filter(item => item.price >= range)

    console.log(loop)


    let tag = ""
    for (let i = 0; i < loop.length; i++) {



        tag += ` <div class="left_div">
                <div class="fourth_div">
                     <div class="image"><img  src="${loop[i].image}">
                            </div>
                    <div class="center_div">
                        <p>${loop[i].title}</p>
                        <div class="button"><button>4.4<i class="fa-solid fa-star"></i></button>
                            <p>${loop[i].rating.rate}&&${loop[i].rating.count} reviews</p>
                        </div>
                        <ul>
                            <li>${loop[i].description}</li>

                        </ul>
                        <div>${loop[i].category}</div>
                    </div>
                    <div class="last_div">
                        <div class="flip_image">
                            <h2 class="logo">${loop[i].price}</h2>
                            <img
                                src=" https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png">
                        </div>
                        <div class="discount">
                            <div class="flip_not">
                                <h4 class="logo">200</h4>
                                <p>18% Off</p>
                            </div>
                            <span>Free delivery</span>
                            <div class="saver">Daily saver</div>
                            <p>Upto<b> 300</b> Off Exchange</p>
                        </div> 

                    </div>
                </div>`

    }
    list.innerHTML = tag;
}