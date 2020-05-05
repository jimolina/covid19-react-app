import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

class Chart extends React.Component {
  getChart(CustomTooltip) {
    // console.log("COME x: ", this.props.data);
    return (
      <LineChart
        width={600}
        height={550}
        data={this.props.data}
        margin={{ top: 0, right: 40, bottom: 0, left: 40 }}
      >
        <Line
          type="monotone"
          dataKey="confirmed"
          stroke="#252323"
          activeDot={{ r: 8 }}
          dot={false}
          name="Confirmed"
        />
        <Line
          type="monotone"
          dataKey="recovered"
          stroke="#28a745"
          activeDot={{ r: 8 }}
          dot={false}
          name="Recovered"
        />
        <Line
          type="monotone"
          dataKey="deaths"
          stroke="#dc3545"
          activeDot={{ r: 8 }}
          dot={false}
          name="Deaths"
        />
        <CartesianGrid stroke="#ccc" axisLine="false" strokeDasharray="4 4" />
        <XAxis
          dataKey="date"
          tickMargin={10}
          height={40}
          interval={8}
          tickFormatter={(value) =>
            new Date(value).toLocaleString("en-US", {
              month: "2-digit",
              day: "2-digit",
            })
          }
        />
        <YAxis minTickGap={20} />
        <Tooltip content={<CustomTooltip />} />
        <Legend stroke="#252323" iconType="square" />
      </LineChart>
    );
  }

  render() {
    const CustomTooltip = ({ active, payload, label }) => {
      if (active) {
        let color1 = {
          color: `${payload[0].stroke}`,
        };
        let color2 = {
          color: `${payload[1].stroke}`,
        };
        let color3 = {
          color: `${payload[2].stroke}`,
        };

        return (
          <div className="card custom-tooltip p-0 shadow">
            <div className="card-header text-right py-1">
              {`${new Date(label).toLocaleString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}`}
            </div>
            <div className="card-body">
              <p className="card-text row-confirmed mb-0" style={color1}>
                {`${payload[0].name} : ${payload[0].value.toLocaleString()}`}
              </p>
              <p className="card-text row-recovered mb-0" style={color2}>
                {`${payload[1].name} : ${payload[1].value.toLocaleString()}`}
              </p>
              <p className="card-text row-deaths" style={color3}>
                {`${payload[2].name} : ${payload[2].value.toLocaleString()}`}
              </p>
            </div>
          </div>
        );
      }

      return null;
    };

    return (
      <div className="timeline-chart" style={{ width: "100%", height: 550 }}>
        <ResponsiveContainer>
          {this.getChart(CustomTooltip)}
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart;
