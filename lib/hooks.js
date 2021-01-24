import * as React from "react";

export function UseDabounce(value, delay = 1000) {
  const [debaonceValue, setDebaouncedVaule] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebaouncedVaule(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debaonceValue;
}
