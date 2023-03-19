import RegisterForm from 'components/RegisterForm/RegisterForm';
import Section from 'components/Section/Section';
import { Helmet } from 'react-helmet';

const RegisterPages = () => {
  return (
    <>
      <Helmet>
        <title>register</title>
      </Helmet>
      <Section>
        <RegisterForm />
      </Section>
    </>
  );
};

export default RegisterPages;
