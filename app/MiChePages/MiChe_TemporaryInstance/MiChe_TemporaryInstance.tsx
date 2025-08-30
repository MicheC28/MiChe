import { Lens } from "components/magicui/lens";
import MiCheBreadcrumb from "../MiChe_Breadcrumb/MiChe_Breadcrumb";
import temporaryinstance from "../../images/MiChe/MiChe_Temporary-Instance.jpg";

export default function MiChe_TemporaryInstance() {
  return (
    <div className="relative z-10">
      <div className="h-30 md:h-20"></div>

      <div className="gap-y-5 flex flex-col">
        <MiCheBreadcrumb projectName="Temporary Instance - 2023" />

        <div className="bg-black/60 mx-10 md:mx-40 rounded-xl p-8 gap-y-5 flex flex-col justify-evenly items-center">
          <div className="flex flex-col md:flex-row gap-5 items-end justify-center">
            <div className="md:w-2/5 gap-y-5 flex flex-col">
              <Lens lensSize={170} zoomFactor={1.7}>
                <img src={temporaryinstance} />
              </Lens>
              <p className="text-base italic text-slate-500 text-center">
                "Temporary Instance", 2023. Acrylic on paper.
              </p>
            </div>
          </div>

          <p className="text-white text-base md:mx-20">
            "Sometimes people ask me why I don't paint on more sophisticated or
            permanent materials like canvas or solid board. My answer was always
            that I never had one on hand. I don't prepare for my bursts of
            creativity. I can't really plan for them. So, that's why I use
            what's at hand - cardboard, paper, wood from the garage, etc. I'm
            resourceful.
            <br></br>
            <br></br>
            The story for this one, not as fun. So, I'm not going to tell it.
            I'll rant a little more until the description for this piece is
            similar in length to the other ones. Maybe one day I'll come back
            and change it, who knows, I sure don't.
            <br></br>
            <br></br>
            Maybe this is a good place to give a quick tutorial as to how I
            paint my iconic style. Yeah, that's what I'll do.
            <br></br>
            <br></br>
            <b>STEP 1: It's all about that base</b>
            <br></br>
            <br></br>
            Whatever you knew about colors, throw it away. The flowers I paint
            are predominantly red, so what color should the base be? Blue,
            obviously. No, I'm serious, a dark blue base. I'm not really sure
            why, but I like to think that it creates the shadow of the object
            before the object actually exists. Geometry-wise, the base is a
            literal blob. Detailed shapes are overrated. I don't even bother
            with petals; that's a different color's problem.
            <br></br>
            <br></br>
            Flowers also have stems and leaves, which, due to the chlorophyll
            content in their chemical makeup, are green. So, our base will be
            bright red. Using a base of red or orange really brings out some of
            the warmer tones of the flower. Makes the whole scene look more
            alive, which is important since they're flowers.
            <br></br>
            <br></br>
            Now, take a step back and take a good look at your progress!
            <br></br>
            <br></br>
            ...Ok, maybe there's some more work to be done.
            <br></br>
            <br></br>
            <b>STEP 2: More reasonable colors</b>
            <br></br>
            <br></br>
            Fine, I'll admit it, I was gaslighting you for a bit. Red flowers
            aren't actually blue, and green leaves aren't red. So let's just
            cover those up. Maybe leave a slight outline for that artistic vibe.
            This is where those thick layers of paint come in. So, take your
            time, be patient. This is also where the shapes of petals and leaves
            come in, so come on, chop chop.
            <br></br>
            <br></br>
            <b>
              STEP 3: Highlights and Lowlights (are lowlights a thing? I'm not
              sure)
            </b>
            <br></br>
            <br></br>
            Now, a good rule I use when I make most of my pieces is never to use
            black or white. Whenever I use those, it just dulls out the bright
            colors I strive so hard to capture. If I ever do use them, it's to
            mix them with other colors to widen my hue range. So, use some of
            the yellows and oranges for your highlights (and some pink if you're
            feeling fruity today). Build more on shadows with those blues and
            purples.
            <br></br>
            <br></br>
            ANNNNNND CUT! You're finished. Well, at least you've got the meat
            and potatoes of my style. You can obviously spice it up as much as
            you want if you don't find my meat and potatoes flavorful enough, I
            guess."
            <br></br>
            <br></br>- MiChe
          </p>
        </div>
      </div>

      <div className="h-15"></div>
    </div>
  );
}
