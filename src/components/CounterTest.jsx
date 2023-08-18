import { useSelector } from "react-redux"

export default function CounterTest() {
	// Je recupere la valeur du counter dans le store grace a useSelector
  const counter = useSelector((state) => state.counter.value)
  return (
		<>
			<p className="display" id="score">
				Le counterTest est : {counter}
			</p>
		</>
	)
}
