import React from 'react';
import './homepage.css'
import MentorCard from '../components/mentorCard'
import HoriScroll from '../components/horiScroll'
import man1 from '../images/man1.jpg'
import man2 from '../images/man2.jpg'
import man3 from '../images/man3.jpg'
import woman1 from '../images/woman1.jpg'
import woman2 from '../images/woman2.jpg'

class HomePage extends React.Component {
  state = {}

  render(){
    return(
      <div className='page'>
        <section className='mentors'>
          <div className='section-head'>
            <h2>My mentors</h2>
            <p className='headSubtext'>Your recent mentors</p>
          </div>
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
        </section>
      </div>
    )
  }
}

export default HomePage