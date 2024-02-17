import { SigninTestApi } from "./test-apis";

const Api = () => {
  return (
    <div id='api' role='main'>
      {process.env.NEXT_PUBLIC_NODE_ENV === "development" && <SigninTestApi />}
    </div>
  );
};

export default Api;
