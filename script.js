
function CarConditionalQuery(/**/) {
  var args = arguments;
  const limit = args[0];

  fetch('http://localhost/query.PHP')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  
}
