import React, { Component } from 'react';
import './CSS/HomePage.css'
import LoginForm from './Modules/LoginForm'
import Username from './Modules/Username'
import StarBoardForm from './Modules/StarBoardForm';
import LeaderBoardForm from './Modules/LeaderBoardForm';

import {Querystring} from "request/lib/querystring.js";

import Github from 'github-api';
Querystring.prototype.unescape = function(val) { return val };

var github = require('octonode');
var client = github.client({
  username: 'alambrop',
  password: 'Loutraki7'
});

client.get('/users/alambrop', {}, (err, status, body, headers) => {
  console.log(body); //json object
});

var ghme= client.me();
console.log("ghme",ghme)
var ghuser= client.user('alambrop');
var ghrepo= client.repo('alambrop/gamify');


ghrepo.commits( (err,data) => {
  console.log("error",err);
  console.log("data",data);
}) 
  

class  App  extends  Component  {
  
  render() {
    return  (
      <root>
        <div id='container'>
          <Username />
          {/* <StarBoardForm/> */}
          <LeaderBoardForm />
        </div>
      </root>
    );
  }
}


export  default  App; 