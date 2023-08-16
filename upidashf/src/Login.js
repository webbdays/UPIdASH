import { Descope } from "@descope/react-sdk";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onSuccess = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <div
        width="100px"
        style={{
          left: "50%",
          top: "50%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Descope
          flowId="sign-up-or-in"
          theme="light"
          onSuccess={onSuccess}
          onError={(err) => {
            console.log("Error!", err);
          }}
        />
      </div>
    </>
  );
};
export default Login;
