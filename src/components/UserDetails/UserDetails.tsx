import { FaMapPin } from "react-icons/fa"

const UserDetails = () => {
  return (
    <>
        <img
            src={"#"}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full"
        />
        <h1 className="mt-4 text-2xl font-bold">Siyabonga Ngcobo</h1>
        <div className="mt-2 flex items-center text-muted-foreground justify-center">
            <FaMapPin className="mr-2 h-4 w-4" />
            <span>Durban, ZA</span>
        </div>
        <div className="mt-2 flex items-center justify-center font-semibold text-green-600">
            <h6 className="font-bold mr-1">Hourly Rate:</h6>
            <span>$75/hour</span>
        </div>
    </>
  )
}

export default UserDetails