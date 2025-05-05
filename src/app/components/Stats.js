"use client";
import React from "react";
import "../styles/Stats.css";

export default function Stats() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const newCustomersData = [6, 11, 10, 4, 11];
  const previousCustomersData = [3, 6, 7, 2, 6];
  const maxCustomers = 11;
  const percent = 68; // percent out of 100
  const radius = 75;
  const stroke = 5;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percent / 100) * circumference;

  return (
    <div className="stats-container">
      <div className="stats-card">
        <div className="bar-chart-container">
          <div className="bar-chart-title">New customers</div>
          <div className="bar-chart-row">
            <div className="y-axis-labels">
              <div>10</div>
              <div>5</div>
              <div>0</div>
            </div>
            <div className="bar-chart">
              {days.map((day, index) => {
                const newHeight =
                  (newCustomersData[index] / maxCustomers) * 100;
                const prevHeight =
                  (previousCustomersData[index] / maxCustomers) * 100;

                return (
                  <div key={index} className="bar-column">
                    <div className="bar-pair">
                      <div
                        className="bar striped"
                        style={{ height: `${prevHeight}%` }}
                      ></div>
                      <div
                        className="bar solid"
                        style={{ height: `${newHeight}%` }}
                      ></div>
                    </div>
                    <div className="day-label">{day}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Beautiful Arc Gauge with SVG */}
      <div className="gauge-wrapper">
        <div className="gauge">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="gauge-svg"
          >
            <circle
              stroke="#DDDDDD"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeDasharray={circumference + " " + circumference}
              strokeDashoffset={0}
            />
            <circle
              stroke="#48494B"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeDasharray={circumference + " " + circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="progress-ring"
              style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
            />
          </svg>
          <div className="gauge-percentage">
            <div className="percentage-value">{percent}%</div>
            <div className="percentage-label">Successful deals</div>
          </div>
        </div>
      </div>

      <div className="stats-section metric-section">
        <div className="metric">
          <div className="metric-value">53</div>
          <div className="metric-label">
            Tasks
            <br />
            in progress
            <span className="arrow">→</span>
          </div>
        </div>
      </div>

      <div className="stats-section metric-section">
        <div className="metric">
          <div className="metric-value">$ 15.890</div>
          <div className="metric-label">
            Prepayments
            <br />
            from customers
            <span className="arrow">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
