import DashboardScreen from "@/modules/dashboard/screens/main";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function Dashboard() {
  return <DashboardScreen />;
}

export default withAuthenticationRequired(Dashboard);
