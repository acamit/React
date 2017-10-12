
    const pokemons= [{
            "id": "1",
            "name": "Pikachu",
        }, {
            "id": "2",
            "name": "Bulbasaur",
        }, {
            "id": "3",
            "name": "Charmender",
        }, {
            "id": "4",
            "name": "Magmar",
        }, {
            "id": "5",
            "name": "Squirtle",
        }, {
            "id": "6",
            "name": "togipi",
        }, {
            "id": "7",
            "name": "Charmender",
        }];

    let searchResults = [{
        "id": "3",
        "name": "Charmender",
    }, {
        "id": "4",
        "name": "Magmar",
    }, {
        "id": "7",
        "name": "Charmender",
    }];
    let searchResults2 = [{
        "id": "1",
        "name": "Pikachu",
    }, {
        "id": "6",
        "name": "togipi",
    }];
    let searchResults3 = [{
        "id": "3",
        "name": "Charmender",
    }, {
        "id": "4",
        "name": "Magmar",
    }];

    let state = {
        pokemons: pokemons,
        visiblePokemons: {
            searchString: "m"
        }
    };

    let state2 = {
        pokemons: pokemons,
        visiblePokemons: {
            searchString: "p"
        }
    };

    let state3 = {
        pokemons: pokemons.slice(0,6),
        visiblePokemons: {
            searchString: "m"
        }
    };


export { searchResults , searchResults2, searchResults3 , state, state2, state3};