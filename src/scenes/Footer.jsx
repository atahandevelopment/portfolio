import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
return (
    <footer className=" bg-red h-64 pt-10">
<div className="w-5/6 mx-auto" >
    <SocialMediaIcons/>
    <div className="md:flex justify-center md:justify-between text-center">
    <p>HASAN ATAHAN</p>
    <p id="copyright">©2022 ATAHAN. All Rights Reserved.</p>
    </div>
    
</div>
    </footer>
)
}
export default Footer ;