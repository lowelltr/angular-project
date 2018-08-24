"use strict";
const favoritesPage={
    template:`
    <section class="favorites">
        <h2> My Favorite Foods</h2>
        <ul>
            
            <li ng-repeat="newItem in $ctrl.newItem"newItem="newItem">{{newItem.label}}
            <img src="{{newItem.image}}">
            <button ng-click="$ctrl.remove(index)">X</button></li>
        </ul>   
        <button ng-click="$ctrl.search()">return to search</button>


    </section>
    `,
    //this controller injects our service functions and allows us to view our array favorite foods and remove what we dont want in our favorites list
controller: ["SearchService","$location",function(SearchService,$location){
        const vm =this;
        vm.favFoods=SearchService.favoriteFoods;
        vm.remove = (index)=>{
            vm.favFoods.splice(index,1);
        }
        vm.newItem=SearchService.getFavorites();
        console.log(vm.newItem);
        vm.search=()=>{
            $location.path("/search-criteria");
        }
}
]}

angular
.module("Food")
.component("favoritesPage",favoritesPage);
//build favorites components

