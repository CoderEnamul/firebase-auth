import { Link } from "react-router-dom"
import Google from "../../components/Google/Google"

export default function Home() {
  return (
    <div className="">
    <div>
    <h1 style={{
      fontsize:"14px"
      }}>
      Welcome to firebase Authentication
      </h1>
      <p>Don't have an account? <Link to={"/singUP"}>Create an account</Link></p>
      <p>Already have an account? <Link to={"/login"}>Login</Link></p>
    </div>
    <div>
      <Google/>
    </div>
    </div>
  )
}
