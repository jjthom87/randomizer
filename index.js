document.querySelector('#time-form').addEventListener('submit', function(e){
    e.preventDefault();
    
    const date = document.querySelector("#date-input").value
    const time = document.querySelector("#time-input").value

    const randomizeEndingDateTime = new Date(`${date} ${time}`)

    const trajectory = document.querySelector("#trajectory-input").value
    const dailyStartTime = document.querySelector("#daily-start-time").value

    const dateDifferentialInMilliseconds = randomizeEndingDateTime - new Date()

    // (async () => {
    //     const rawResponse = await fetch('/random', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({dateDifferentialInMilliseconds: dateDifferentialInMilliseconds, trajectory: trajectory, dailyStartTime: dailyStartTime})
    //     });
    //     const content = await rawResponse.json();
      
    //     console.log(content);
    // })();
    fetch("/random", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        //make sure to serialize your JSON body
        body: JSON.stringify({dateDifferentialInMilliseconds: dateDifferentialInMilliseconds, trajectory: trajectory, dailyStartTime: dailyStartTime})
      })
      .then( (response) => { 
         //do something awesome that makes the world a better place
      });
});