import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Home = () => {
  return (
    <Container style={{ width: '60%' }}>
      <Card className="mt-4 p-3 bg-light text-dark">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Card.Title><h1>Welcome to G-com Solutions</h1></Card.Title>
              <Card.Text>
                <h4 className='text-warning'>Your partner for seamless communication and connectivity.</h4>
              </Card.Text>
            </div>
            <Image src="/gcomlogo.jpg" alt="G-com Solutions Logo" fluid height="150px" width="150px" />
          </div>
        </Card.Body>
      </Card>
      <h2 className="mt-4 text-dark">Our Vision</h2>
      <p className="text-dark">
        To lead the telecommunications industry through innovation, exceptional
        customer service, and a commitment to connecting people and businesses
        globally.
      </p>

      <h2 className="mt-4 text-dark">Our Mission</h2>
      <p className="text-dark">
        <strong className="text-dark">Provide state-of-the-art telecommunication solutions:</strong>{' '}
        Empowering businesses and individuals.
      </p>
      <p className="text-dark">
        <strong className="text-dark">Cultivate a culture of excellence:</strong> Creativity, and
        adaptability within our organization.
      </p>
      <p className="text-dark">
        <strong className="text-dark">Establish enduring relationships:</strong> With our clients,
        built on trust and satisfaction.
      </p>

      <h2 className="mt-4 text-dark">Core Values</h2>
      <ul className="text-dark">
        <li>Innovation</li>
        <li>Customer-Centric Approach</li>
        <li>Quality and Reliability</li>
        <li>Integrity</li>
        <li>Collaboration</li>
      </ul>

      <h2 className="mt-4 text-dark">Recent Achievements</h2>
      <Card className="bg-light text-dark">
        <Card.Body>
          <Card.Title>Densification of Safaricom Digital City-FTTH (Nairobi, Kajiado)</Card.Title>
          <Card.Text>...</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-3 bg-light text-dark">
        <Card.Body>
          <Card.Title>Building and maintenance Fiber connect-FTTH (Kiambu, Nairobi)</Card.Title>
          <Card.Text>...</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-3 bg-light text-dark">
        <Card.Body>
          <Card.Title>Building and maintenance Safhome-FTTH(Kiambu,Nairobi,Machakos)
</Card.Title>
          <Card.Text>...</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-3 bg-light text-dark">
        <Card.Body>
          <Card.Title>Building FTTH Kenya Ports Authority Housing unit-Nairobi
</Card.Title>
          <Card.Text>...</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-3 bg-light text-dark">
        <Card.Body>
          <Card.Title>Building and maintenance of FTTH KENGEN-Kamburu,Embu
</Card.Title>
          <Card.Text>...</Card.Text>
        </Card.Body>
      </Card>
      <br></br>
    </Container>
  );
};

export default Home;
