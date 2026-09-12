"use client";

import { useEffect, useMemo, useState } from "react";

const GITHUB_USERNAME = "Jisukumarmishra";
const CURRENT_YEAR = new Date().getFullYear();

const YEARS = [
  CURRENT_YEAR,
  CURRENT_YEAR - 1,
  CURRENT_YEAR - 2,
  CURRENT_YEAR - 3,
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const BLUE_LEVELS = ["#151c25", "#1e3a5f", "#2f58c7", "#3b82f6", "#60a5fa"];

export default function GitHubGraph() {
  const [year, setYear] = useState(CURRENT_YEAR);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [year]);

  const { grid, monthLabels, totalContributions } = useMemo(() => {
    if (!data || !data.contributions) {
      return { grid: [], monthLabels: [], totalContributions: 0 };
    }

    const allDays = data.contributions
      .map((entry) => ({
        date: entry.date,
        count: entry.count,
        level: entry.level,
      }))
      .sort((a, b) => a.date.localeCompare(b.date));

    if (allDays.length === 0) {
      return { grid: [], monthLabels: [], totalContributions: 0 };
    }

    let total = data.total?.[year] || 0;

    if (!total) {
      total = allDays.reduce((sum, day) => sum + day.count, 0);
    }

    const firstDate = new Date(allDays[0].date);
    const startDow = firstDate.getDay();

    const padded = [];

    for (let i = 0; i < startDow; i++) {
      padded.push({ date: "", count: 0, level: 0, empty: true });
    }

    padded.push(...allDays);

    const weeks = [];

    for (let i = 0; i < padded.length; i += 7) {
      weeks.push(padded.slice(i, i + 7));
    }

    if (weeks.length > 0) {
      const lastWeek = weeks[weeks.length - 1];

      while (lastWeek.length < 7) {
        lastWeek.push({ date: "", count: 0, level: 0, empty: true });
      }
    }

    const labels = [];
    let lastMonth = -1;

    for (let wi = 0; wi < weeks.length; wi++) {
      for (const day of weeks[wi]) {
        if (day.date) {
          const month = new Date(day.date).getMonth();

          if (month !== lastMonth) {
            labels.push({ month: MONTHS[month], weekIndex: wi });
            lastMonth = month;
          }

          break;
        }
      }
    }

    return {
      grid: weeks,
      monthLabels: labels,
      totalContributions: total,
    };
  }, [data, year]);

  return (
    <section className="contrib-section">
      <h2 className="contrib-heading">Contribution Graph</h2>

      <div className="contrib-layout">
        <div className="contrib-graph-area">
          {loading ? (
            <div className="contrib-loading">Loading contributions...</div>
          ) : error ? (
            <div className="contrib-loading">
              Could not load contribution data.
            </div>
          ) : (
            <>
              <div
                className="contrib-months"
                style={{
                  gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))`,
                }}
              >
                {monthLabels.map((ml) => (
                  <span
                    key={`${ml.month}-${ml.weekIndex}`}
                    className="contrib-month-label"
                    style={{ gridColumnStart: ml.weekIndex + 1 }}
                  >
                    {ml.month}
                  </span>
                ))}
              </div>

              <div
                className="contrib-grid"
                style={{
                  gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))`,
                }}
              >
                {grid.map((week, wi) => (
                  <div key={wi} className="contrib-week">
                    {week.map((day, di) => (
                      <div
                        key={`${wi}-${di}`}
                        className="contrib-cell"
                        style={{
                          backgroundColor: day.empty
                            ? "transparent"
                            : BLUE_LEVELS[day.level] || BLUE_LEVELS[0],
                        }}
                        title={
                          day.date
                            ? `${day.count} contributions on ${day.date}`
                            : ""
                        }
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="contrib-bottom">
                <span className="contrib-total">
                  {totalContributions.toLocaleString()} contributions in {year}
                </span>

                <div className="contrib-legend">
                  <span>Less</span>
                  {BLUE_LEVELS.map((color) => (
                    <div
                      key={color}
                      className="contrib-legend-cell"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="contrib-years">
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              className={`contrib-year-btn${
                y === year ? " contrib-year-btn--active" : ""
              }`}
              onClick={() => setYear(y)}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .contrib-section {
          width: 100%;
          max-width: 1425px;
          margin: 0 auto;
          padding: 40px 24px 70px;
          font-family: inherit;
        }

        .contrib-heading {
          margin: 0 0 44px;
          color: #ffffff;
          font-size: 38px;
          line-height: 1;
          font-weight: 800;
        }

        .contrib-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 86px;
          align-items: start;
          gap: 20px;
          width: 100%;
        }

        .contrib-graph-area {
          width: 100%;
          min-width: 0;
          padding: 38px 40px 42px;
          background: rgba(22, 24, 29, 0.86);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          overflow: hidden;
        }

        .contrib-months {
          display: grid;
          gap: 5px;
          margin-bottom: 10px;
          width: 100%;
        }

        .contrib-month-label {
          color: #ffffff;
          font-size: 18px;
          line-height: 1;
          font-weight: 700;
          white-space: nowrap;
        }

        .contrib-grid {
          display: grid;
          gap: 5px;
          width: 100%;
        }

        .contrib-week {
          display: grid;
          grid-template-rows: repeat(7, 1fr);
          gap: 5px;
          min-width: 0;
        }

        .contrib-cell {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 3px;
        }

        .contrib-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 12px;
          width: 100%;
        }

        .contrib-total {
          color: #ffffff;
          font-size: 18px;
          line-height: 1;
          font-weight: 700;
          white-space: nowrap;
        }

        .contrib-legend {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #ffffff;
          font-size: 18px;
          line-height: 1;
          font-weight: 700;
          white-space: nowrap;
        }

        .contrib-legend-cell {
          width: 16px;
          height: 16px;
          border-radius: 3px;
          flex: 0 0 auto;
        }

        .contrib-years {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contrib-year-btn {
          width: 86px;
          height: 47px;
          border: 0;
          border-radius: 8px;
          background: rgba(31, 34, 41, 0.88);
          color: #ffffff;
          font-family: inherit;
          font-size: 15px;
          line-height: 1;
          font-weight: 700;
          cursor: pointer;
        }

        .contrib-year-btn--active {
          background: #3b82f6;
          color: #07111f;
        }

        .contrib-loading {
          min-height: 170px;
          display: grid;
          place-items: center;
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .contrib-section {
            padding: 36px 16px 52px;
          }

          .contrib-heading {
            font-size: 32px;
            margin-bottom: 28px;
          }

          .contrib-layout {
            grid-template-columns: 1fr;
          }

          /* CHANGES FOR HORIZONTAL SCROLL ON MOBILE */
          .contrib-graph-area {
            padding: 24px 18px 28px;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          .contrib-months,
          .contrib-grid {
            min-width: 800px; /* Forces scroll bar, prevents cells from shrinking too much */
            gap: 3px;
          }
          .contrib-week {
            gap: 3px;
          }

          .contrib-month-label,
          .contrib-total,
          .contrib-legend,
          .contrib-year-btn {
            font-size: 14px;
          }

          .contrib-years {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .contrib-year-btn {
            width: 76px;
            height: 42px;
          }

          .contrib-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
