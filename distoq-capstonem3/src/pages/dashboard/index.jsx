import DashboardPage from "../../components/dashboard-components/DashboardPage";
import PedidosPage from "../../components/dashboard-components/PedidosPage";
import FornecedoresPage from "../../components/dashboard-components/FornecedoresPage";
import InsumosPage from "../../components/dashboard-components/InsumosPage";
import ProdutosPage from "../../components/dashboard-components/ProdutosPage";
import EstoquePage from "../../components/dashboard-components/EstoquePage";
import FinanceiroPage from "../../components/dashboard-components/FinanceiroPage";
import DashboardHeader from "../../components/header-components";
import ComprasPage from "../../components/dashboard-components/ComprasPage";
import { useActivePage } from "../../Providers/DashboardPageController";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";

const Dashboard = () => {
  const { activeDashboardPage } = useActivePage();

  const token = localStorage.getItem("@DEStoq:token");
  const { decodedToken, isExpired } = useJwt(token);

  const navigate = useNavigate();
  const isLoggedIn = token && !isExpired;
  const isAdmin = decodedToken?.sub;
 
  console.log("dec", typeof decodedToken?.sub);


  if (!isLoggedIn) {
    return navigate("/login");
  }

  if (isAdmin !== "1") {
    return navigate("/");
  }

  const handlePageRender = (value) => {
    switch (value) {
      case "Dashboard":
        return <DashboardPage />;
      case "Pedidos":
        return <PedidosPage />;

      case "Fornecedores":
        return <FornecedoresPage />;

      case "Insumos":
        return <InsumosPage />;

      case "Compras":
        return <ComprasPage />;

      case "Produtos":
        return <ProdutosPage />;

      case "Estoque":
        return <EstoquePage />;

      case "Financeiro":
        return <FinanceiroPage />;

      default:
        return <DashboardPage />;
    }
  };

  return (
    <>
      <DashboardHeader />
      {handlePageRender(activeDashboardPage)}
    </>
  );
};
export default Dashboard;
