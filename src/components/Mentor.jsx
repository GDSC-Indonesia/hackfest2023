import Profile from "./Profile"

export default function Mentor() {
  const mentorData = [
    {name: "Muhammad Razan Fawwaz", position: "Google HackFest 2023 Lead", image: ""},
    {name: "Robert Theo", position: "Google HackFest 2023 Tech Lead", image: ""},
    {name: "Nico Abel Laia", position: "Google HackFest 2023 Tech Member", image: ""},
    {name: "Haris Daffa", position: "Google HackFest 2023 Tech Member", image: ""},
  ]

  return (
    <section className="border-b-2 border-black bg-gooGreen-500 py-8">
    <div className="text-center h-full">
      <h2 className="font-gooBold text-5xl mb-4">Mentors</h2>
      <p className="font-gooReg text-2xl mb-8">Current Mentors, might change in the future.</p>
    </div>
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 my-4 gap-4">
        {mentorData.map((data, index) => {
          return <Profile key={index} {...data} />
        })}
      </div>
    </div>
  </section>
  )
}