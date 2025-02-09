import ProductModel from "../models/product.model.js";
import UserModel from "../models/user.model.js";

export default class UserController {
    getRegister(req, res) {
      res.render('register');
        }

      getLogin(req,res) {
        res.render('login',{errorMessage: null});
    }

    postRegister (req,res) {
      const {name, email, password} = req.body;    // we are extracting name, email, pass and destructuring using req.body;
      UserModel.add(name, email, password);         // add funtion passing name email and password
      res.render('login',{errorMessage:null});
    }

    postLogin(req,res) {
     const { email, password } = req.body;
     const  user = UserModel.isValiduser(email, password);

     if(!user){
      // res.send("Invalid Credentials"); or
      return res.render('login', {
        errorMessage:'Invalid credentials'
      });
     }
     req.session.userEmail= email; //session object is session user email
    //  return res.render('/');
    var products = ProductModel.getAll();
    res.render('index', {
      products,
      userEmail: req.session.userEmail
      });
    }
     

    logout(req, res){
    req.session.destroy((err)=>{
      if(err) {
        console.log(err);
      } else {
        res.redirect('/login')
      }
    });

    res.clearCookie('lastVisit'); // by this line we are deleting cookie

  }
}