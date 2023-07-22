import { useRouter } from "next/router"

const ErrorPage = () => {
    const router = useRouter();
    setTimeout(()=>{
        router.push('/')
    }, 5000)
  return (
    <div>This is the error page. </div>
  )
}

export default ErrorPage