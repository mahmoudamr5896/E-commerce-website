// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');


// firebase admin setup
let serviceAccount = require("./e-commerce-website-55ede-firebase-adminsdk-5e3sb-c092374e1a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

// declare static path
let staticPath = path.join(__dirname, "public");

//intializing express.js
const app = express();
app.use(express.json());

//middlewares
app.use(express.static(staticPath));

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

//signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

const mailRegex = /^[a-zA-Z0-9._%+-]+@(yahoo|hotmail|gmail)+\.com$/g;
const nameRegex = /^[a-zA-Z]{3,}(\s[a-zA-Z]{3,})+$/g;  
app.post('/signup', (req, res) => {
    let { name, email, password, number, tac, notification } = req.body;

    // form validations
    if(!name.match(nameRegex)){
        return res.json({'alert': 'Please enter your full name 3 letters each'});
    } else if(!email.match(mailRegex)){
        return res.json({'alert': 'Please enter your email like name@domain.com'});
    } else if(password.length < 8){
        return res.json({'alert': 'Password should be 8 letters long'});
    } else if(!number.length){
        return res.json({'alert': 'Please enter your phone number'});
    } else if(!Number(number) || number.length < 10){
        return res.json({'alert': 'Invalid number, please enter a valid one'});
    } else if(!tac){
        return res.json({'alert': 'Please read our terms and conditions then agrees'});
    }   
    // store user in db
db.collection('users').doc(email).get()
.then(user => {
    if(user.exists){
        return res.json({'alert': 'email already exists'});
    } else{
        // encrypt the password before storing it.
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                req.body.password = hash;
                db.collection('users').doc(email).set(req.body)
                .then(data => {
                    res.json({
                        name: req.body.name,
                        email: req.body.email,
                        seller: req.body.seller,
                    })
                })
            })
        })
    }
})
    
})

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    }
}


// login route
app.get("/login",(req, res) => {
    res.sendFile(path.join(staticPath,"login.html"))
})


app.post('/login',(req, res) => {

    let {email, password} = req.body;        //take user nput as email and password

    if(!email.length || !password.length){
        return res.json({'alert':'Please fill the inputs'})
    }
    db.collection('users').doc(email).get()  //database collection call to get the emails
    .then(user => {

        if(!user.exists){                    // if email doesn\'t exist
            return res.json({'alert':'Login email doesn\'t exist'})
        } else{
            // compare is a functin, compare strings return true if identical 
            bcrypt.compare(password, user.data().password, (err, result) => {
                if(result){
                    let data = user.data();   // data = all the user data we hve
                    return res.json({         // returns the name and email to frontend
                        name: data.name,
                        email: data.email,
                        seller: data.seller,
                    })
                } else{
                    return res.json({'alert':'Password is incorrect'})
                }
            })
        }
    })

    })

    
// get products
app.post('/get-products', (req, res) => {
    let {email, id, tag} = req.body;
    if(id){
        docRef = db.collection('products').doc(id)
    } else if(tag){
        docRef = db.collection('products').where('tags', 'array-contains', tag)
    } else{
        docRef = db.collection('products').where('email', '==', email)
    }

    docRef.get()
    .then(products => {
        if(products.empty){
            return res.json('no products');
        }
        let productArr = [];
        if(id){
            return res.json(products.data());
        } else{
            products.forEach(item => {
                let data = item.data();
                data.id = item.id;
                productArr.push(data);
            })  
            res.json(productArr)   
        }
    })
})



// product page
app.get('/products/:id', (req, res) => {
    res.sendFile(path.join(staticPath, "product.html"))    
})




// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})