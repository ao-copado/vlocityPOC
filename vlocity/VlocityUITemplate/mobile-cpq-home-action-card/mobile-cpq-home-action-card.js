vlocity.cardframework.registerModule
    .controller('CpqHomeActionController',
                 ['$scope', '$timeout', '$location', '$rootScope', 'MobileService', function($scope, $timeout, $location, $rootScope, MobileService) {
  
        
             this.createOrder = function(action, params) {
              if (params) {
                  var nsPrefix = $rootScope.nsPrefix;
                  var url = action[nsPrefix + 'Url__c'] || action[nsPrefix + 'URL__c'] || action.url;

                    if (url.indexOf('{cartId}') > -1) {
                        MobileService.showSpinner();
                        
                        //objId is hardcoded AccountId used for creating Temporary Order.
                        var cpqParams = {
                            'command': 'newOrder',
                            'objId': '0013600000FBB67'
                        };
                        
                        MobileService.callCPQServices(cpqParams).then(
                            function (data) {
                                MobileService.hideSpinner();
                                
                                var orderId = _.get(data, '[0].result.Id');

                                url =  _.replace(url, new RegExp('{cartId}', 'gi'), orderId);
                                
                                $timeout(function () {
                                    $location.path(url);
                                });
 
                            },
                            function (error) {
                                MobileService.hideSpinner();
                            });
                    }
          
              }
              
        };
}]);