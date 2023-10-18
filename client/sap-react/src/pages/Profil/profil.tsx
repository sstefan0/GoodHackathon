import { Avatar } from "@mui/material";
import "./profil-style.css";
import { useAppSelector } from "../../store/configureStore";
import { blue, deepOrange, deepPurple } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import HouseIcon from "@mui/icons-material/House";
import EmailIcon from "@mui/icons-material/Email";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
const Profil = () => {
  const selector = useAppSelector((store) => store.account);
  return (
    <div className="user-profile">
      <Avatar
        sx={{
          bgcolor: blue[400],
          width: 100,
          height: 100,
        }}
      >{`${selector.user?.ime[0]} ${selector.user?.prezime[0]}`}</Avatar>

      <PersonIcon color="primary" sx={{ fontSize: 30 }} />

      <h3>{`${selector.user?.ime} ${selector.user?.prezime}`}</h3>
      <HouseIcon color="primary" sx={{ fontSize: 30 }} />
      <h3>{selector.user?.adresaStanovanja}</h3>
      <EmailIcon color="primary" sx={{ fontSize: 30 }} />
      <h3>{selector.user?.email}</h3>
      <DriveFileRenameOutlineIcon color="primary" sx={{ fontSize: 30 }} />
      <h3>{selector.user?.username}</h3>
    </div>
  );
};
export default Profil;
