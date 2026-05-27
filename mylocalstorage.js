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




