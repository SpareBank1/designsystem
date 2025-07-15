import MessagesView from "@/components/MessagesView";
import ProfileView from "@/components/ProfileView";
import SafetyView from "@/components/SafetyView";
import { Heading2 } from "@sb1/ffe-core-react";
import { SystemMessage } from "@sb1/ffe-messages-react";
import { Tab, TabGroup } from "@sb1/ffe-tabs-react";
import React from "react";

const menuItems = [
    { id: "profile", label: "Profile", path: "/settings/profile" },
    { id: "security", label: "Security", path: "/settings/security" },
    { id: "notifications", label: "Notifications", path: "/settings/notifications" },
];

const SettingsDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(menuItems[2].id);
    const [systemMessageVisible, setSystemMessageVisible] = React.useState(false);

    return (
        <>
            {systemMessageVisible && (<SystemMessage type="info" className="mb-4">Du har trigget en systemmelding! Her kan det stå hva som helst</SystemMessage>)}
            <TabGroup className="mb-4">
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
                        <ProfileView />
                    </div>
                )}
                {activeTab === "security" && (
                    <div>
                        <Heading2>Sikkerhetsinnstillinger</Heading2>
                        <p>Administrer dine sikkerhetsinnstillinger her.</p>
                        <SafetyView onTriggerContextMessage={() => setSystemMessageVisible(!systemMessageVisible)} />
                    </div>
                )}
                {activeTab === "notifications" && (
                    <div>
                        <Heading2>Varslingsinnstillinger</Heading2>
                        <p>Administrer dine varslingspreferanser her.</p>
                        <MessagesView />
                    </div>
                )}
            </div>
        </>
    );
};

export default SettingsDashboard;