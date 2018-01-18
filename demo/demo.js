/**
 * Little function to fetch the repos of an user
 * @param callback success 
 */
function fetchMyApi (success)
{
  fetch(
    'https://api.github.com/users/bastiennicoud/repos',
    {
      method: 'GET'
    }
  ).then((response) => {
    return response.json()
  }).then((data) => {
    success(data)
  })
}



/**
 * Watch the click and call the function to fetch api
 */
document.getElementById("myapi").addEventListener("click", () => {
  fetchMyApi((datas) => {
    console.log(datas)
    datas.forEach(element => {
      document.getElementById("apiresponse").innerHTML += element.name + '<br>'
    })
  })
})