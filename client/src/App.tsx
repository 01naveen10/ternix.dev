import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import DemoPage from "@/pages/DemoPage"; // ✅ import the demo page


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/demo" component={DemoPage} /> {/* ✅ New route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}



export default App;
