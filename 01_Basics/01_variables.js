const accountId = 144553
let accountEmail = "kiran@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;  

// accountId  = 2  // NOt allowed

accountEmail = "Mohan@gmail.com"
accountPassword = "212121"
accountCity = "bengaluru"


console.table([accountId, accountEmail, accountPassword, accountCity , accountState])


// ┌─────────┬───────────────────┐
// │ (index) │ Values            │
// ├─────────┼───────────────────┤
// │ 0       │ 144553            │
// │ 1       │ 'Mohan@gmail.com' │
// │ 2       │ '212121'          │
// │ 3       │ 'bengaluru'       │
// │ 4       │ undefined         │
// └─────────┴───────────────────┘

/*  
prefare not to use var
because of issuew in bloack scope and functional scope
*/