"use strict"
const searchCriteria = {
    //Ng-model holds the users input
    //select gives our users options, this is how you make a drop down menu
    //button on click uses the information from the ng-model and pushes that info to the Api
    //search request returns with the ng repeat the info we requested with the ng model
    //item in is an array performing a for loop
    template:`
    <div id ="body">
    <section id="search">
    <h1>What's for Dinner???</h1>
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
    <button id ="fav"ng-click="$ctrl.flip()"> My Favorites </button>

    </section>

    <section id ="foodresults">
    <p ng-repeat="item in $ctrl.recipes">{{item.recipe.label}}<img src="{{item.recipe.image}}"id="img"> <a href="{{item.recipe.url}}" target="_blank">More Info</a>
     <button ng-click="$ctrl.add(item.recipe)"id="add">add to favorites </button></p>
    
    <p ng-repeat="list in item.recipe.ingredientLines">{{list}}</p>
   

    </section>
    </div>
    `,
    //this controller pulls our information from the Api
    controller: ["SearchService","$location",function(SearchService,$location){
        const vm=this;
        vm.search=(ingredientOne,excludes,diet)=>{
            SearchService.recipeSearch(ingredientOne,excludes,diet).then((response)=>
            {console.log(response);
                vm.recipes =response.data.hits;
            });   
        }
    //the sets our information to the array  
        vm.add= (newItem)=>{
            SearchService.setFavorites(newItem);
           // $location.path("/favorites-page");
        }
        vm.flip=()=>{
            $location.path("/favorites-page");
        }
    }]
};
angular.module("Food")
.component("searchCriteria",searchCriteria);

//Step one build syntax of components ie..angular.module("Food")
//.component("searchCriteria",searchCriteria);