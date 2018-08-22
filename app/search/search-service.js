"use strict";
function SearchService($http){
    const vm= this;
    vm.recipeSearch =(ingredients,remove,diet) =>{
            return $http({
                method:"GET",
                url:`https://api.edamam.com/search?q=${ingredients}&app_id=033b0c0b&app_key=100411999bd3eff5af821e44acbb9209&excluded=${remove}&diet=${diet}`
            }).then((response) => {
                return response;
            })    
    };
    vm.favoriteFoods = [];

    vm.setFavorites=(newItem)=> {
        vm.favoriteFoods.push(newItem);
        console.log(vm.favoriteFoods);
        return vm.favoriteFoods;

    }
    vm.getFavorites=()=> {
        return vm.favoriteFoods;
    }
   
    
    
}

angular.module("Food")
.service("SearchService",SearchService);



