//Example using fetch

function main(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(async response=>{
        const json=await response.json();
        console.log(json.title);
    })

}
main();

//OR

async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const json = await response.json();
  console.log(json.title);
}

main();

//Example using axios instead of fetch because it have much easier syntax.No need to conevert response to json.It is smart enough to do it itself.

import axios from 'axios';

async function main(){
    const response=axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log((await response).data.title);
}

main();

//Send post request using axios and like post you can send delete,put,patch request also.We see get  already.

import axios from "axios";
async function main() {
  const response = await axios(
    "https://httpdump.app/dumps/16db4a08-3177-4fd9-9513-6064f74e4da9", //endpoint to send post request and check the response in the link using app httpdump.

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);
}

main();

//OR

//Another way to write above code is using axios.post method.

import axios from "axios";

async function main(){
    const response = await axios({
        url: "https://httpdump.app/dumps/16db4a08-3177-4fd9-9513-6064f74e4da9",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
}

main();
