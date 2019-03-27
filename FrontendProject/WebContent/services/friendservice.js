/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8081/MiddlewareProject/suggestedUsers")
	}
	friendService.addFriend=function(toId){
		return $http.post("http://localhost:8081/MiddlewareProject/addfriend",toId)
	}
	friendService.getPendingRequests=function(){
		return $http.get("http://localhost:8081/MiddlewareProject/pendingrequests")
	}
	friendService.acceptRequest=function(request){
		return $http.post("http://localhost:8081/MiddlewareProject/acceptrequest",request);
	}
	friendService.deleteRequest=function(request){
		return $http.post("http://localhost:8081/MiddlewareProject/deleterequest",request);
	}
	friendService.getAllFriends=function(){
		return $http.get("http://localhost:8081/MiddlewareProject/friends");
	}
	return friendService;
})