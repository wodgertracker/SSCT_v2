import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
// import {zkp} f

// import { AuthenticationService } from '../_services'
import { AuthenticationService} from '../../app/market-place/services/authentication.service';

import {  AlertService } from '../../app/market-place/services/alert.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
   

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // show success message on registration
        if (this.route.snapshot.queryParams['registered']) {
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();


        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                  this.router.navigate(['/dashboard'], { queryParams: { registered: true }});
                },
                error => {
                    this.alertService.error(error);

                });
    }


    /*
app.get('/browser.thinbus.js', function(req, res){
  res.set('Content-Type', 'application/javascript');
  res.sendFile('browser.thinbus.js', { root: __dirname } );
});

// memdown is an in memory db that disappears when you restart the process
const memdown = require('memdown')
const db = new memdown('srp')
const cache = new memdown('challenge')

// const users: User[] = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
var users = [{id:1, username:'test', password:'test',firstName:'Test',lastName:User}];


// db.put(testUser.username, JSON.stringify(testUser), function (err) {
//     if (err) throw err
// })

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/save', urlencodedParser, function(req, res){
  if (!req.body) return res.sendStatus(400)
  
    var data = {salt: req.body.salt, verifier: req.body.verifier};

    db.put(req.body.username , JSON.stringify(data), function (err) {
        if (err) throw err
    })

  res.send('Welcome ' + req.body.username + '!</br>You can now attempt to authenticated at <a href="/login.html">the login page</a>.');

});

// this is mostly a diagnostic function used by the frisby tests
app.get('/load', function(req, res){
     users = user[1];

    if( typeof username === 'undefined') {
        return res.sendStatus(400);
    } else {
        db.get(username, { asBuffer: false }, function(err,value){
            if(err) {
                //console.log('user not found:'+username); //in the real world you should leak that fact that a user is or is not a customer a unique and stable set of values for unregistered users.')
                return res.sendStatus(204) // https://stackoverflow.com/a/11760249/329496
            } else {
                res.setHeader('Content-Type', 'application/json');
                // coerse the object to a string to split it
                const result = JSON.parse(value);
                delete result.verifier;
                //console.log(typeof value);
                res.send(JSON.stringify(result));
            }
        })
    }
});

app.post('/challenge', urlencodedParser, function(req, res){
    if (!req.body) return res.sendStatus(400)
    const username = req.body.username

    if( typeof username === 'undefined') {
        return res.sendStatus(400);
    } else {
        db.get(username, { asBuffer: false }, function(err,value){
            if(err) {
                //console.log('user not found:'+username); //in the real world you should leak that fact that a user is or is not a customer a unique and stable set of values for unregistered users.')
                return res.sendStatus(204) // https://stackoverflow.com/a/11760249/329496
            } else {
                res.setHeader('Content-Type', 'application/json');
                
                const result = JSON.parse(value);
                //console.log('loaded: '+JSON.stringify(result));
                const salt = result.salt;
                const verifier = result.verifier;

                // generate the server session class from the server session factory using the safe prime constants
                const SRP6JavascriptServerSession = require('thinbus-srp/server.js')(rfc5054.N_base10, rfc5054.g_base10, rfc5054.k_base16);

                // server generates B and b, sends B to client and b to a cache
                var serverWillDie = new SRP6JavascriptServerSession();
                const B = serverWillDie.step1(username, salt, verifier);
                const privateState = serverWillDie.toPrivateStoreState();
                const cacheJson = JSON.stringify(privateState);

                cache.put(username, cacheJson, function (err) {
                    if (err) throw err
                })

                // store the dbJson in a temporary cache or the main DB and await client to respond to challenge B. 
                // return B and salt to the client. 

                var response = {salt: result.salt, B: B};
                //console.log(JSON.stringify(response));
                res.send(JSON.stringify(response));
            }
        })
    }
});

app.post('/authenticate', urlencodedParser, function(req, res){
  if (!req.body) return res.sendStatus(400)
  const creds = req.body.credentials

  if( typeof creds === 'undefined'){
    return res.sendStatus(400);
  } else {
    const credentials = JSON.parse(creds)
    const username = credentials.username
    const A = credentials.A
    const M1 = credentials.M1
    db.get(username, { asBuffer: false }, function(err,value){
    if(err) {
        //console.log('user not found:'+username); //in the real world you should leak that fact that a user is or is not a customer a unique and stable set of values for unregistered users.')
        return res.sendStatus(204) // https://stackoverflow.com/a/11760249/329496
    } else {
        res.setHeader('Content-Type', 'application/json');
        
        const result = JSON.parse(value);
        //console.log('loaded from db: '+JSON.stringify(result));
        const salt = result.salt;
        const verifier = result.verifier;

        cache.get(username, {asBuffer: false}, function(err,cacheJson){
          if( err ) {
            return res.sendStatus(403)
          } else {
            // we now need to load the challenge data from the cache to check the credentials {A,M1}
            const newPrivate = JSON.parse(cacheJson);
            server = new SRP6JavascriptServerSession();
            server.fromPrivateStoreState(newPrivate);

            // the server takes `A`, internally computes `M1` based on the verifier, and checks that its `M1` matches the value sent from the client. If not it throws an exception. If the `M1` match then the password proof is valid. It then generates `M2` which is a proof that the server has the shared session key. 
            try {
              var M2 = server.step2(A, M1)
              console.log("shared key: "+server.getSessionKey())
              var string = encodeURIComponent(M2)
              res.redirect('/dashboard');
            } catch (e) {
              return res.sendStatus(403)
            }
          }
        })
    }
    })
  }
});

app.get('/dashboard', function(req,res){
  res.send( ' you have successfully authenticated!');
});

var server = app.listen(8080, function(){
  console.log('Node has started on port 8080');
});

exports.closeServer = function(){
  server.close();
};
    */
}


