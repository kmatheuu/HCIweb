import React from 'react';
import './App.css';

function Home() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '40px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontFamily: 'Quicksand, sans-serif',
          color: '#5a3019', // Dark Honey Brown color
          fontSize: '3rem',
          marginBottom: '20px',
        }}
      >
        Welcome to AlgoBeesual!
      </h1>
      <p
        style={{
          fontFamily: 'Quicksand, sans-serif',
          color: '#5a3019',
          fontSize: '1.3rem',
          marginBottom: '20px',
        }}
      >
        Visualize sorting algorithms in action. Learn how algorithms like Bubble Sort, Merge Sort, and more work through interactive animations.
      </p>

      <p
        style={{
          fontFamily: 'Quicksand, sans-serif',
          color: '#5a3019',
          fontSize: '1.2rem',
          marginBottom: '20px',
        }}
      >
        See algorithms step-by-step and compare their performance with different data sets.
      </p>

      <h3
        style={{
          fontFamily: 'Quicksand, sans-serif',
          color: '#5a3019',
          fontSize: '1.6rem',
          marginBottom: '10px',
        }}
      >
        Key Features:
      </h3>
      <ul
        style={{
          fontFamily: 'Quicksand, sans-serif',
          color: '#5a3019',
          fontSize: '1.2rem',
          listStyleType: 'circle',
          marginLeft: '25px',
          marginBottom: '30px',
          textAlign: 'left',
        }}
      >
        <li>Interactive algorithm visualizations</li>
        <li>Step-by-step explanations</li>
        <li>Compare algorithm efficiency</li>
      </ul>

      <h3
        style={{
          fontFamily: 'Quicksand, sans-serif',
          color: '#5a3019',
          fontSize: '1.6rem',
          marginBottom: '20px',
        }}
      >
        Start Exploring!
      </h3>
      <p
        style={{
          fontFamily: 'Quicksand, sans-serif',
          color: '#5a3019',
          fontSize: '1.2rem',
        }}
      >
        Select an algorithm from the menu to see it in action!
      </p>
    </div>
  );
}

export default Home;
