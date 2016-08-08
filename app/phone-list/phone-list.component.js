'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneList').
component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: ['Phone', '$http',
  function PhoneListController(Phone, $http) {
    // this.phones = Phone.query()
    this.orderProp = 'age';
    this.getImgUrl = (photo) => {
      // See: https://www.flickr.com/services/api/misc.urls.html
      return 'https://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_s.jpg'
    };

    $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=56ec2f8adce9c3ef47980bb5f3572608&user_id=12403504%40N02&tags=drawing%2Ccartoon%2Coutdoor&format=json&nojsoncallback=1').then((response) => {
      var phones = response.data.photos.photo;
      // console.log(phones);
      this.phones = phones;
    });
  }
  ]
});
