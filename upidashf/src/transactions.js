import Table2 from "./table2";
import ResponsiveAppBar from "./appBar";
import Login from "./Login";
import { useSession, useDescope } from "@descope/react-sdk";
import { useNavigate } from "react-router-dom";
const Transactions = () => {
  const { isAuthenticated } = useSession();
  const navigate = useNavigate();
  const onNotAuthenticated = useNavigate(() => {
    navigate("/Login");
  }, [useNavigate()]);
  if (!isAuthenticated) {
    onNotAuthenticated();
  }
  return (
    <>
      {!isAuthenticated && <Login></Login>}
      {isAuthenticated && (
        <>
          <ResponsiveAppBar prop={{ isAuthenticated: isAuthenticated }} />
          <Table2 />
        </>
      )}
    </>
  );
};
export default Transactions;
