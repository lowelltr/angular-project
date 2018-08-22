"use strict";
const favoritesPage={
    template:`
    <section>
        <h2> My Favorite Foods</h2>
        <ul>
            
            <li ng-repeat="newItem in $ctrl.newItem"newItem="newItem">{{newItem}}<button ng-click="$ctrl.remove(index)">X</button></li>
        </ul>   
    </section>
    `,
controller: ["SearchService",function(SearchService){
        const vm =this;
        vm.favFoods=SearchService.favoriteFoods;
        vm.remove = (index)=>{
            vm.favFoods.splice(index,1);
        }
        vm.newItem=SearchService.getFavorites();
        console.log(vm.newItem);
}
]}

angular
.module("Food")
.component("favoritesPage",favoritesPage);
