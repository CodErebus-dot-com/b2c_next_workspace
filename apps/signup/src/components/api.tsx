import { SignupTestApi } from "./test-apis";

const Api = () => {
  return (
    <div id='api' role='main'>
      {process.env.NEXT_PUBLIC_NODE_ENV === "development" && <SignupTestApi />}
    </div>
  );
};

export default Api;
