import { SocialMedia } from "@const/socialMedia"
import CVLogo from "@icons/CV.astro"
import EmailLogo from "@icons/Email.astro"
import GithubLogo from "@icons/Github.astro"
import LinkedinLogo from "@icons/Linkedin.astro"

export const mapSocialMediaComponents = {
  [SocialMedia.GITHUB]: GithubLogo,
  [SocialMedia.LINKEDIN]: LinkedinLogo,
  [SocialMedia.CV]: CVLogo,
  [SocialMedia.EMAIL]: EmailLogo,
}
