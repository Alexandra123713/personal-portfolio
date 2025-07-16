import { hardSkills, softSkills } from './data.js';

// Display hard skills

const hardSkillsContainer = document.querySelector('.hard-skills-container');

hardSkills.map((el) => {
	hardSkillsContainer.insertAdjacentHTML(
		'beforeend',
		`
    	<div class="skill">
							<div class="name">${el.skill}</div>
                            <div class="img-wrapper">
                            		<img
								src="${el.iconSrc}"
								alt="${el.alt}"
								class="skill-icon" />
                            </div>
						</div>
    `
	);
});

// Display soft skills

const softSkillsContainer = document.querySelector('.soft-skills-container');

softSkills.map((el) => {
	softSkillsContainer.insertAdjacentHTML(
		'beforeend',
		`
    	<div class="skill">
							<div class="name">${el.skill}</div>
                            <div class="img-wrapper">
                            		<img
								src="${el.iconSrc}"
								alt="${el.alt}"
								class="skill-icon" />
                            </div>
						</div>
    `
	);
}); 
