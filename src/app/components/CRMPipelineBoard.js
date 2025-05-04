// CRMPipelineBoard.js
import React from 'react';
import '../styles/CRMPipelineBoard.css';

export default function CRMPipelineBoard() {
  // Pipeline data
  const pipelineStages = [
    {
      name: "Contacted",
      count: 12,
      leads: [
        {
          companyName: "ByteBridge",
          description: "Corporate and personal data protection on a turnkey basis",
          date: "18 Apr",
          messages: 2,
          calls: 1
        },
        {
          companyName: "AI Synergy",
          description: "Innovative solutions based on artificial intelligence",
          date: "21 Mar",
          messages: 1,
          calls: 3
        },
        {
          companyName: "LeadBoost Agency",
          description: "Lead attraction and automation for small business owners",
          date: "No due date",
          messages: 4,
          calls: 7
        }
      ]
    },
    {
      name: "Negotiation",
      count: 17,
      leads: [
        {
          companyName: "SkillUp Hub",
          description: "Platform for professional development of specialists",
          date: "09 Mar",
          messages: 4,
          calls: 1
        },
        {
          companyName: "Thera Well",
          description: "Platform for psychological support and consultations",
          date: "No due date",
          messages: 7,
          calls: 2
        },
        {
          companyName: "SwiftCargo",
          description: "International transportation of chemical goods",
          date: "23 Apr",
          messages: 2,
          calls: 5
        }
      ]
    },
    {
      name: "Offer Sent",
      count: 13,
      leads: [
        {
          companyName: "FitLife Nutrition",
          description: "Nutritious food and nutraceuticals for individuals",
          date: "10 Mar",
          messages: 1,
          calls: 3
        },
        {
          companyName: "Prime Estate",
          description: "Agency-developer of low-rise elite and commercial real estate",
          date: "16 Apr",
          messages: 1,
          calls: 1,
          address: "540 Realty Blvd, Miami, FL 33132",
          email: "contact@primeestate.com",
          manager: {
            name: "Antony Cardenas",
            title: "Manager"
          },
          isDark: true
        },
        {
          companyName: "NextGen University",
          description: "",
          date: "",
          messages: 0,
          calls: 0
        }
      ]
    },
    {
      name: "Deal Closed",
      count: 12,
      leads: [
        {
          companyName: "CloudSphere",
          description: "Cloud services for data storage and processing for businesses",
          date: "24 Mar",
          messages: 2,
          calls: 1
        },
        {
          companyName: "Advantage Media",
          description: "Full cycle of digital advertising and social media promotion",
          date: "05 Apr",
          messages: 1,
          calls: 3
        },
        {
          companyName: "Safebank Solutions",
          description: "Innovative financial technologies and digital payment systems",
          date: "30 Mar",
          messages: 4,
          calls: 7
        }
      ]
    }
  ];

  return (
    <div className="pipeline-container">
      {pipelineStages.map((stage, stageIndex) => (
        <div key={stageIndex} className="pipeline-column">
          <div className="column-header">
            <div className="stage-name">
              {stage.name}
              <span className="stage-count">{stage.count} ↑</span>
            </div>
          </div>
          <div className="leads-container">
            {stage.leads.map((lead, leadIndex) => (
              <div 
                key={leadIndex} 
                className={`lead-card ${lead.companyName === "Prime Estate" ? "dark-card" : ""}`}
              >
                <div className="card-header">
                  <h3 className="company-name">{lead.companyName}</h3>
                  <button className="more-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </div>
                
                {lead.description && (
                  <p className="company-description">
                    {lead.description}
                  </p>
                )}
                
                {lead.address && (
                  <div className="contact-info">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{lead.address}</span>
                  </div>
                )}
                
                {lead.email && (
                  <div className="contact-info">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>{lead.email}</span>
                  </div>
                )}
                
                {lead.manager && (
                  <div className="manager-info">
                    <div className="avatar">
                      {lead.manager.name.charAt(0)}
                    </div>
                    <div className="manager-details">
                      <div className="manager-title">{lead.manager.title}</div>
                      <div className="manager-name">{lead.manager.name}</div>
                    </div>
                  </div>
                )}
                
                <div className="card-footer">
                  {lead.date && (
                    <div className="meta-info">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{lead.date}</span>
                    </div>
                  )}
                  <div className="activity-info">
                    {lead.messages > 0 && (
                      <div className="meta-info">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>{lead.messages}</span>
                      </div>
                    )}
                    {lead.calls > 0 && (
                      <div className="meta-info">
                        <span className="phone-icon">☎</span>
                        <span>{lead.calls}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}