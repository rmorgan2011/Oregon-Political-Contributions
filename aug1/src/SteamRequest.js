import React from 'react';

const steamKey = '57F37742D59249DCF4023274CF3A8C5A';

class SteamRequest extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      object: {}
    };

    this.performFetch = this.performFetch.bind(this);
  }

  performFetch(){
    const appContext = this;
    fetch('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?key=' + steamKey + '&appid=440&count=3&maxlength=300&format=json').then(
                      function(response){
                        return response.json();
                      })
                      .then(function(data) {
                        appContext.setState({object: data})
                      })
  }

  render(){
    this.performFetch();
    return(
      <div></div>
    )
  }
}


export default SteamRequest;
