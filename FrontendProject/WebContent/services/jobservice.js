/**
 *
 * jobservice
 * 
 */

app.factory('JobService',function($http){
	var jobservice={}

	
	jobservice.addjob=function(job){
		console.log('job tittle in service '+job.jobTittle);
	return $http.post("http://localhost:8081/MiddlewareProject/addjob",job)
}
	
	jobservice.getAllJobs=function(){
		return $http.get("http://localhost:8081/MiddlewareProject/alljobs");
	}
	jobservice.getJob=function(id){
		return $http.get("http://localhost:8081/MiddlewareProject/getjob/"+id);
	}
return jobservice;
})