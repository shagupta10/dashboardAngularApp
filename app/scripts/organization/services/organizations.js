'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.organizations
 * @description
 * # organizations
 * Service in the dashboardApp.
 */
angular.module('organization')
  .service('organizations',['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service={};


    service.organizationList = [
      {
        id:1,
        name: "Synerzip",
        projects: [1,2],
        owner: "Vinayak",
        numOfPeople: 30,
        billableHeadCount:20,
        benchCount:10,
        employee:[
          {
            id: 1,
            name: "abc"
          },
          {
            id: 2,
            name: "bcs"
          }],
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ['Series A', 'Series B'],
        data: [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ]

      },
      {
        id: "2",
        name: "Starks",
        projects: [1,2],
        owner: "Vinayak",
        numOfPeople: 30,
        billableHeadCount:20,
        benchCount:10,
        employee:[
          {
            id: 1,
            name: "abc"
          },
          {
            id: 2,
            name: "bcs"
          }],
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ['Series A', 'Series B'],
        data: [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ]

      },
      {
        id: "3",
        name: "Lanisters",
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ['Series A', 'Series B'],
        data: [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ],
        projects: [1,2],
        owner: "Vinayak",
        numOfPeople: 30,
        billableHeadCount:20,
        benchCount:10,
        employee:[
          {
            id: 1,
            name: "abc"
          },
          {
            id: 2,
            name: "bcs"
          }]
      },
      {
        id:4,
        name: "Synerzipkkkk",
        projects: [1,2],
        owner: "Vinayak",
        numOfPeople: 30,
        billableHeadCount:20,
        benchCount:10,
        employee:[
          {
            id: 1,
            name: "abc"
          },
          {
            id: 2,
            name: "bcs"
          }],
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ['Series A', 'Series B'],
        data: [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ]

      }

    ];

    service.projectsList = [
      {
        id:"1",
        name: "PDX",
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        data: [300, 500, 100],
        red_days: 1,
        no_people:6
      },
      {
        id:"2",
        name:  "CMS",
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        data: [300, 500, 100],
        red_days: 2,
        no_people:3
      }

    ];

   /* service.organizationList=[];
      service.projectsList =[];

    $http.get('/api/organization').success(function(items){
      items.organization.forEach(function(item,index){
        service.organizationList.push(item);
      })
      items.project.forEach(function(item,index){
        service.projectsList.push(item);
      })

    });*/
    service.searchOrg={};
    service.findOrgById=function(id){
      service.organizationList.forEach(function(item1,index){
        if(item1.id==id){
          service.searchOrg=item1;
        }
      })
     return service.searchOrg;
    }
    service.save=function(result){
      if(result.id==undefined) {
        result.id=service.organizationList.length+1;
        service.organizationList.push(result);
      }
    };

    service.delete=function(item){

        service.organizationList.splice(service.organizationList.indexOf(item),1);
      }

    return service;
  }]);
