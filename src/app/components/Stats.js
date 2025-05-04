"use client";
import React, { useEffect } from "react";
import "../styles/Stats.css";

export default function Stats() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const newCustomersData = [6, 11, 10, 4, 11];
  const previousCustomersData = [3, 6, 7, 2, 6];
  const maxCustomers = 11;
  const percent = 68;
  const totalLines = 36;

  useEffect(() => {
    const gaugeLines = document.getElementById("gauge-lines");

    if (gaugeLines) {
      gaugeLines.innerHTML = "";

      for (let i = 0; i < totalLines; i++) {
        const line = document.createElement("div");
        line.className = "gauge-line";

        const angle = i * (180 / (totalLines - 1));
        line.style.transform = `rotate(${angle - 90}deg)`;

        const lineValue = (angle / 180) * 100;
        if (lineValue <= percent) {
          line.classList.add("active");
        }

        gaugeLines.appendChild(line);
      }
    }
  }, []);

  return (
    <div className="stats-container">
      <div className="stats-card">
        {/* New customers section with bar chart */}
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

      {/* Gauge Chart */}
      <div className="gauge-wrapper">
        <div className="gauge">
          <div className="gauge-lines" id="gauge-lines"></div>
          <div className="gauge-percentage">
            <div className="percentage-value">68%</div>
            <div className="percentage-label">Engaged time</div>
          </div>
        </div>
      </div>

      {/* Tasks in progress */}
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

      {/* Prepayments */}
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
