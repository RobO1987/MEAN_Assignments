app.factory('storeFactory', function($http){
var factory = {};

/////////////////////// CUSTOMERS ///////////////////////
  factory.addCustomer = function(customer, callback){
    $http.post('/api/customer', customer).then(function(response){
      if(response.data.err){
        console.log('Errors', response.data.err)
      }
      else{
        console.log("Success", response.data);
      }
      callback(response.data);
    })
  }

  factory.getCustomers = function(callback){
    $http.get('/api/customer').then(function(response){
      customers = response.data;
      callback(customers);
    })
  }

  factory.deleteCustomer = function(id,callback){
    $http.delete('/api/customer/'+id);
    callback()
  }

/////////////////////// PRODUCTS ///////////////////////
  factory.getProducts = function(callback){
    $http.get('/api/product').then(function(response){
      products = response.data;
      callback(products)
    })
  }

  factory.addProduct = function(product, callback){
    $http.post('/api/product', product).then(function(response){
      if(response.data.err){
        console.log('Errors', response.data.err)
      }else{
        console.log('Success', response.data);
      }
      callback(response.data);
    })
  }

  factory.deleteProduct = function(id, callback){
    $http.delete('/api/product/'+id).then(function(response){
      if(response.data.err){
        console.log('Errors', response.data.err)
      }else{
        console.log('Success', response.data);
      }
      callback(response.data);
    })
  }

/////////////////////// ORDERS ///////////////////////
  factory.getOrders = function(callback){
    $http.get('/api/order').then(function(response){
      orders = response.data;
      callback(orders)
    })
  }

  factory.createOrder = function(order, callback){
    $http.post('/api/order',order).then(function(response){
      if(response.data.err){
        console.log('Errors', response.data.err)
      }else{
        console.log('Success',response.data);
      }
      callback(response.data);
    })
  }

  factory.deleteOrder = function(id, callback){
    $http.delete('/api/order/'+id).then(function(response){
      if(response.data.err){
        console.log('Errors', response.data.err)
      }else{
        console.log('Success', response.data);
      }
      callback(response.data);
    })
  }

  return factory;
})
