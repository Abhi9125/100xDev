// Use Memo example pratice
/* import { useEffect, useMemo, useState } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);

  console.log("before");
  const cryptoReturns = useMemo(() => {
    console.log("inside");
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);
  console.log("after");

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <>
      <h3>
        Exchange1Data {exchange1Data.returns} and exchange2Data{" "}
        {exchange2Data.returns}
      </h3>

      <div>hi there, your income tax returns are {incomeTax}</div>
    </>
  );
}

export default App;
 */

/* import { useEffect, useMemo, useState } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);

  console.log("before");
  const cryptoReturns = useMemo(() => {
    console.log("inside");
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);
  console.log("after");

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <>
      <h3>
        Exchange1Data {exchange1Data.returns} and exchange2Data{" "}
        {exchange2Data.returns}
      </h3>

      <div>hi there, your income tax returns are {incomeTax}</div>
    </>
  );
}

export default App; */

// Example 2---- of useCallback
/* import { memo, useCallback, useEffect, useMemo, useState } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setExchange1Data({
        returns: 100,
      });
    }, 3000);
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);

  const cryptoReturnsFn = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  return (
    <>
      <h1>Udate the {bankData.income}</h1>

      <Demo cryptoReturnsFn={cryptoReturnsFn} />
    </>
  );
}

const Demo = memo(function ({ cryptoReturnsFn }) {
  console.log("Render..");
  return <h1>Render demo{cryptoReturnsFn()} </h1>;
});

export default App; */

// Example 3 - useref -- Use for the refernce to the elements
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [incomeTax, setIncomeTax] = useState(2000);
  const divref = useRef();
  console.log(incomeTax);
  useEffect(() => {
    setTimeout(() => {
      console.log(divref.current);
      divref.current.innerHTML = 200;
    }, 5000);
  }, []);
  return (
    <div>
      Hii there, your income tax return are <div ref={divref}>{incomeTax}</div>
    </div>
  );
}
