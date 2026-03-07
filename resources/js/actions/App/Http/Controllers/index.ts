import PortfolioController from './PortfolioController'
import DashboardController from './DashboardController'
import Settings from './Settings'
import Admin from './Admin'
const Controllers = {
    PortfolioController: Object.assign(PortfolioController, PortfolioController),
DashboardController: Object.assign(DashboardController, DashboardController),
Settings: Object.assign(Settings, Settings),
Admin: Object.assign(Admin, Admin),
}

export default Controllers