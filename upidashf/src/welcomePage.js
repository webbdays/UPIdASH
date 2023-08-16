import ResponsiveAppBar from "./appBar";

const Welcome = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div
        style={{
          marginTop: "10%",
          textAlign: "center",
          border: "2px solid black",
          borderRadius: "200px",
        }}
      >
        <h1>
          Welcome to UPIdASH
          <br />A One stop Dashboard for all your UPI transactions
        </h1>
      </div>
    </>
  );
};

export default Welcome;
