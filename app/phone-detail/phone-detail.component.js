'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', '$sce', '$http',
      function PhoneDetailController($routeParams, Phone, $sce, $http) {
        // Phone.get({phoneId: $routeParams.phoneId}, (response) => {
        //   this.photo = response.photo;
        //   this.url = 'https://farm'+this.photo.farm+'.staticflickr.com/'+this.photo.server+'/'+this.photo.id+'_'+this.photo.secret+'.jpg';
        //   this.titleHTML = $sce.trustAsHtml(this.photo.title._content);
        //   this.descHTML = $sce.trustAsHtml(this.photo.description._content);
        // });

      $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=56ec2f8adce9c3ef47980bb5f3572608&photo_id='+$routeParams.phoneId+'&format=json&nojsoncallback=1').then((response) => {
          this.photo = response.data.photo;
          this.url = 'https://farm'+this.photo.farm+'.staticflickr.com/'+this.photo.server+'/'+this.photo.id+'_'+this.photo.secret+'.jpg';
          this.titleHTML = $sce.trustAsHtml(this.photo.title._content);
          this.descHTML = $sce.trustAsHtml(this.photo.description._content);
      });
      }
    ]
  });
