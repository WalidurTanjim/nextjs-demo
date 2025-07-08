import DashboardSideNav from "@/components/DashboardSideNav/page";

const DashboardLayout = ({ children }) => {
    return (
        <>
            <DashboardSideNav />
            {children}
        </>
    );
};

export default DashboardLayout;