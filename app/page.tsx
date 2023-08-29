import EnterPassword from "../components/EnterPassword"
import Progress from "../components/Progress"
import ProductInfo from "../components/ProductInfo"

export default function Home() {
  return (
    <div className=" flex flex-col gap-12">
      <EnterPassword></EnterPassword>
      <Progress></Progress>
      <ProductInfo></ProductInfo>
    </div>
  )
}
