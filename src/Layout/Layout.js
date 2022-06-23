import AppFooterSidebar from "./AppFooter/AppFooter"
import AppHeader from "./AppHeader/AppHeader"
import AppLeftSidebar from "./AppLeftSidebar/AppLeftSidebar"

const Layout = ({ children }) => {
    return (
        <>
            <AppHeader />
            <AppLeftSidebar />
            {children}
            <AppFooterSidebar />
        </>
    )
}
export default Layout