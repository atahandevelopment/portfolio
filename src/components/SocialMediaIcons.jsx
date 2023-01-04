import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const SocialMediaIcons = () => {
  return (
    <div
    className="flex justify-center md:justify-start my-10 gap-7"
    >
        <a
        className="hover:opacity-50 transition duration-500 scale-125 hover:scale-100"
        href="https://www.linkedin.com/in/hasan-atahan-a655ba10b/"
        target="_blank"
        rel="noreferrer"
        >
            <LinkedInIcon/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500 scale-125 hover:scale-100"
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        >
           <FacebookIcon/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500 scale-125 hover:scale-100"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        >
           <InstagramIcon/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500 scale-125 hover:scale-100"
        href="https://github.com/atahandevelopment/"
        target="_blank"
        rel="noreferrer"
        >
            <GitHubIcon/>
        </a>

    </div>
  )
}

export default SocialMediaIcons;