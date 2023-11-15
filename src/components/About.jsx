import React from 'react';

const About = () => {
  return (
    <>
      <div style={{ marginTop: '5rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="/gcomlogo.jpg" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2" style={{ color: 'black' }}>ABOUT</h2>
            <p className="main-p" style={{ color: 'red' }}>
              G-com Solutions is a dynamic and innovative telecommunications company dedicated to providing
              cutting-edge solutions in the ever-evolving telecommunication industry. With a focus on customer
              satisfaction, technological excellence, and a commitment to growth, G-com Solutions is your partner
              for seamless communication and connectivity.
            </p>

            <h3 style={{ color: 'black' }}>Key Information:</h3>
            <p style={{ color: 'red' }}>
              Company Name: G-com Solutions <br />
              Founded: 2020 <br />
              Headquarters: Nairobi <br />
              Key Executives: <br />
              - Emmanuel Lidbury Wanyama-CEO <br />
              - Dennis Kinyua-SECRETARY/CFO <br />
              - Maxwel Ogutu-Operations Logistics Manager <br />
              Industry: Telecommunications
            </p>

            <h3 style={{ color: 'black' }}>Services:</h3>
            <p style={{ color: 'red' }}>
              G-Com solutions is a Telecommunications company specialized in dealing in FTTX FTTH Cabling Management
              products and fiber optic testers. We offer fiber optic solutions and products, and engineering services
              for Telecom carriers, ISPs, Engineering companies and contractors (FTTH and FTTA for 4G/5G), Cable TV, Data
              Communication (Data Center of Computing Network, Cloud Computing, Big Data, IOT, etc.), CCTV Video
              Surveillance, etc. We have 10+ engineers with over 20-year experience, customers from East African
              countries.
            </p>

            {/* Add other sections as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
