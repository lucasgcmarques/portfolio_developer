/* eslint-disable react/no-unescaped-entities */
import { LineBreak } from "../../components/ui/linebreak"

export const Me = () => {
  return (
    <div className="w-1x2">
        <div className="basic">
          <h2 className='display-2 mb-0'>
            <span className="stretch text-primary">Creaative</span>
            <LineBreak/>
            Frontend innovator
            <LineBreak/>
            Web wizard
          </h2>
        </div>
        <div className="flex gap-2 mt-3">
          <div className="w-1x6 mt-3">
            <p>
              Hello world!
              <LineBreak/>
              I’m Lucas
            </p>
          </div>
          <div className="w-4x6 mt-3">
            <p>
              Since 2019, I've been immersed in the dynamic world of web systems for startups, where I've honed my skills in user experience across various levels.
              <LineBreak size={'1rem'}/>
              My journey has now evolved towards mastering coding, allowing me to blend these domains and elevate my projects to new heights. Take a look at some of my endeavors that showcase this exciting fusion of expertise.
            </p>
            <a href="">Check out my portfolio</a>
          </div>
        </div>
    </div>
  )
}