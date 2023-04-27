import React, { Component } from 'react';

import Background from '../assets/images/storm.jpg';

declare global {
  interface Window {
    YT: any;
  }
}

class Stormchasers extends Component<{}, {}> {
  componentDidMount() {
    // Load the YouTube player
    const apiKey = 'AIzaSyASDpzurODk_TXKKLSGk4AIAW2ziqyKPio';
    const playlistId = 'JMxuOvt7SU8';

    const player = new window.YT.Player('player', {
      height: '360',
      width: '640',
      playerVars: {
        autoplay: 1,
        controls: 1,
        loop: 1,
        playlist: playlistId,
        enablejsapi: 1,
        origin: window.location.origin,
        key: apiKey,
      },
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange,
      },
    });
  }

  onPlayerReady(event: YT.PlayerEvent) {
    // Autoplay the player when it's ready
    event.target.playVideo();
  }

  onPlayerStateChange(event: YT.OnStateChangeEvent) {
    // Loop the playlist when it reaches the end
    if (event.data === window.YT.PlayerState.ENDED) {
      event.target.playVideo();
    }
  }

  render() {
    return (
      <div style={{ backgroundImage: `url(${Background})`}} className="flex justify-center mx-auto bg-cover bg-fixed">
        <div className='flex place-items-center h-screen'>
          <div id="player"></div>
        </div>
      </div>
    );
  }
}

export default Stormchasers





