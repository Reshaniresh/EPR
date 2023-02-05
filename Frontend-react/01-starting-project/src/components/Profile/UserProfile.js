import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import Footer from '../Layout/Footer';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
      <Footer />
    </section>
  );
};

export default UserProfile;
