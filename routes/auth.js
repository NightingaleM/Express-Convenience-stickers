var express = require('express');
var router = express.Router();

var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
// var JirenguStrategy = require('passport-jirengu').Strategy;

passport.serializeUser(function (user, done) {
  console.log('---serializeUser--');
  console.log(user);
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  console.log('--deserializeUser--');
  console.log(obj);

  done(null, obj);
});

// passport.use(new JirenguStrategy({
//   clientID: '',
//   tokenURL: '',
//   clientSecret: '',
//   callbackURL: ''
// },
//   function (accessToken, refreshToken, profile, done) {
//     done(null, profile);

//   }));

passport.use(new GitHubStrategy({
  clientID: '5d050e59c15512da6091',
  tokenURL: 'http://note.oylz.site/oauth/token',
  clientSecret: '7a7b0eaf7a733998bdae6b414503be6b55277857',
  callbackURL: 'http://note.oylz.site/oauth/github/callback'
},
  function (accessToken, refreshToken, profile, done) {
    done(null, profile);

  }));

router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/');
});

router.get('/github', passport.authenticate('github'));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function (req, res) {
    req.session.user = {
      id: req.user.id,
      username: req.user.displayName || req.user.use,
      avatar: req.user._json.avatar_url,
      provider: req.user.provider
    };
    res.redirect('/')
  });

module.exports = router;
