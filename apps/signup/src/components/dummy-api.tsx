import SignupPreview from "./signup-preview";

// DummyApi component is a component that acts as a source for the API component.
const DummyApi = function DummyApi() {
  return (
    <div id='dummy-api'>
      <SignupPreview />
    </div>
  );
};

export default DummyApi;
