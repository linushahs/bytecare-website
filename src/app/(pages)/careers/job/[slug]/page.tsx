import { ApplyNowButton } from "@/components/job-apply-modal";
import Container from "@/components/ui/container";
import { HEADING_TYPES, headingVariants } from "@/components/ui/heading";
import Lights from "@/components/ui/lights";
import Footer from "@/layouts/footer";

function JobDescriptionPage() {
  return (
    <>
      <Lights />
      <section className="mb-32">
        <div className="mx-auto flex flex-col items-center w-[90%] sm:max-w-[50rem] 2xl:max-w-[56rem] mt-12">
          <div className="flex flex-col items-center">
            <p className="mt-8 mb-2 flex gap-3 text-md items-center text-textSecondary">
              Full time{" "}
              <span className="size-1 bg-textSecondary rounded-full"></span>{" "}
              On-site
            </p>
            <h1
              className={headingVariants({ variant: HEADING_TYPES.headline04 })}
            >
              UI UX Designer
            </h1>
          </div>
          <div className="prose prose-sm sm:prose-base 2xl:prose-lg max-w-none mb-12">
            <article>
              <hr />
              <div>
                <h2>About Bytecare</h2>
                <p>
                  Bytecare, an innovative IT Solution Company, invites
                  passionate individuals to join our dynamic team. Established
                  in 2020 AD by IT enthusiasts, we specialize in web and mobile
                  app development, deeply caring about every project we
                  undertake. Be part of a company that values excellence,
                  creativity, and the drive to transform businesses&apos; online
                  presence.
                </p>
              </div>
              <div>
                <h2>What this job can offer you</h2>
                <ul>
                  <li>Manage a quickly growing and business-critical team.</li>
                  <li>
                    Increase the level of team maturity. Mentor and inspire,
                    give and seek feedback in order to continually raise our bar
                    for quality.
                  </li>
                  <li>
                    Make strategic design and user-experience decisions related
                    to core, as well as new functions and features.
                  </li>
                  <li>
                    Contribute to hiring and retaining product designers; help
                    to shape the team culture.
                  </li>
                  <li>
                    Ability to provide clear feedback and direction to designers
                    on your team without being overly prescriptive.
                  </li>
                  <li>
                    Contribute to creating and maintaining our design system,
                    participate in team critiques and reviews, assist in user
                    research, organize customer events and design workshops.
                  </li>
                </ul>
              </div>
              <div>
                <h2>What you bring</h2>
                <ul>
                  <li>Manage a quickly growing and business-critical team.</li>
                  <li>
                    Increase the level of team maturity. Mentor and inspire,
                    give and seek feedback in order to continually raise our bar
                    for quality.
                  </li>
                  <li>
                    Make strategic design and user-experience decisions related
                    to core, as well as new functions and features.
                  </li>
                  <li>
                    Contribute to hiring and retaining product designers; help
                    to shape the team culture.
                  </li>
                  <li>
                    Ability to provide clear feedback and direction to designers
                    on your team without being overly prescriptive.
                  </li>
                  <li>
                    Contribute to creating and maintaining our design system,
                    participate in team critiques and reviews, assist in user
                    research, organize customer events and design workshops.
                  </li>
                </ul>
              </div>
              <div>
                <h2>Benefits</h2>
                <ul>
                  <li>Manage a quickly growing and business-critical team.</li>
                  <li>
                    Increase the level of team maturity. Mentor and inspire,
                    give and seek feedback in order to continually raise our bar
                    for quality.
                  </li>
                  <li>
                    Make strategic design and user-experience decisions related
                    to core, as well as new functions and features.
                  </li>
                  <li>
                    Contribute to hiring and retaining product designers; help
                    to shape the team culture.
                  </li>
                  <li>
                    Ability to provide clear feedback and direction to designers
                    on your team without being overly prescriptive.
                  </li>
                  <li>
                    Contribute to creating and maintaining our design system,
                    participate in team critiques and reviews, assist in user
                    research, organize customer events and design workshops.
                  </li>
                </ul>
              </div>
              <div>
                <h2>How to apply</h2>
                <ol>
                  <li>Manage a quickly growing and business-critical team.</li>
                  <li>
                    Increase the level of team maturity. Mentor and inspire,
                    give and seek feedback in order to continually raise our bar
                    for quality.
                  </li>
                  <li>
                    Make strategic design and user-experience decisions related
                    to core, as well as new functions and features.
                  </li>
                  <li>
                    Contribute to hiring and retaining product designers; help
                    to shape the team culture.
                  </li>
                  <li>
                    Ability to provide clear feedback and direction to designers
                    on your team without being overly prescriptive.
                  </li>
                  <li>
                    Contribute to creating and maintaining our design system,
                    participate in team critiques and reviews, assist in user
                    research, organize customer events and design workshops.
                  </li>
                </ol>
              </div>
              <p>
                We will ask you to voluntarily tell us your pronouns at
                interview stage, and you will have the option to answer our
                anonymous demographic questionnaire when you apply below. As an
                equal employment opportunity employer it’s important to us that
                our workforce reflects people of all backgrounds, identities,
                and experiences and this data will help us to stay accountable.
                We thank you for providing this data, if you chose to. Need
                help?
              </p>
              <p>
                <span>Email: </span>
                <a href="/">hiring@bytecare.com</a>
              </p>
            </article>
          </div>

          <ApplyNowButton />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default JobDescriptionPage;
