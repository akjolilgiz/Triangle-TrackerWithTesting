$(document).ready(function() {
//equilateral function
  function equilateral(a, b, c) {
    if (a === b && a === c) {
      return true;
    } else {
      return false;
    }
  }
//isosceles function
  function isosceles(a, b, c) {
    if (a === b && b !== c || a === c && a !== b|| c === b && c !== a) {
      return true;
    } else {
      return false;
    }
  }

  //scalene function
    function scalene(a, b, c) {
      if (a !== b && a !== c && b !== c) {
        return true;
      } else {
        return false;
      }
    }

    //triangle check function
    // function triangleCheck(a, b, c) {
    //   var ab = a + b;
    //   var ac = a + c;
    //   var bc = b + c;
    //   if (ab <= c || ac <= b || bc <= a) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }

    function triangleCheck(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
      } else {
        return true;
      }
    }





//User interface
  $("#formOne").submit(function(event) {
    var side1Input = parseInt($("input#side1").val());
    var side2Input = parseInt($("input#side2").val());
    var side3Input= parseInt($("input#side3").val());

    $(".result").hide();

    if (triangleCheck(side1Input, side2Input, side3Input)) {
      if (equilateral(side1Input, side2Input, side3Input)) {
        $("#equal").show();
      } else if (isosceles(side1Input, side2Input, side3Input)) {
        $("#iso").show();
      } else if (scalene(side1Input, side2Input, side3Input)) {
        $("#scal").show();
      }
    } else {
      $("#notTriangle").show();
    }

    event.preventDefault();

  })
})
