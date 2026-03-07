import DashboardController from './DashboardController'
import UserController from './UserController'
import ProjectController from './ProjectController'
import MessageController from './MessageController'
import SkillController from './SkillController'
import CertificationController from './CertificationController'
import ExperienceController from './ExperienceController'
import AboutController from './AboutController'
const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
UserController: Object.assign(UserController, UserController),
ProjectController: Object.assign(ProjectController, ProjectController),
MessageController: Object.assign(MessageController, MessageController),
SkillController: Object.assign(SkillController, SkillController),
CertificationController: Object.assign(CertificationController, CertificationController),
ExperienceController: Object.assign(ExperienceController, ExperienceController),
AboutController: Object.assign(AboutController, AboutController),
}

export default Admin