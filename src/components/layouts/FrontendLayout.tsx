import Navbar from "../navbar/Navbar"

export default function FrontendLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 w-full sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  )
}
