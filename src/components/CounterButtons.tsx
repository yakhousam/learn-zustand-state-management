import { useStore } from "../zustandSate";

export function CounterButtons() {
  const { inc, dec } = useStore();
  return (
    <div>
      <button onClick={inc}>+</button> <button onClick={dec}>-</button>
    </div>
  );
}
