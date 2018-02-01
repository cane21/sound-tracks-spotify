import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    //console.log('this.props', this.props);
    let artist = {
      name: '',
      followers: { total: ''},
      images: [{ url: ''}],
      genres: []
    };
    artist = this.props.artist !== null ? this.props.artist : artist;

    return (
      <div className="profile">
        <img 
          src={artist.images[0].url} 
          alt="Profile" 
          className="profile-img" 
        />
        <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">
            SEGUIDORES {artist.followers.total}  
          </div>
          <div className="profile-genres">
            GENERO
            {
              artist.genres.map((genre, k) => {
                genre = genre !== artist.genres[artist.genres.length-1]
                              ? ` ${genre},`
                              : ` & ${genre}`;
                return (
                  <span key={k}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
