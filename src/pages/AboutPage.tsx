import { FC } from 'react';
import { Card } from 'components';
import { Link } from 'react-router-dom';

const AboutPage: FC = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <Link to="/">Back to top</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
