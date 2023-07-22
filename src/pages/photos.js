import photos from "@/assets/photosGrid"
import RootLayout from "@/components/layout/RootLayout"

const Photos = () => {
  return (
    <div className="container mx-auto grid grid-cols-4  gap-2 mt-4">
      {photos.map((photo) => (
        <div
          key={photo._id}
          photo={photo}
        >
          <img className="shadow-lg" src={photo.imgUrl} alt={photo.altText}></img>
        </div>
      ))}
    </div>
  )
}

export default Photos

Photos.getLayout = function getLayout(page) {
    return (
     <RootLayout>
      {page}
     </RootLayout>
    )
  }