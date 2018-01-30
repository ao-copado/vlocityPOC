vlocity.cardframework.registerModule
   .controller('contractController',
               ['$rootScope','$scope', '$timeout', function($rootScope,$scope, $timeout) {
$scope.createContract = function(obj) {
    var orderId = obj.Id;
    sforce.connection.sessionId = window.sessionId;
    var result = sforce.apex.execute("%vlocity_namespace%.ContractServiceResource","createContractWithTemplate", {contextId: orderId});

    window.top.location.href = '/' + result;
};

$scope.updateContract = function(obj) {
    var orderId = obj.Id;
    sforce.connection.sessionId = window.sessionId;
    var result = sforce.apex.execute("%vlocity_namespace%.ContractServiceResource","updateContract", {contextId: orderId});

};
}]);