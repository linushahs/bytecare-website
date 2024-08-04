import { LightsParticleWrapper } from "@/components/lights-particle-wrapper";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Not Found",
};

export default function NotFoundPage() {
  return (
    <Container>
      <LightsParticleWrapper>
        <div className="max-w-xl mx-auto mt-10">
          <div className="flex flex-col items-center gap-y-8">
            <figure className="relative w-full max-w-sm aspect-square">
              <Image fill src="/img/404.webp" alt="404" />
            </figure>
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold leading-8 text-white font-heading">
                Page Not Found, But You Are!
              </h3>
              <p className="mt-6 mb-8 text-md leading-6 text-textSecondary">
                Looks like this page went on vacation. Don&apos;t worry;
                we&apos;re on a mission to find it. In the meantime, let&apos;s
                guide you to some interesting places.
              </p>
              <div className="flex items-center justify-center">
                <Link href="/">
                  <Button color="fill">Back to Homepage</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LightsParticleWrapper>
    </Container>
  );
}
