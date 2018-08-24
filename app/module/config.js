"use strict"
// this is our train station, this allows the user to travel throughout the pages 
angular
.module("Food",["ngRoute"])
.config(["$routeProvider",($routeProvider)=>{
    $routeProvider
    .when("/search-criteria",{
        template:`<search-criteria></search-criteria>`
    })
    .when("/favorites-page",{
        template:`<favorites-page></favorites-page>`
    })
    .otherwise({
        redirectTo:`/search-criteria`
    })

}])