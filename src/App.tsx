import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  AboutIconLink,
  FeedbackForm,
  FeedbackList,
  FeedbackStats,
  Header,
} from 'components';
import AboutPage from 'pages/AboutPage';
import { FeedbackProvider } from 'context/FeedbackContext';

const App: FC = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
