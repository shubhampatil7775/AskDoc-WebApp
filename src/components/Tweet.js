
import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import Navbars from './Navbars';
import healthdesk from '../images/helpdesk.jpg'
import "./Tweet.css"
import {Helmet} from 'react-helmet';
const Twit = require('twit');



const apikey = 'WJytYEWekZTWeb1E0ShTiEHhO'
const apiSecretKey = 'zRRLetJxIP0aVjfusx5CbrDpb9PAchR2kQk59GxUbBnCqE71Km'
const accessToken = '1388216242440396802-VUbHmpfflmBMiSdJt4GAmynzxjiYAg'
const accessTokenSecret = 'kxbD8tfJeSBjf74feIUoZoBeCLYL4SugWGOlX5miIFQUr'
var temp='no'
var alt=''


var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
  app_only_auth:        true
});


  

export class Tweet extends Component {

    constructor()
    {
        super();
        this.state={
            name:null
        }
    }

    handleChange(e) {
        alt=e.target.value;
        
      }

    async hek()
    {  
       
        T.get('search/tweets', { q:alt, count: 10   }, function(err, data, response) {
        
            const tryTable=document.getElementById('requestlistchild');
            const table=tryTable.getElementsByTagName('tbody')[0];

            if(err)
            console.log(err)
            console.log(data);
            temp=data.statuses
            for(var i=0;i<5;i++)
            {
            console.log(temp[i].text)
            
            var row1=table.insertRow();         

            var col1=row1.insertCell(0);
            var newText1  = document.createElement('span');
            newText1.innerHTML=temp[i].created_at;
            col1.appendChild(newText1);

            var col1=row1.insertCell(1);
            var newText1  = document.createElement('span');
            newText1.innerHTML=temp[i].text;
            col1.appendChild(newText1);
            }
        
        })
       
    }
    render(){
    return (
        <div>   
             <Helmet>
         <style>{'body { background-color: #E8EBF8  }'}</style>
    </Helmet>
            <Navbars/>
            <a href="https://twitter.com/home" ><img class="help" src={healthdesk}/></a><br></br>
            <input name="txtMobileNo" id="txtMobileNo" type="text" onChange={this.handleChange} placeholder="Enter Query"></input>
             <button  type="button" class="btn btn-primary"  onClick={this.hek}>Search</button>
            
             <table className="table table-bordered" id="requestlistchild">
                                <tbody>
                                    <tr>
                                        <td  align="center"><b>DATE</b></td>
                                        <td  align="center"><b>TWEET</b></td>
                                    </tr>
                                </tbody>
                                </table>
        </div>
    )
    }
}

export default Tweet
