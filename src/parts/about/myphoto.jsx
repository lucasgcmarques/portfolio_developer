import profile from "../../assets/profile/profile.png";
import vector2 from "../../assets/images/vector2.svg";

export const MyPhoto = () => {
  return (
    <div className="w-1x2 relative flex">
      <img className="vector2" src={vector2} alt="" />
      <img className="profile" src={profile} alt="" />
    </div>
  );
};
