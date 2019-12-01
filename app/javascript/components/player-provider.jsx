import React, { useState, useEffect } from "react";
import Tone from "tone";

const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    const player = new Tone.Players(
      {
        kick: "/sounds/kick.wav",
        tomHi: "/sounds/tom_hi.wav",
        tomLow: "/sounds/tom_low.wav",
        snare: "/sounds/snare.wav",
        rim: "/sounds/rim.wav",
        cymbal: "/sounds/cymbal.wav",
        shaker: "/sounds/shaker.wav",
        snare: "/sounds/tamb.wav"
      },
      () => {
        console.log("buffers loaded");
        setPlayer(player);
      }
    ).toMaster();
  }, []);

  return children({ player });
};

export default PlayerProvider;