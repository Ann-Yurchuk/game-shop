import { MdManageSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../utils";

export const Search = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate(`${URLS.search}`);
  };

  return <MdManageSearch size={30} onClick={handleclick} />;
};
