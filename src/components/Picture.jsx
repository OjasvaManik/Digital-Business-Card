import Image from "../images/profile-picture.jpg";

export default function Picture() {
    return (
        <img src={Image} alt="Profile Image" className="profile--img" />
    )
}