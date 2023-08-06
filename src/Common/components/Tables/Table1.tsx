import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";

export default function Table1() {
  const [customers, setCustomers] = useState([
    {
      id: 1001,
      name: "John Smith",
      country: {
        name: "United States",
        code: "us",
      },
      company: "Smith & Co.",
      date: "2018-05-20",
      status: "qualified",
      verified: true,
      activity: 25,
      representative: {
        name: "Emily Johnson",
        image: "emilyjohnson.png",
      },
      balance: 50000,
    },
    {
      id: 1002,
      name: "Maria Rodriguez",
      country: {
        name: "Spain",
        code: "es",
      },
      company: "Rodriguez Consulting",
      date: "2019-10-12",
      status: "qualified",
      verified: true,
      activity: 10,
      representative: {
        name: "Carlos Hernandez",
        image: "carloshernandez.png",
      },
      balance: 30000,
    },
    {
      id: 1003,
      name: "Anna Müller",
      country: {
        name: "Germany",
        code: "de",
      },
      company: "Müller & Sons",
      date: "2020-07-01",
      status: "unqualified",
      verified: false,
      activity: 5,
      representative: {
        name: "Hans Schmidt",
        image: "hansschmidt.png",
      },
      balance: 15000,
    },
    {
      id: 1004,
      name: "Sophie Martin",
      country: {
        name: "France",
        code: "fr",
      },
      company: "Martin Enterprises",
      date: "2017-12-09",
      status: "qualified",
      verified: true,
      activity: 8,
      representative: {
        name: "Lucie Dupont",
        image: "luciedupont.png",
      },
      balance: 45000,
    },
    {
      id: 1005,
      name: "Ravi Patel",
      country: {
        name: "India",
        code: "in",
      },
      company: "Patel Solutions",
      date: "2022-02-18",
      status: "unqualified",
      verified: false,
      activity: 12,
      representative: {
        name: "Priya Sharma",
        image: "priyasharma.png",
      },
      balance: 20000,
    },
    {
      id: 1006,
      name: "Luis Hernandez",
      country: {
        name: "Mexico",
        code: "mx",
      },
      company: "Hernandez & Associates",
      date: "2019-06-30",
      status: "qualified",
      verified: true,
      activity: 20,
      representative: {
        name: "Carlos Lopez",
        image: "carloslopez.png",
      },
      balance: 35000,
    },
    {
      id: 1007,
      name: "Sara Johnson",
      country: {
        name: "United Kingdom",
        code: "gb",
      },
      company: "Johnson Ltd",
      date: "2018-09-25",
      status: "qualified",
      verified: true,
      activity: 15,
      representative: {
        name: "David Thompson",
        image: "davidthompson.png",
      },
      balance: 40000,
    },
    {
      id: 1008,
      name: "Javier Fernandez",
      country: {
        name: "Spain",
        code: "es",
      },
      company: "Fernandez Solutions",
      date: "2021-03-14",
      status: "unqualified",
      verified: false,
      activity: 3,
      representative: {
        name: "Elena Sanchez",
        image: "elenasanchez.png",
      },
      balance: 10000,
    },

    {
      id: 1009,
      name: "Yuki Tanaka",
      country: {
        name: "Japan",
        code: "jp",
      },
      company: "Tanaka Corporation",
      date: "2023-01-05",
      status: "qualified",
      verified: true,
      activity: 18,
      representative: {
        name: "Hiroshi Yamamoto",
        image: "hiroshiyamamoto.png",
      },
      balance: 60000,
    },
    {
      id: 1010,
      name: "Isabella Rossi",
      country: {
        name: "Italy",
        code: "it",
      },
      company: "Rossi & Co.",
      date: "2020-11-20",
      status: "qualified",
      verified: true,
      activity: 7,
      representative: {
        name: "Marco Bianchi",
        image: "marcobianchi.png",
      },
      balance: 25000,
    },
    {
      id: 1011,
      name: "Chen Wei",
      country: {
        name: "China",
        code: "cn",
      },
      company: "Wei Enterprises",
      date: "2019-08-10",
      status: "unqualified",
      verified: false,
      activity: 9,
      representative: {
        name: "Li Jing",
        image: "lijing.png",
      },
      balance: 18000,
    },
    {
      id: 1012,
      name: "Andrei Ivanov",
      country: {
        name: "Russia",
        code: "ru",
      },
      company: "Ivanov Solutions",
      date: "2017-04-02",
      status: "qualified",
      verified: true,
      activity: 14,
      representative: {
        name: "Olga Petrova",
        image: "olgapetrova.png",
      },
      balance: 38000,
    },
    {
      id: 1013,
      name: "Mohammed Ali",
      country: {
        name: "Egypt",
        code: "eg",
      },
      company: "Ali & Sons",
      date: "2022-09-15",
      status: "qualified",
      verified: true,
      activity: 22,
      representative: {
        name: "Fatima Hassan",
        image: "fatimahassan.png",
      },
      balance: 48000,
    },

    {
      id: 1014,
      name: "Ana Silva",
      country: {
        name: "Portugal",
        code: "pt",
      },
      company: "Silva Consulting",
      date: "2019-12-07",
      status: "unqualified",
      verified: false,
      activity: 6,
      representative: {
        name: "Pedro Santos",
        image: "pedrosantos.png",
      },
      balance: 12000,
    },
    {
      id: 1015,
      name: "Alexandre Dupont",
      country: {
        name: "Canada",
        code: "ca",
      },
      company: "Dupont & Associates",
      date: "2018-03-28",
      status: "qualified",
      verified: true,
      activity: 19,
      representative: {
        name: "Isabelle Tremblay",
        image: "isabelletremblay.png",
      },
      balance: 42000,
    },
    {
      id: 1016,
      name: "Hiroshi Nakamura",
      country: {
        name: "Japan",
        code: "jp",
      },
      company: "Nakamura Ltd",
      date: "2021-06-10",
      status: "unqualified",
      verified: false,
      activity: 4,
      representative: {
        name: "Yui Tanaka",
        image: "yuitanaka.png",
      },
      balance: 9000,
    },
    {
      id: 1017,
      name: "Luisa Fernandez",
      country: {
        name: "Mexico",
        code: "mx",
      },
      company: "Fernandez & Co.",
      date: "2020-02-14",
      status: "qualified",
      verified: true,
      activity: 13,
      representative: {
        name: "Ricardo Lopez",
        image: "ricardolopez.png",
      },
      balance: 32000,
    },
    {
      id: 1018,
      name: "Emma Wilson",
      country: {
        name: "United States",
        code: "us",
      },
      company: "Wilson Solutions",
      date: "2019-11-01",
      status: "qualified",
      verified: true,
      activity: 16,
      representative: {
        name: "Michael Anderson",
        image: "michaelanderson.png",
      },
      balance: 28000,
    },
    {
      id: 1019,
      name: "Giuseppe Bianchi",
      country: {
        name: "Italy",
        code: "it",
      },
      company: "Bianchi & Sons",
      date: "2018-07-23",
      status: "unqualified",
      verified: false,
      activity: 11,
      representative: {
        name: "Francesca Ferrari",
        image: "francescaferrari.png",
      },
      balance: 14000,
    },
    {
      id: 1020,
      name: "Sara Khan",
      country: {
        name: "Pakistan",
        code: "pk",
      },
      company: "Khan Enterprises",
      date: "2023-03-19",
      status: "qualified",
      verified: true,
      activity: 23,
      representative: {
        name: "Ahmed Malik",
        image: "ahmedmalik.png",
      },
      balance: 52000,
    },
  ]);
  const [balanceFrozen, setBalanceFrozen] = useState(false);

  const balanceTemplate = (rowData: any) => {
    return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
  };

  const formatCurrency = (value: any) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div style={{ width: "80vw", margin: "0" }}>
      <DataTable
        value={customers}
        scrollable
        scrollHeight="400px"
        className="mt-4"
      >
        <Column
          field="name"
          header="Name"
          style={{ minWidth: "200px" }}
          frozen
          className="font-bold"
        />
        <Column field="id" header="Id" style={{ minWidth: "100px" }} />
        <Column field="name" header="Name" style={{ minWidth: "200px" }} />
        <Column
          field="country.name"
          header="Country"
          style={{ minWidth: "200px" }}
        />
        <Column field="date" header="Date" style={{ minWidth: "200px" }} />
        <Column
          field="company"
          header="Company"
          style={{ minWidth: "200px" }}
        />
        <Column field="status" header="Status" style={{ minWidth: "200px" }} />

        <Column
          field="balance"
          header="Balance"
          body={balanceTemplate}
          style={{ minWidth: "200px" }}
          alignFrozen="right"
          frozen={balanceFrozen}
        />
      </DataTable>
    </div>
  );
}
