import GlobalDrawer from 'components/GlobalDrawer';
import ProfileForm from 'components/forms/ProfileForm';

const Profile = () => {
  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <GlobalDrawer>
      <ProfileForm onSubmit={handleSubmit} />
    </GlobalDrawer>
  );
};

export default Profile;
