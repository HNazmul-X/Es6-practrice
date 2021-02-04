
var getActivity = ()=>{
    fetch("http://www.boredapi.com/api/activity/")
      .then((res) => res.json())
      .then((data) => {
        document.querySelector("#activity").innerHTML = data.activity;
      });
}

getActivity()
setInterval(
    ()=>{
        getActivity()
    },3000
)