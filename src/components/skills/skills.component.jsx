'use client';
import { useContext } from 'react';
import DataContext from '../../contexts/data.context';
import './skills.styles.scss'
import OldTv from '../../resources/old-tv.png';

function Skills() {

  const { skills } = useContext(DataContext);

  return (
    <>
      <div className='skills-container'>
        <h2 className='skills-header'>Skills</h2>
        <div className='tv-wrapper'>
          <img src={OldTv} alt='old tv' />
          <div className="skills-list">
            {skills.map((skill) => {
              return (
                <h2 key={skill.name} className='skill' style={{ color: `${skill.color}`}}>{skill.name}</h2>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
