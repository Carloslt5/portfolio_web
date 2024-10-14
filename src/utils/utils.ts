import { SocialMedia } from "@const/socialMedia"
import CVLogo from "@icons/CV.astro"
import GithubLogo from "@icons/Github.astro"
import LinkedinLogo from "@icons/Linkedin.astro"

export const socialMediaComponents = {
  [SocialMedia.GITHUB]: GithubLogo,
  [SocialMedia.LINKEDIN]: LinkedinLogo,
  [SocialMedia.CV]: CVLogo,
}
