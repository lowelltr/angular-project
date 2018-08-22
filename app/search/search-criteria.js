"use strict"
const searchCriteria = {
    template:`
    <p>search</p>
    <label>Ingredients:</label>
    <input type="text" ng-model="$ctrl.ingredientOne">
    <label>Exclude:</label>
    <input type="text" ng-model="$ctrl.excludes">
    select a diet:
    <select ng-model="$ctrl.diet">
    <option value="balanced">Balanced
    <option value="high-protein">High Protein
    <option value="high-fiber">High Fiber
    <option value="low-fat">Low fat
    <option value="low-carb">Low Carb
    </select>

    <button ng-click="$ctrl.search($ctrl.ingredientOne,$ctrl.excludes,$ctrl.diet);">Search For Recipes</button>
    
    <p ng-repeat="item in $ctrl.recipes">{{item.recipe.label}}
     <button ng-click="$ctrl.add(item.recipe.label)">add to favorites </button></p>
    
    <p ng-repeat="list in item.recipe.ingredientLines">{{list}}</p>
    
    `,
    controller: ["SearchService",function(SearchService){
        const vm=this;
        vm.search=(ingredientOne,excludes,diet)=>{
            SearchService.recipeSearch(ingredientOne,excludes,diet).then((response)=>
            {console.log(response);
                vm.recipes =response.data.hits;
            });   
        }
        vm.add= (newItem)=>{
            SearchService.setFavorites(newItem);
        }
    }]
};
angular.module("Food")
.component("searchCriteria",searchCriteria);