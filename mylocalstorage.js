/*
json = [
    {

    },
    {
        "id": 1,
        "name": "Яблочный пирог",
        "quantity": 1,
        "recipe": [
            {
                "ingredient_id": 2,
                "quantity": 3,
                "unit": "шт"
            },
            {
                "ingredient_id": 3,
                "quantity": 1,
                "unit": "шт"
            }
        ]
    },
    {
        "id": 2,
        "name": "Яблоко",
        "quantity": 3,
        "recipe": null
    },
    {
        "id": 3,
        "name": "Тесто",
        "quantity": 4,
        "recipe": [
            {
                "ingredient_id": 4,
                "quantity": 2,
                "unit": "г"
            },
            {
                "ingredient_id": 5,
                "quantity": 3,
                "unit": "мл"
            },
            {
                "ingredient_id": 6,
                "quantity": 4,
                "unit": "шт"
            }
        ]
    },
    {
        "id": 4,
        "name": "Мука",
        "quantity": 5,
        "recipe": null
    },
    {
        "id": 5,
        "name": "Молоко",
        "quantity": 6,
        "recipe": null
    },
    {
        "id": 6,
        "name": "Яйцо",
        "quantity": 7,
        "recipe": null
    }
]
*/



if (localStorage.getItem("base_myfirstbase") == null) {
  localStorage.setItem("base_myfirstbase", `[{},{"id":1,"name":"Стол","quantity":"1","recipe":[{"ingredient_id":"2","quantity":"1","unit":"шт","pic":"https://i3.imageban.ru/out/2026/05/26/81580215098e9bca29b0932061795aca.png"},{"ingredient_id":"3","quantity":"1","unit":"шт","pic":"https://i3.imageban.ru/out/2026/05/26/81580215098e9bca29b0932061795aca.png"},{"ingredient_id":"4","quantity":"4","unit":"шт","pic":"https://i3.imageban.ru/out/2026/05/26/81580215098e9bca29b0932061795aca.png"},{"ingredient_id":"5","quantity":"4","unit":"шт","pic":"https://i3.imageban.ru/out/2026/05/26/81580215098e9bca29b0932061795aca.png"}],"pic":"https://i3.imageban.ru/out/2026/05/26/81580215098e9bca29b0932061795aca.png"},{"id":2,"name":"Столешница","quantity":"2","recipe":[{"ingredient_id":"6","quantity":"1","unit":"шт","pic":"https://i7.imageban.ru/out/2026/05/26/4bc54b2f60108ef5af2c41abf5058314.png"}],"pic":"https://i7.imageban.ru/out/2026/05/26/4bc54b2f60108ef5af2c41abf5058314.png"},{"id":3,"name":"Царга","quantity":"2","recipe":[{"ingredient_id":"6","quantity":"1","unit":"шт","pic":"https://i2.imageban.ru/out/2026/05/26/2f3e73f87878e50f0bd93335b73cbcef.png"}],"pic":"https://i2.imageban.ru/out/2026/05/26/2f3e73f87878e50f0bd93335b73cbcef.png"},{"id":4,"name":"Ножка","quantity":"3","recipe":[{"ingredient_id":"6","quantity":"1","unit":"шт","pic":"https://i3.imageban.ru/out/2026/05/26/4e0ba1a6a97047c16ebc7569e57f0184.png"}],"pic":"https://i3.imageban.ru/out/2026/05/26/4e0ba1a6a97047c16ebc7569e57f0184.png"},{"id":5,"name":"Евровинт","quantity":"10","recipe":null,"pic":"https://i2.imageban.ru/out/2026/05/26/20e34073df9365c3d8bd532d1532a6c8.png"},{"id":6,"name":"ЛДСП","quantity":"1","recipe":null,"pic":"https://i2.imageban.ru/out/2026/05/26/4670f0a780b8406925fb0252e37c821b.png"}]`)
}

basekey1 = "base_myfirstbase"


if (localStorage.getItem(basekey1) == "") { 
    setLocalStorage(basekey1, [{}])
}

json = getFromLocalStorage(basekey1, "base_myfirstbase") 
console.log(json)

function isJSON(str) {
    if (typeof str !== 'string' || str.trim() === '') {
        return false;
    }
    try {
        parsed = JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

function canJSON(value) {
  try {
    JSON.stringify(value);
    return true;
  } catch (ex) {
    return false;
  }
}



function setLocalStorage(key, value) {
    result = canJSON(value) ? JSON.stringify(value) : value
    console.log(result)
    if (key.includes("base_")) { 
        localStorage.setItem(key, result)
        return result 
    }
    localStorage.setItem(key, result)
}

function getFromLocalStorage(key, value) {
    if (localStorage.getItem(key) === null && key.includes("base_")) { 
        localStorage.setItem(key, JSON.stringify([{}]))
        return [{}]
    }

    if (isJSON(localStorage.getItem(key, value))) {
        return JSON.parse(localStorage.getItem(key, value))
    }
    return localStorage.getItem(key, value)  
    }




