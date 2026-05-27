/* 
json = [
    {

    },
    {
        "id": 1,
        "name": "Пирог с яблоком",
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

function create_vertices(id) {
    ul1 = document.createElement("ul")
    li1 = document.createElement("li")
    details1 = document.createElement("details")
    details1.id = json[id].id
    summary1 = document.createElement("summary")
    summary1.textContent = json[id].name + json[id].quantity;

    details1.appendChild(summary1)
    li1.appendChild(details1)
    ul1.appendChild(li1)
    return ul1
}

function init_code(id) {
    initial_vertex = document.body.appendChild(create_vertices(id))
    console.log(initial_vertex)
    /*b = document.getElementById(id).appendChild(create_vertices(id)) */
    console.log(initial_vertex)
    iterationRecipe(id, id)
    document.body.appendChild(initial_vertex)
}

function iterationRecipe(id, parent_id) {
    parent = json[id].name;
    console.log("Ингридиенты" + " " + parent + ":")
    childs = []

    if (json[id].recipe != null) {
        json[id].recipe.forEach(
            function (value) {
                console.log(json[value.ingredient_id].name + json[value.ingredient_id].quantity)
                childs.push(value.ingredient_id)
                parent_vertex = document.getElementById(id).appendChild(create_vertices(value.ingredient_id));
            }
        )
    } else {
        console.log("Нет рецепта")
    }
    childs.forEach(
        function (value) {
            iterationRecipe(value, id)
        })
}

function initCalculateOptimalProductionQuantity(id) {
    var myset = new Set([])
    CalculateOptimalProductionQuantity(myset, id)
    array = [...myset]
    // a = lcmArray(array)
    console.log(array)
}

function CalculateOptimalProductionQuantity(myset, id) {
    product = json[id]
    if (product.recipe === null) {
        return
    }
    product.recipe.forEach(function (value) {
        if (product.quantity % value.quantity > 0) {
            myset.add(value.quantity)
        }
        CalculateOptimalProductionQuantity(myset, value.ingredient_id)
    })
}

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

function lcm(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }
    return Math.abs(a * b) / gcd(a, b);
}

function lcmArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log(arr)
        return
    }

    return arr.reduce((acc, curr) => lcm(acc, curr));
}

