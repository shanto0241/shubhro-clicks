import { useRouter } from "next/router"


const StoryDetailsPage = () => {
    const router = useRouter()
  return (
    <div>StoryDetailsPage: {router.query.story}</div>
  )
}

export default StoryDetailsPage