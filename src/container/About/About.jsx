import './About.scss'

import { motion } from 'framer-motion';
import { images } from '../../constants'
//import { AppWrap, MotionWrap } from '../../wrapper';


const About = () => {
    const abouts = [
        {
            title: "Backend development",
            imgUrl: images.about01,
            description: "esto soy para describir"
        },
        {
            title: "sql",
            imgUrl: images.about02,
            description: "otra description"
        }
    ]
    return (
        < >
            <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good Apps</span></h2>

            <div id='about' className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};


export default About;
