import React, { useState } from "react";

const CRMApp = () => {
  const [activeTab, setActiveTab] = useState("clients");

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">CRM Dashboard - Commodity Trading</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4">
        <button
          className={`p-2 ${activeTab === "clients" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("clients")}
        >
          Clients
        </button>
        <button
          className={`p-2 ${activeTab === "leads" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("leads")}
        >
          Leads
        </button>
        <button
          className={`p-2 ${activeTab === "contracts" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("contracts")}
        >
          Contracts
        </button>
        <button
          className={`p-2 ${activeTab === "shipments" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("shipments")}
        >
          Shipments
        </button>
        <button
          className={`p-2 ${activeTab === "payments" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("payments")}
        >
          Payments
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "clients" && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Clients</h2>
          <table className="min-w-full mt-2">
            <thead>
              <tr>
                <th className="border px-2 py-1">Client Name</th>
                <th className="border px-2 py-1">Contact</th>
                <th className="border px-2 py-1">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">ABC Grains LLC</td>
                <td className="border px-2 py-1">John Doe</td>
                <td className="border px-2 py-1">john@abc.com</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">XYZ Commodities</td>
                <td className="border px-2 py-1">Jane Smith</td>
                <td className="border px-2 py-1">jane@xyz.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "leads" && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Leads</h2>
          <p>Lead pipeline view coming soon...</p>
        </div>
      )}

      {activeTab === "contracts" && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Contracts</h2>
          <p>Contracts list view coming soon...</p>
        </div>
      )}

      {activeTab === "shipments" && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Shipments</h2>
          <p>Shipments tracking view coming soon...</p>
        </div>
      )}

      {activeTab === "payments" && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Payments</h2>
          <p>Payments and aging report coming soon...</p>
        </div>
      )}
    </div>
  );
};

export default CRMApp;
