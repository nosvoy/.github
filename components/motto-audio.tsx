import React from 'react'
import AudioSpectrum from 'react-audio-spectrum'

export default function MottoAudio() {
  return <div>
    <audio id="audio-element" controls autoPlay loop>
      <source src="/assets/nosvoy.mp3" type="audio/mpeg" />
    </audio>
    <AudioSpectrum
      id="audio-canvas"
      height={200}
      width={600}
      audioId={'audio-element'}
      capColor={'red'}
      capHeight={2}
      meterWidth={2}
      meterCount={512}
      meterColor={[
        {stop: 0, color: '#f00'},
        {stop: 0.5, color: '#0CD7FD'},
        {stop: 1, color: 'red'}
      ]}
      gap={4}
    />
  </div>
}
