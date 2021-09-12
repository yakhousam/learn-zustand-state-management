import { useStore } from "../zustandSate";

export function CounterDispaly() {
  const { count } = useStore();
  return (
    <div>
      <p>{count}</p>
    </div>
  );
}
