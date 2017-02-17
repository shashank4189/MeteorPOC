import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
let productName =[];
let addProduct={};
/*if(Meteor.isClient) {*/
  Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
  });

  Template.hello.helpers({
    counter() {
      return Template.instance().counter.get();
    },
  });

  Template.hello.events({
    'click button'(event, instance) {
      // increment the counter when button is clicked
      instance.counter.set(instance.counter.get() + 1);
    },
  });


  Template.commanTable.helpers({
    productName: function () {
      debugger;
      if (!addProduct.id){
        productName = [{product: 'Atlassion', id: 1},
          {product: 'Jira', id: 2},
          {product: 'Github', id: 3},
          {product: 'HackerRank', id: 4}];
    }
     else  {
        productName.push(addProduct);
      }
      return productName;
    },

    isView: function () {
      debugger;
      return Session.equals('editItemId', this.id);
    }
  });

  Template.commanTable.events({
    'click .editData': function (event) {
      var data = _.filter(productName, function (data) {
        return data.id == event.target.id
      });
      // data;
      Session.set('editItemId', this.id);
      // return data.length>0?false:true;
    },

    'click .deleteData': function (event) {
      debugger;
      alert(event.target.id);
      /*    var data = _.filter(productName,function(data){return data.id ==event.target.id})
       return false;*/
    },

    'click .updateData': function (event) {
     /* var data = _.filter(productName, function (data) {
        return data.id == event.target.id;

      });*/
     debugger;
      productName[parseInt(event.target.id)-1].product = $('#txtProductName_'+event.target.id).val();

      Session.set('editItemId', null);
    },

     'click .saveData': function (event) {
       /* var data = _.filter(productName, function (data) {
        return data.id == event.target.id;

        });*/
       debugger;

       addProduct ={product: $('#txtProductName').val(), id: productName.length+1};
       Template.commanTable.__helpers.get('productName').call();
       addProduct ={};

     }
  });

  Template.hello.events({
    'click button'(event, instance) {
      // increment the counter when button is clicked
      instance.counter.set(instance.counter.get() + 1);
    },
  });

  /*var saveItem = function(id){
        var data = _.filter(productName,function(data){return data.id ==id})

  }*/
//}