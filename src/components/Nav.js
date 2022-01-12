import React from 'react';

export default function nav() {
    const linkStyle = { border: '1px black', padding: '10px'}
    return (
        <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'times-new-roman',
            fontWeight: 'bold',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div style={linkStyle}>
            <a href="#">Home</a>
          </div>
          <div style={linkStyle}>
            <a href="#">About Me</a>
          </div>
          <div style={linkStyle}>
              <a href="#">My Projects</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Contact</a>
          </div>
        </section>
      </nav>
    )
}