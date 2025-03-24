//Assignments

//1. Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPassword = "secret";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );
  return signature;
}

const ans = signJwt("singh@gmail.com", "jsdgfjsgfkhjg"); //I use correct email foramt hence jwt is generated otherwise if i use wrong email format it will return null.
console.log(ans); //print jwt

//2. Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
const jwt = require("jsonwebtoken");
const zod = require("zod");
function decodeJwt(token) {
  const decode = jwt.decode(token);
  if (decode) {
    return true;
  } else {
    return false;
  }
}

console.log(
  decodeJwt(
    "give a token it will return true if token is valid and otherwise return false "
  )
);

//3. Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise

const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPass = "secret";

function verifyJwt(token) {
  //here we need to use try catch block because if token is not valid then it will throw an error and we need to catch that error.why in verify not in decode because in decode it will not throw an error if token is not valid it will return null.
  let ans = true;
  try {
    jwt.verify(token, jwtPass);
  } catch (e) {
    ans = false;
  }
  return ans;
}

const result = verifyJwt("give a token and verify that");
console.log(result);
