function receivesAFunction(spy){
    return spy()
}

function returnsANamedFunction() {
    return function fn() {
      console.log("This is how we do it.")
    }
  }

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I don\'t know what I'm doing")
    }
}