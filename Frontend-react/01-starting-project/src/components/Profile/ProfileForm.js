<<<<<<< HEAD
import classes from "./ProfileForm.module.css";
import Footer from "../Layout/Footer";
const ProfileForm = () => {
  return (
    <>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <input type="password" id="new-password" />
        </div>
        <div className={classes.action}>
          <button>Change Password</button>
        </div>
      </form>
      
    </>
  );
};
=======
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}
>>>>>>> 736c5dd32adfb4741e41eccecc01386114a4fb51

export default ProfileForm;
