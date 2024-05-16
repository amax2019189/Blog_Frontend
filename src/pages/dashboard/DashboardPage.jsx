import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { useUserDetails } from "../../shared/hooks";
import { usePublications } from "../../shared/hooks/usePublications";

import "./dashboardPage.css";



export const DashboardPage = () => {
  const { getPublications ,allPublications, isFetching } = usePublications()
  const { isLogged } = useUserDetails();

  useEffect(() => {
    getPublications(isLogged);
  }, []);

  if (isFetching) {
    return <LoadingSpinner />;
  }
  
  return (
    <div className="dashboard-container">
      <Navbar />
      <Content publications={allPublications || []} getPublications={getPublications}/>
    </div>
  );
};