
function CarConditionalQuery(/**/) {
  var args = arguments;
  const limit = args[0];
  let query = 'SELECT '
  query = query + args.slice(1).join(", ")

  console.log(query)

  fetch('http://localhost/query.PHP')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  
}
