import React from 'react';
import '../About.css';
import {BsLinkedin , BsGithub , BsGoogle} from 'react-icons/bs';  // import icon as a component !!!


export default function About() {

  return (
    <>
    <div className="wrapper">
    <div className="testimonial">
        <article>
            <h1>About me</h1>
            <img src="/images/MyProfile.jpg" alt=""/>

            <blockquote>
              -- TextUtils is a React based project which can be used to manipulate your text in a way you want.
                 
           </blockquote>
          
            <blockquote>
             -- My name is Akshit Rawat and I am a final year Computer Science Engineering Student at Graphic Era Hill University,Dehradun.As far as my skillsets are concerned I have a good understanding of HTML,CSS,Javascript,Bootstrap,React,PHP and MYSQL.
            </blockquote>
            
            <h5>Akshit Rawat</h5>

            <a className='mx-1' target="_blank" href="https://www.linkedin.com/in/akshit-rawat-175141159/" rel="noreferrer"> <BsLinkedin/></a>
            <a className='mx-1' target="_blank" href="https://github.com/Akshit92-MSIxD?tab=overview&from=2023-08-01&to=2023-08-24" rel="noreferrer"> <BsGithub/></a>
            <a  href="mailto:akshitrawat.amank@gmail.com"  target="_blank" rel="noreferrer"> <BsGoogle/></a>

        </article>
    </div>
</div>

</>

  );
}
