import { useState } from "react"

const App = () => {
  const [value, SetValue] = useState<number>(0);

  return (
    <div
      className="w-screen h-screen bg-slate-500  font-semibold text-5xl flex items-center justify-center font-mono text-slate-300 select-none"
      onClick={() => SetValue((prevState: number) => prevState + 1)}
    >
      Click Me! : {value}
    </div>
  )
}

export default App
