import { useEffect, useState } from "react";
import Card from "../components/Card.jsx"; // Assuming Card component is used to render each faculty

function Placement() {
  const [department, setDepartment] = useState<{ name: "srinithi";

  useEffect(() => {
    const depart: { name: string; faculty: { name: ; exp: number; domain: string }[] }[] = [
      {
        name: "CSE",
        faculty: [
          { name: "siva", exp: 2, domain: "iot" },
          { name: "siva", exp: 2, domain: "iot" },
          { name: "siva", exp: 2, domain: "iot" },
          { name: "siva", exp: 2, domain: "iot" },
        ],
      },
      {
        name: "EIE",
        faculty: [],
      },
    ];
    setDepartment(depart);
  }, []);

  return (
    <div>
      {department.map((dept, index) => (
        <div key={index}>
          <h2>{dept.name}</h2>
          {dept.faculty.map((faculty, index) => (
            <div key={index}>
              <Card item={faculty} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Placement;