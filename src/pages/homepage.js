import React from 'react';
import './homepage.css'
import MentorCard from '../components/mentorCard'
import HoriScroll from '../components/horiScroll'
import HPSection from '../components/hpSection'
import ArticleCard from '../components/articleCard'
import man1 from '../images/man1.jpg'
import man2 from '../images/man2.jpg'
import man3 from '../images/man3.jpg'
import woman1 from '../images/woman1.jpg'
import woman2 from '../images/woman2.jpg'
import code from '../images/code.jpg'
import robot from '../images/robot.jpg'
import work from '../images/work.jpg'

class HomePage extends React.Component {
  state = {}

  render(){
    return(
      <div className='page'>
        <HPSection 
          head='My mentors'
          sub='Your recent mentors'
        >
          <HoriScroll>
            <MentorCard
              img={man1}
              name="Kyle Carpenter"
              occupation="Student"
              organization="INIT College"
              online="10 May 2019 at 2.30PM"
            />
            <MentorCard
              img={woman1}
              name="Celine Andrews"
              occupation="Professor"
              organization="University of South Australia"
              online="20 Aug 2019 at 4.45PM"
            />
            <MentorCard
              img={woman2}
              name="Sarah Smith"
              occupation="Editor"
              organization="Las Vegas Sun"
              online="01 Sep 2019 at 8.15AM"
            />
            <MentorCard
              img={man2}
              name="Jacob Allen"
              occupation="Financial Advisor"
              organization="JPMorgan"
              online="03 Sep 2019 at 7.35PM"
            />
            <MentorCard
              img={man3}
              name="Jimmy John"
              occupation="Lawyer"
              organization="Morgan, Lewis & Bockius"
              online="28 Aug 2019 at 10.20AM"
            />
          </HoriScroll>
        </HPSection>
        <HPSection 
          head='Learning Materials'
          sub='Check out whats new.'
        >
          <HoriScroll>
            <ArticleCard
              img={code}
              title="Learn how to code faster"
              publisher="INIT College"
              time="6 minute read"
              views="192812 views"
            />
            <ArticleCard
              img={robot}
              title="The age of robotics"
              publisher="Science Today"
              time="8 minute read"
              views="153135 views"
            />
            <ArticleCard
              img={work}
              title="Improve your productivity"
              publisher="Business Today"
              time="5 minute read"
              views="22513 views"
            />
          </HoriScroll>
        </HPSection>
      </div>
    )
  }
}

export default HomePage