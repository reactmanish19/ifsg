import AppFooterSidebar from "./AppFooter/AppFooter";
import AppHeader from "./AppHeader/AppHeader";
import AppLeftSidebar from "./AppLeftSidebar/AppLeftSidebar";
import "../Components/MultiStepForm/MultiStepForm.scss";

const Layout = ({ children }) => {
    return (
        <>
            <div className="multi-step-form-root-container">
                <div className="multi-step-form-root-container__step-holder">
                    <AppHeader />
                    <AppLeftSidebar />
                    {children}
                    <AppFooterSidebar />
                </div>
            </div>
        </>
    )
}
export default Layout;
