import { Triangle } from './triangleTracker.js';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var side1Input = parseInt($("input#side1").val());
      var side2Input = parseInt($("input#side2").val());
      var side3Input= parseInt($("input#side3").val());
      var triangle = new Triangle(side1Input, side2Input, side3Input);
      var result = triangle.checkType();


      $(".result").text("This is a " + result);
      $(".result").show();

      event.preventDefault();

    })
});
