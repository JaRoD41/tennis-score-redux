import { useSelector } from "react-redux"

export default function CounterTest() {
  const counter = useSelector((state) => state.counter.value)
  return (
		<>
			<p className="display" id="score">
				Le counterTest est : {counter}
			</p>
		</>
	)
}
