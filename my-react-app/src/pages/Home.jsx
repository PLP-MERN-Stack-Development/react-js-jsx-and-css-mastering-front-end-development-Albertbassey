import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout>
      <Card title="Welcome">
        <p>This is the homepage of your awesome app.</p>
        <Button variant="primary" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>
      </Card>
    </Layout>
  );
}