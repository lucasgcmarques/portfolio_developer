import { Me } from "./me"
import { MyPhoto } from "./myphoto"
import { Selector } from "./selector"
import { Specialties } from "./specialties"


export const About = () => {
  return (
    <section className="flex flex-column m-content">
      <div className="h-vh flex items-center w-full gap-2">
        <Specialties/>
        <Selector/>
      </div>
      <div className="h-vh flex items-center w-full gap-2">
        <Me/>
        <MyPhoto/>
      </div>
    </section>
  )
}