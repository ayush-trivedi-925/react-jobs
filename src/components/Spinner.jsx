import { PuffLoader } from "react-spinners";

export default function Spinner({ loading }) {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <>
      <PuffLoader
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </>
  );
}
