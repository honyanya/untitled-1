import ApiRequest from '../components/ApiRequest';
import Hello from '../components/Hello';

function Page1() {
  return (
    <div>
      <h2>Page1</h2>
      <Hello message="world" />
      <ApiRequest />
    </div>
  );
}

export default Page1;
