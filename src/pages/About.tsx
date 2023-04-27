import React from 'react';
import Background from '../assets/images/rainbow-weather.jpg';

function About() {
  return (
    <div 
      style={{ 
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-screen w-screen flex justify-center items-center"
    >
      <div className="text-white text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">About My App</h1>
        <p className="text-lg">
          Welcome to My Coding Temple Final! My name is Shirley Jones, and I am a web developer who has recently completed a final project called WeatherMania. This project was developed using the technologies that were discussed in class, and I am excited to share it with you.
        </p>
        <p className="text-lg">
          WeatherMania is a working application that allows users to retrieve and display weather information for different locations. The application was built using the following topics and technologies:
        </p>
        <ul className="text-lg list-disc list-inside mb-4">
          <li>Frameworks: React, Tailwindcss, MaterialUI</li>
          <li>Databases: PostGreSQL</li>
          <li>Third-party Web APIs: OpenweatherAPI, YouTubeAPI</li>
          <li>Languages: TypeScript</li>
        </ul>
        <p className="text-lg">
          I built WeatherMania with React, one of the frameworks discussed in class, and integrated it with a PostGreSQL database. The application also interacts with two third-party web APIs: OpenweatherAPI, which provides weather data, and YouTubeAPI, which shows a livefeed video related to weather.
        </p>
        <p className="text-lg">
          With WeatherMania, users can create, retrieve, update, and delete data. The application is divided into two categories based on the web APIs used: Stormchasers (YouTube) and Weather.
        </p>
        <p className="text-lg">
          Thank you for visiting My Coding Temple Final Project, and I hope you enjoy using WeatherMania!
        </p>
      </div>
    </div>
  )
}

export default About;
