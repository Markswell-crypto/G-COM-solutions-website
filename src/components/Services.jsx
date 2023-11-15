import React from "react";
import { Card } from 'react-bootstrap';

function Services() {
  return (
    <div className="container services" style={{ width: '60%', color: 'brick-red' }}>
      <h2 className="main-title text-center">SERVICES</h2>
      
      <h3 className="main-title text-center mt-4">Main Service Fields</h3>
      <ul>
        <li>
          Telecommunication Solutions: We offer a wide range of telecommunication solutions, including data services, broadband, mobile connectivity, and network infrastructure.
        </li>
        <li>
          Business Solutions: Tailored telecommunication solutions designed to meet the specific needs of businesses, including cloud-based communication, VoIP, and unified communication.
        </li>
        <li>
          Network Infrastructure: Cutting-edge network design, implementation, and maintenance services to ensure robust and efficient connectivity.
        </li>
        <li>
          Consulting and Support: Expert consulting services to optimize your telecommunication infrastructure and 24/7 customer support to ensure smooth operations.
        </li>
      </ul>
      <h3 className="main-title text-center mt-4">Clientele</h3>
      <p>
        G-com Solutions serves a diverse client base, including businesses of all
        sizes, government agencies, non-profits, and individual consumers.
      </p>

      <h3 className="main-title text-center mt-4">Recent Achievements</h3>
      <ul>
        <li>
          Densification of Safaricom Digital City-FTTH (Nairobi, Kajiado).
        </li>
        <li>
          Building and maintenance Fiber connect-FTTH (Kiambu, Nairobi).
        </li>
        <li>
          Building and maintenance Safhome-FTTH (Kiambu, Nairobi, Machakos).
        </li>
        <li>
          Building FTTH Kenya Ports Authority Housing unit-Nairobi.
        </li>
        <li>
          Building and maintenance of FTTH KENGEN-Kamburu, Embu.
        </li>
      </ul>

      <h3 className="main-title text-center mt-4">Commitment to Sustainability</h3>
      <p>
        G-com Solutions is dedicated to environmental responsibility and
        sustainability. We implement eco-friendly practices in our operations
        and strive to reduce our carbon footprint.
      </p>

      
    </div>
  );
}

export default Services;
