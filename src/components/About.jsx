import smile from '../assets/smiling.png'

function About() {
  return (
    <div className="about-section bg-purple-300">
        <div className="about-wrapper">
        <div className="one rounded-lg bg-purple-500 p-8 bg-opacity-50"><h1 className="font-sans font-black text-5xl secondary">About Us</h1>
        <p>Hello! I'm Josiah Newman, a passionate and dedicated fullStack Developer, and I invite you to explore my work and creative journey right here on Honest Brand. While this website may not be my formal portfolio, it serves as a temporary showcase of my design project, skills, and experiences.</p>
        </div>
        <div className="absolute -right-64 sm:right-0 bottom-0">
            <img src={smile} alt='about us picture'/>
        </div>
        </div>
        <div className="before:absolute before:-z-1 before:w-96 before:h-96 before:bg-black before:bg-opacity-20 before:top-1/4 before:right-64 before:rounded-full after:absolute after:-z-1 after:w-72 after:h-72 after:-translate-x-1/4 after:translate-y-1/4 after:bg-purple-300 after:top-1/4 after:right-64 after:rounded-full"></div>
        <div className="hidden md:block before:absolute before:-z-1 before:w-120 before:h-120 before:bg-black before:bg-opacity-20 before:top-1/4 before:left-10 before:rounded-full after:absolute after:-z-1 after:w-96 after:h-96 after:-translate-x-1/4 after:translate-y-1/4 after:bg-purple-300 after:bg-opacity-50 after:top-1/4 after:left-32 after:rounded-full"></div>
        <div className="before:absolute before:-z-1 before:w-64 before:h-64 before:bg-black before:bg-opacity-20 before:bottom-0 before:left-1/4 before:rounded-full after:absolute after:-z-1 after:w-40 after:h-40 after:translate-x-1/4 after:-translate-y-1/4 after:bg-purple-300 after:bg-opacity-70 after:bottom-0 after:left-1/4 after:rounded-full"></div>
        <div className="sm:hidden custom-shape-divider-top-1692801960">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="sm:hidden shape-fill"></path>
    </svg>
</div>
        <div className="sm:hidden custom-shape-divider-bottom-1692801884">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className ="shape-fill"></path>
    </svg>
</div>
      <div className="hidden sm:block custom-shape-divider-top-1691424822">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
<div className ="hidden sm:block custom-shape-divider-bottom-1691424998">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
    </div>
  )
}

export default About
