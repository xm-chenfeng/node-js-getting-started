

function alertObj(obj)
{
  var description = ""; 
    for(var i in obj){   
        var property=obj[i];   
        description+=i+" = "+property+"\n";  
    }   
    alert(description); 

}

// category service 
app.factory("categoryService", ['$http', function( $http) {

    var service = {};

    service.categories = function(){
        return $http.get('js/app/note/categorylist.json').then(function(resp){
            return resp;
        });
    };

    service.insertCategory = function(category){
        return $http.get('js/app/note/category.json').then(function(resp){
            alert("add success");
            return resp;
        });
    };

    service.updateCategory = function(category){
        return $http.get('js/app/note/category.json').then(function(resp){
            alert("update success");
            return resp;
        });
    };

    service.getCategory = function(categoryId){
        return $http.get('js/app/note/category.json').then(function(resp){
//            alertObj(resp.data.category[0]);
            return resp;
        });
    };

    service.deleteCategory = function(categoryId){
        return $http.get('js/app/note/category.json').then(function(resp){
//            alertObj(resp.data.category[0]);
            alert("delete success");
            return resp;
        });
    };

    return service;
}]);


app.controller('CategoryCtrl', ['$scope', '$http', '$location', 'categoryService', function($scope, $http, $location, categoryService) {

  $scope.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];

  $scope.listCategory = function(category){
      categoryService.categories().then(function(resp){
//        alertObj(data.data.categories);
          $scope.categories= resp.data.categories;
      });
  }

  // create category  
  $scope.createCategory = function(category){
    categoryService.insertCategory(category);
  }

  // view category 
  $scope.viewCategory = function(categoryId){
    categoryService.getCategory(categoryId).then(function(resp){
            alertObj(resp.data.category);
            $scope.category = resp.data;
    });
  }

  // edit category  
  $scope.saveCategory = function(category){
    categoryService.updateCategory(category);
  }

}]);

