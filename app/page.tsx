import EnterPassword from "../components/EnterPassword"
import Progress from "../components/Progress"

export default function Home() {
  return (
    <div className=" flex flex-col gap-10">
      <EnterPassword></EnterPassword>
      <Progress></Progress>
    </div>
  )
}
