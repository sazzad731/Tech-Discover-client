import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Day 1",
    product1: 4000,
    product2: 2400,
    product3: 1000,
    amt: 2400,
  },
  {
    name: "Day 2",
    product1: 3000,
    product2: 1398,
    product3: 1500,
    amt: 2210,
  },
  {
    name: "Day 3",
    product1: 2000,
    product2: 9800,
    product3: 2000,
    amt: 2290,
  },
  {
    name: "Day 4",
    product1: 2780,
    product2: 3908,
    product3: 1800,
    amt: 2000,
  },
  {
    name: "Day 5",
    product1: 1890,
    product2: 4800,
    product3: 2400,
    amt: 2181,
  },
  {
    name: "Day 6",
    product1: 2390,
    product2: 3800,
    product3: 2500,
    amt: 2500,
  },
  {
    name: "Day 7",
    product1: 3490,
    product2: 4300,
    product3: 2400,
    amt: 2100,
  },
];
const MyLineChart = () => {
  return (
      <LineChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="product1"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="product2"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="product3"
          stroke="#ffb703"
          activeDot={{ r: 8 }}
        />
      </LineChart>
  );
};

export default MyLineChart;
