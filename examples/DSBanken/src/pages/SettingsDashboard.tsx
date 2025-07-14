import { Heading2 } from "@sb1/ffe-core-react";
import { Tab, TabGroup } from "@sb1/ffe-tabs-react";
import React from "react";

const menuItems = [
    { id: "profile", label: "Profile", path: "/settings/profile" },
    { id: "security", label: "Security", path: "/settings/security" },
    { id: "notifications", label: "Notifications", path: "/settings/notifications" },
];

const SettingsDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(menuItems[0].id);

    return (
        <>
        <TabGroup>
            {menuItems.map(item => (
                <Tab
                key={item.id}
                selected={activeTab === item.id}
                onClick={() => setActiveTab(item.id)}
                >
                    {item.label === "Profile"
                        ? "Profil"
                        : item.label === "Security"
                        ? "Sikkerhet"
                        : item.label === "Notifications"
                        ? "Varsler"
                        : item.label}
                </Tab>
            ))}
        </TabGroup>
        <div>
            {activeTab === "profile" && (
                <div>
                    <Heading2>Profilinnstillinger</Heading2>
                    <p>Administrer dine profilinnstillinger her.</p>
                </div>
            )}
            {activeTab === "security" && (
                <div>
                    <Heading2>Sikkerhetsinnstillinger</Heading2>
                    <p>Administrer dine sikkerhetsinnstillinger her.</p>
                </div>
            )}
            {activeTab === "notifications" && (
                <div>
                    <Heading2>Varslingsinnstillinger</Heading2>
                    <p>Administrer dine varslingspreferanser her.</p>
                </div>
            )}
        </div>
        </>
    );
};

export default SettingsDashboard;